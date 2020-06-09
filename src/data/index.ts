import { ISODateConstants, PrefecturesConstants } from '../../data/constants';
import Covid19CommunityMobilityReportsConstants from '../../data/Google/Covid-19CommunityMobilityReports/constants';

namespace ISODates {
  export import Constants = ISODateConstants;
}

namespace Prefectures {
  export import Constants = PrefecturesConstants;
}

namespace Covid19CommunityMobilityReports {
  export const getJson = async () => await import('../../data/Google/Covid-19CommunityMobilityReports/data.json');

  export namespace Constants {
    export import Categories = Covid19CommunityMobilityReportsConstants.Categories;
    export const jaCategoryNames: { [key in Constants.Categories]: string } = {
      [Categories.RETAIL_AND_RECREATION]: '小売、娯楽',
      [Categories.GROCERY_AND_PHARMACY]: '食料品店、薬局',
      [Categories.PARKS]: '公園',
      [Categories.TRANSIT_STATIONS]: '乗換駅',
      [Categories.WORKSPACES]: '職場',
    };
  }
}

namespace JapanMeteorologicalAgency {
  export namespace Constants {
    export enum Categories {
      HIGHEST_TEMPERATURE = 'highestTemperature',
      LOWEST_TEMPERATURE = 'lowestTemperature',
      MAXIMUM_SUSTAINED_WINDS = 'maximumSustainedWinds',
      RAINFALL = 'rainfall',
      SUNLIGHT_HOURS = 'sunlightHours',
    }

    export const jaCategoryNames: { [key in Constants.Categories]: string } = {
      [Constants.Categories.HIGHEST_TEMPERATURE]: '最高気温',
      [Constants.Categories.LOWEST_TEMPERATURE]: '最低気温',
      [Constants.Categories.MAXIMUM_SUSTAINED_WINDS]: '最大風速',
      [Constants.Categories.RAINFALL]: '降水量',
      [Constants.Categories.SUNLIGHT_HOURS]: '日照時間',
    };
  }

  interface JsonData {
    [key: string]: {
      [key: string]: {
        value: number;
        direction?: string;
      };
    };
  }

  type JsonsData = {
    [key in JapanMeteorologicalAgency.Constants.Categories]: JsonData;
  };

  export const getJsons = async () => {
    const results = await Promise.all([
      await import('../../data/JapanMeteorologicalAgency/jsons/highestTemperature.json'),
      await import('../../data/JapanMeteorologicalAgency/jsons/lowestTemperature.json'),
      await import('../../data/JapanMeteorologicalAgency/jsons/maximumSustainedWinds.json'),
      await import('../../data/JapanMeteorologicalAgency/jsons/rainfall.json'),
      await import('../../data/JapanMeteorologicalAgency/jsons/sunlightHours.json'),
    ]);

    return {
      [Constants.Categories.HIGHEST_TEMPERATURE]: results[0].default,
      [Constants.Categories.LOWEST_TEMPERATURE]: results[1].default,
      [Constants.Categories.MAXIMUM_SUSTAINED_WINDS]: results[2].default,
      [Constants.Categories.RAINFALL]: results[3].default,
      [Constants.Categories.SUNLIGHT_HOURS]: results[4].default,
    } as JsonsData;
  };
}

export { ISODates, Prefectures, Covid19CommunityMobilityReports, JapanMeteorologicalAgency };
