namespace JapanMeteorologicalAgencyInterfaces {
  export interface PrefectureData {
    [key: string]: {
      value: number | null;
      direction?: string;
    };
  }

  export interface Json {
    [key: string]: PrefectureData;
  }
}

export default JapanMeteorologicalAgencyInterfaces;
