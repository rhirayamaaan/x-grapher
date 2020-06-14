import fs from 'fs';
import path from 'path';
import { parse } from '@fast-csv/parse';
import moment from 'moment-timezone';
import { ISODateConstants, PrefecturesConstants } from '../../constants';
import { default as Interfaces } from './interfaces';
import { default as Constants } from './constants';

const TIMEZONE = 'Asia/Tokyo';

class JsonCreator {
  public prefectures: string[] = [];

  private _json: Interfaces.Json | null = null;

  private _getPrefectureCode(prefecture: PrefecturesConstants.PrefecturalSeatNamesType) {
    let id: PrefecturesConstants.Codes | undefined;

    (Object.keys(PrefecturesConstants.Names) as (keyof PrefecturesConstants.NamesType)[]).forEach((key) => {
      if (PrefecturesConstants.Names[key].en === prefecture) {
        id = key;
      }
    });

    return id;
  }

  public add(prefectureCode: string, data: Interfaces.PrefectureData) {
    if (typeof prefectureCode === 'undefined') {
      return this;
    }

    if (!this.prefectures.some((current) => current === prefectureCode)) {
      if (this._json === null) {
        this._json = {
          [prefectureCode]: [],
        };
      } else {
        this._json[prefectureCode] = [];
      }

      this.prefectures.push(prefectureCode);
    }

    if (this._json !== null) {
      this._json[prefectureCode].push({ ...data });
    }

    return this;
  }

  public get json() {
    return this._json;
  }

  constructor() {
    return this;
  }
}

const checkNumber = (string: string) => {
  const number = parseInt(string);

  if (isNaN(number) || !isFinite(number)) {
    return null;
  }

  return number;
};

const prefecturesJsonCreator = new JsonCreator();

fs.createReadStream(path.resolve(__dirname, 'raw.csv'))
  .pipe(parse<string[], string[]>())
  .on('data', (row: string[]) => {
    if (
      row[0] !== 'JP' ||
      row[2].length === 0 ||
      !moment(row[6]).tz(TIMEZONE).isBetween(ISODateConstants.FIRST_DATE, ISODateConstants.LAST_DATE, 'day', '[]')
    ) {
      return;
    }

    prefecturesJsonCreator.add(row[4], {
      date: row[6],
      [Constants.Categories.RETAIL_AND_RECREATION]: checkNumber(row[7]),
      [Constants.Categories.GROCERY_AND_PHARMACY]: checkNumber(row[8]),
      [Constants.Categories.PARKS]: checkNumber(row[9]),
      [Constants.Categories.TRANSIT_STATIONS]: checkNumber(row[10]),
      [Constants.Categories.WORKSPACES]: checkNumber(row[11]),
    });
  })
  .on('end', () => {
    fs.writeFile(path.resolve(__dirname, 'data.json'), JSON.stringify(prefecturesJsonCreator.json), () =>
      console.log('Success.')
    );
  });
