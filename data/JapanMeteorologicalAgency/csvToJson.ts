import fs from 'fs';
import path from 'path';
import { decodeStream } from 'iconv-lite';
import moment from 'moment-timezone';
import { parse } from '@fast-csv/parse';
import Interfaces from './interfaces';
import { PrefecturesConstants } from '../constants';

const TIMEZONE = 'Asia/Tokyo';

const rawFileNames = fs.readdirSync(path.resolve(__dirname, 'raws/')).filter((path) => path.match(/\.csv$/) !== null);

class JsonCreator {
  public static PREFECTURE_SEATS_JUDGE_WORD = '札幌';

  public static PHENOMENON_FLAG_HEAD_NAME = '現象なし情報';

  public static WIND_DIRECTION_HEAD_NAME = '風向';

  private _prefecturalSeats: string[] = [];

  private _hasPrefectureSeats = false;

  public set prefecturalSeats(prefecturalSeats: string[]) {
    if (this._hasPrefectureSeats) {
      return;
    }

    this._prefecturalSeats = prefecturalSeats;
    this._hasPrefectureSeats = true;
  }

  public get hasPrefectureSeats() {
    return this._hasPrefectureSeats;
  }

  private _phenomenonFlags: string[] = [];

  private _hasPhenomenonFlags = false;

  public set phenomenonFlags(phenomenonFlags: string[]) {
    if (this._hasPhenomenonFlags) {
      return;
    }

    this._phenomenonFlags = phenomenonFlags;
    this._hasPhenomenonFlags = true;
  }

  public get hasPhenomenonFlags() {
    return this._hasPhenomenonFlags;
  }

  private _windDirections: string[] = [];

  private _hasWindDirections = false;

  public set windDirections(windDirections: string[]) {
    if (this._hasWindDirections) {
      return;
    }
    this._windDirections = windDirections;
    this._hasWindDirections = true;
  }

  public get hasWindDirections() {
    return this._hasWindDirections;
  }

  private _json: Interfaces.Json | null = null;

  private _checkNumber = (string: string) => {
    const number = Number(string);

    if (isNaN(number) || !isFinite(number)) {
      return null;
    }

    return number;
  };

  private _getPrefectureCode(prefecturalSeat: PrefecturesConstants.PrefecturalSeatNamesType) {
    let id: PrefecturesConstants.Codes | undefined;

    (Object.keys(PrefecturesConstants.PrefecturalSeats) as (keyof PrefecturesConstants.NamesType)[]).forEach((key) => {
      if (PrefecturesConstants.PrefecturalSeats[key] === prefecturalSeat) {
        id = key;
      }
    });

    return id;
  }

  public add(data: string[]) {
    if (!this._hasPrefectureSeats) {
      return this;
    }

    // ヘッダー部分は除外
    if (data[0].length <= 0) {
      return this;
    }

    data.forEach((value, index, array) => {
      // データが無かったら除外
      if (value.length <= 0) {
        return;
      }

      // 現状なし情報のデータは除外
      if (
        this._hasPhenomenonFlags &&
        this._phenomenonFlags[index].indexOf(JsonCreator.PHENOMENON_FLAG_HEAD_NAME) >= 0
      ) {
        return;
      }

      const [year, month, day] = array[0].split('/').map((value) => this._checkNumber(value));

      // date がない場合はヘッダーなので除外
      if (year === null || month === null || day === null) {
        return;
      }

      const date = moment([year, month - 1, day])
        .tz(TIMEZONE)
        .format('YYYY-MM-DD');

      const prefecturalSeat = this._prefecturalSeats[index];

      // 県庁所在地のデータがない場合は除外
      if (prefecturalSeat.length <= 0) {
        return;
      }

      const prefectureCode = this._getPrefectureCode(prefecturalSeat);

      if (typeof prefectureCode === 'undefined') {
        return;
      }

      // json のベースがセットされていない場合はセット
      if (this._json === null) {
        this._json = {
          [date]: {
            [prefectureCode]: {
              value: null,
            },
          },
        };
      } else if (typeof this._json[date] === 'undefined') {
        this._json[date] = {
          [prefectureCode]: {
            value: null,
          },
        };
      }

      // 風向のデータ特有の処理
      if (this._hasWindDirections && this._windDirections[index].indexOf(JsonCreator.WIND_DIRECTION_HEAD_NAME) >= 0) {
        this._json[date][prefectureCode].direction = value;
        return;
      }

      const numberValue = this._checkNumber(value);

      // 値が有効ではない場合は除外
      // （`row[0] = '年月日'`のときの行の場合を除外）
      if (numberValue === null) {
        return;
      }

      this._json[date][prefectureCode] = {
        value: numberValue,
      };
    });

    return this;
  }

  public get json() {
    return this._json;
  }

  constructor() {
    return this;
  }
}

const readFile = (fileName: string) => {
  const jsonCreator = new JsonCreator();

  fs.createReadStream(path.resolve(__dirname, 'raws/', fileName))
    .pipe(decodeStream('Shift_JIS'))
    .pipe(
      parse<string[], string[]>({ skipLines: 3 })
    )
    .on('data', (row: string[]) => {
      if (row[0].length <= 0 && row.indexOf(JsonCreator.PREFECTURE_SEATS_JUDGE_WORD) >= 0) {
        jsonCreator.prefecturalSeats = row;
        return;
      }

      if (row[0].length <= 0 && row.indexOf(JsonCreator.PHENOMENON_FLAG_HEAD_NAME) >= 0) {
        jsonCreator.phenomenonFlags = row;
        return;
      }

      if (row[0].length <= 0 && row.indexOf(JsonCreator.WIND_DIRECTION_HEAD_NAME) >= 0) {
        jsonCreator.windDirections = row;
        return;
      }

      jsonCreator.add(row);
    })
    .on('end', () => {
      const jsonFileName = `${path.basename(fileName, '.csv')}.json`;
      fs.writeFile(path.resolve(__dirname, 'jsons', jsonFileName), JSON.stringify(jsonCreator.json), () =>
        console.log(`${jsonFileName} - Success.`)
      );
    });
};

rawFileNames.map((path) => readFile(path));
