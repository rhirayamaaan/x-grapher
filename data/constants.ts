export enum ISODateConstants {
  FIRST_DATE = '2020-02-15',
  LAST_DATE = '2020-05-25',
}

export namespace PrefecturesConstants {
  export enum Codes {
    HOKKAIDO = 'JP-01',
    AOMORI = 'JP-02',
    IWATE = 'JP-03',
    MIYAGI = 'JP-04',
    AKITA = 'JP-05',
    YAMAGATA = 'JP-06',
    FUKUSHIMA = 'JP-07',
    IBARAKI = 'JP-08',
    TOCHIGI = 'JP-09',
    GUNMA = 'JP-10',
    SAITAMA = 'JP-11',
    CHIBA = 'JP-12',
    TOKYO = 'JP-13',
    KANAGAWA = 'JP-14',
    NIIGATA = 'JP-15',
    TOYAMA = 'JP-16',
    ISHIKAWA = 'JP-17',
    FUKUI = 'JP-18',
    YAMANASHI = 'JP-19',
    NAGANO = 'JP-20',
    GIFU = 'JP-21',
    SHIZUOKA = 'JP-22',
    AICHI = 'JP-23',
    MIE = 'JP-24',
    SHIGA = 'JP-25',
    KYOTO = 'JP-26',
    OSAKA = 'JP-27',
    HYOGO = 'JP-28',
    NARA = 'JP-29',
    WAKAYAMA = 'JP-30',
    TOTTORI = 'JP-31',
    SHIMANE = 'JP-32',
    OKAYAMA = 'JP-33',
    HIROSHIMA = 'JP-34',
    YAMAGUCHI = 'JP-35',
    TOKUSHIMA = 'JP-36',
    KAGAWA = 'JP-37',
    EHIME = 'JP-38',
    KOCHI = 'JP-39',
    FUKUOKA = 'JP-40',
    SAGA = 'JP-41',
    NAGASAKI = 'JP-42',
    KUMAMOTO = 'JP-43',
    OITA = 'JP-44',
    MIYAZAKI = 'JP-45',
    KAGOSHIMA = 'JP-46',
    OKINAWA = 'JP-47',
  }

  export type CodeKeysType = keyof typeof Codes;

  export const codeKeys: CodeKeysType[] = [
    'HOKKAIDO',
    'AOMORI',
    'IWATE',
    'MIYAGI',
    'AKITA',
    'YAMAGATA',
    'FUKUSHIMA',
    'IBARAKI',
    'TOCHIGI',
    'GUNMA',
    'SAITAMA',
    'CHIBA',
    'TOKYO',
    'KANAGAWA',
    'NIIGATA',
    'TOYAMA',
    'ISHIKAWA',
    'FUKUI',
    'YAMANASHI',
    'NAGANO',
    'GIFU',
    'SHIZUOKA',
    'AICHI',
    'MIE',
    'SHIGA',
    'KYOTO',
    'OSAKA',
    'HYOGO',
    'NARA',
    'WAKAYAMA',
    'TOTTORI',
    'SHIMANE',
    'OKAYAMA',
    'HIROSHIMA',
    'YAMAGUCHI',
    'TOKUSHIMA',
    'KAGAWA',
    'EHIME',
    'KOCHI',
    'FUKUOKA',
    'SAGA',
    'NAGASAKI',
    'KUMAMOTO',
    'OITA',
    'MIYAZAKI',
    'KAGOSHIMA',
    'OKINAWA',
  ];

  const enNames = [
    'Hokkaido',
    'Aomori',
    'Iwate',
    'Miyagi',
    'Akita',
    'Yamagata',
    'Fukushima',
    'Ibaraki',
    'Tochigi',
    'Gunma',
    'Saitama',
    'Chiba',
    'Tokyo',
    'Kanagawa',
    'Niigata',
    'Toyama',
    'Ishikawa',
    'Fukui',
    'Yamanashi',
    'Nagano',
    'Gifu',
    'Shizuoka',
    'Aichi',
    'Mie',
    'Shiga',
    'Kyoto',
    'Osaka',
    'Hyogo',
    'Nara',
    'Wakayama',
    'Tottori',
    'Shimane',
    'Okayama',
    'Hiroshima',
    'Yamaguchi',
    'Tokushima',
    'Kagawa',
    'Ehime',
    'Kochi',
    'Fukuoka',
    'Saga',
    'Nagasaki',
    'Kumamoto',
    'Oita',
    'Miyazaki',
    'Kagoshima',
    'Okinawa',
  ];

  const jaNames = [
    '北海道',
    '青森県',
    '岩手県',
    '宮城県',
    '秋田県',
    '山形県',
    '福島県',
    '茨城県',
    '栃木県',
    '群馬県',
    '埼玉県',
    '千葉県',
    '東京都',
    '神奈川県',
    '新潟県',
    '富山県',
    '石川県',
    '福井県',
    '山梨県',
    '長野県',
    '岐阜県',
    '静岡県',
    '愛知県',
    '三重県',
    '滋賀県',
    '京都府',
    '大阪府',
    '兵庫県',
    '奈良県',
    '和歌山県',
    '鳥取県',
    '島根県',
    '岡山県',
    '広島県',
    '山口県',
    '徳島県',
    '香川県',
    '愛媛県',
    '高知県',
    '福岡県',
    '佐賀県',
    '長崎県',
    '熊本県',
    '大分県',
    '宮崎県',
    '鹿児島県',
    '沖縄県',
  ];

  export type EnNamesType = typeof enNames[number];

  export type JaNamesType = typeof jaNames[number];

  export type NamesType = { [key in Codes]: { en: EnNamesType; ja: JaNamesType } };

  export const Names: NamesType = {
    [Codes.HOKKAIDO]: { en: enNames[0], ja: jaNames[0] },
    [Codes.AOMORI]: { en: enNames[1], ja: jaNames[1] },
    [Codes.IWATE]: { en: enNames[2], ja: jaNames[2] },
    [Codes.MIYAGI]: { en: enNames[3], ja: jaNames[3] },
    [Codes.AKITA]: { en: enNames[4], ja: jaNames[4] },
    [Codes.YAMAGATA]: { en: enNames[5], ja: jaNames[5] },
    [Codes.FUKUSHIMA]: { en: enNames[6], ja: jaNames[6] },
    [Codes.IBARAKI]: { en: enNames[7], ja: jaNames[7] },
    [Codes.TOCHIGI]: { en: enNames[8], ja: jaNames[8] },
    [Codes.GUNMA]: { en: enNames[9], ja: jaNames[9] },
    [Codes.SAITAMA]: { en: enNames[10], ja: jaNames[10] },
    [Codes.CHIBA]: { en: enNames[11], ja: jaNames[11] },
    [Codes.TOKYO]: { en: enNames[12], ja: jaNames[12] },
    [Codes.KANAGAWA]: { en: enNames[13], ja: jaNames[13] },
    [Codes.NIIGATA]: { en: enNames[14], ja: jaNames[14] },
    [Codes.TOYAMA]: { en: enNames[15], ja: jaNames[15] },
    [Codes.ISHIKAWA]: { en: enNames[16], ja: jaNames[16] },
    [Codes.FUKUI]: { en: enNames[17], ja: jaNames[17] },
    [Codes.YAMANASHI]: { en: enNames[18], ja: jaNames[18] },
    [Codes.NAGANO]: { en: enNames[19], ja: jaNames[19] },
    [Codes.GIFU]: { en: enNames[20], ja: jaNames[20] },
    [Codes.SHIZUOKA]: { en: enNames[21], ja: jaNames[21] },
    [Codes.AICHI]: { en: enNames[22], ja: jaNames[22] },
    [Codes.MIE]: { en: enNames[23], ja: jaNames[23] },
    [Codes.SHIGA]: { en: enNames[24], ja: jaNames[24] },
    [Codes.KYOTO]: { en: enNames[25], ja: jaNames[25] },
    [Codes.OSAKA]: { en: enNames[26], ja: jaNames[26] },
    [Codes.HYOGO]: { en: enNames[27], ja: jaNames[27] },
    [Codes.NARA]: { en: enNames[28], ja: jaNames[28] },
    [Codes.WAKAYAMA]: { en: enNames[29], ja: jaNames[29] },
    [Codes.TOTTORI]: { en: enNames[30], ja: jaNames[30] },
    [Codes.SHIMANE]: { en: enNames[31], ja: jaNames[31] },
    [Codes.OKAYAMA]: { en: enNames[32], ja: jaNames[32] },
    [Codes.HIROSHIMA]: { en: enNames[33], ja: jaNames[33] },
    [Codes.YAMAGUCHI]: { en: enNames[34], ja: jaNames[34] },
    [Codes.TOKUSHIMA]: { en: enNames[35], ja: jaNames[35] },
    [Codes.KAGAWA]: { en: enNames[36], ja: jaNames[36] },
    [Codes.EHIME]: { en: enNames[37], ja: jaNames[37] },
    [Codes.KOCHI]: { en: enNames[38], ja: jaNames[38] },
    [Codes.FUKUOKA]: { en: enNames[39], ja: jaNames[39] },
    [Codes.SAGA]: { en: enNames[40], ja: jaNames[40] },
    [Codes.NAGASAKI]: { en: enNames[41], ja: jaNames[41] },
    [Codes.KUMAMOTO]: { en: enNames[42], ja: jaNames[42] },
    [Codes.OITA]: { en: enNames[43], ja: jaNames[43] },
    [Codes.MIYAZAKI]: { en: enNames[44], ja: jaNames[44] },
    [Codes.KAGOSHIMA]: { en: enNames[45], ja: jaNames[45] },
    [Codes.OKINAWA]: { en: enNames[46], ja: jaNames[46] },
  };

  const prefecturalSeatNames = [
    '札幌',
    '青森',
    '盛岡',
    '仙台',
    '秋田',
    '山形',
    '福島',
    '水戸',
    '宇都宮',
    '前橋',
    'さいたま',
    '千葉',
    '東京',
    '横浜',
    '新潟',
    '富山',
    '金沢',
    '福井',
    '甲府',
    '長野',
    '岐阜',
    '静岡',
    '名古屋',
    '津',
    '大津',
    '京都',
    '大阪',
    '神戸',
    '奈良',
    '和歌山',
    '鳥取',
    '松江',
    '岡山',
    '広島',
    '山口',
    '徳島',
    '高松',
    '松山',
    '高知',
    '福岡',
    '佐賀',
    '長崎',
    '熊本',
    '大分',
    '宮崎',
    '鹿児島',
    '那覇',
  ];

  export type PrefecturalSeatNamesType = typeof prefecturalSeatNames[number];

  export type PrefecturalSeatsType = { [key in Codes]: PrefecturalSeatNamesType };

  export const PrefecturalSeats: PrefecturalSeatsType = {
    [Codes.HOKKAIDO]: prefecturalSeatNames[0],
    [Codes.AOMORI]: prefecturalSeatNames[1],
    [Codes.IWATE]: prefecturalSeatNames[2],
    [Codes.MIYAGI]: prefecturalSeatNames[3],
    [Codes.AKITA]: prefecturalSeatNames[4],
    [Codes.YAMAGATA]: prefecturalSeatNames[5],
    [Codes.FUKUSHIMA]: prefecturalSeatNames[6],
    [Codes.IBARAKI]: prefecturalSeatNames[7],
    [Codes.TOCHIGI]: prefecturalSeatNames[8],
    [Codes.GUNMA]: prefecturalSeatNames[9],
    [Codes.SAITAMA]: prefecturalSeatNames[10],
    [Codes.CHIBA]: prefecturalSeatNames[11],
    [Codes.TOKYO]: prefecturalSeatNames[12],
    [Codes.KANAGAWA]: prefecturalSeatNames[13],
    [Codes.NIIGATA]: prefecturalSeatNames[14],
    [Codes.TOYAMA]: prefecturalSeatNames[15],
    [Codes.ISHIKAWA]: prefecturalSeatNames[16],
    [Codes.FUKUI]: prefecturalSeatNames[17],
    [Codes.YAMANASHI]: prefecturalSeatNames[18],
    [Codes.NAGANO]: prefecturalSeatNames[19],
    [Codes.GIFU]: prefecturalSeatNames[20],
    [Codes.SHIZUOKA]: prefecturalSeatNames[21],
    [Codes.AICHI]: prefecturalSeatNames[22],
    [Codes.MIE]: prefecturalSeatNames[23],
    [Codes.SHIGA]: prefecturalSeatNames[24],
    [Codes.KYOTO]: prefecturalSeatNames[25],
    [Codes.OSAKA]: prefecturalSeatNames[26],
    [Codes.HYOGO]: prefecturalSeatNames[27],
    [Codes.NARA]: prefecturalSeatNames[28],
    [Codes.WAKAYAMA]: prefecturalSeatNames[29],
    [Codes.TOTTORI]: prefecturalSeatNames[30],
    [Codes.SHIMANE]: prefecturalSeatNames[31],
    [Codes.OKAYAMA]: prefecturalSeatNames[32],
    [Codes.HIROSHIMA]: prefecturalSeatNames[33],
    [Codes.YAMAGUCHI]: prefecturalSeatNames[34],
    [Codes.TOKUSHIMA]: prefecturalSeatNames[35],
    [Codes.KAGAWA]: prefecturalSeatNames[36],
    [Codes.EHIME]: prefecturalSeatNames[37],
    [Codes.KOCHI]: prefecturalSeatNames[38],
    [Codes.FUKUOKA]: prefecturalSeatNames[39],
    [Codes.SAGA]: prefecturalSeatNames[40],
    [Codes.NAGASAKI]: prefecturalSeatNames[41],
    [Codes.KUMAMOTO]: prefecturalSeatNames[42],
    [Codes.OITA]: prefecturalSeatNames[43],
    [Codes.MIYAZAKI]: prefecturalSeatNames[44],
    [Codes.KAGOSHIMA]: prefecturalSeatNames[45],
    [Codes.OKINAWA]: prefecturalSeatNames[46],
  };
}