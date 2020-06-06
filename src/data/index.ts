import { ISODateConstants, PrefecturesConstants } from '../../data/constants';
import Covid19CommunityMobilityReportsJson from '../../data/Google/Covid-19CommunityMobilityReports/data.json';
import Covid19CommunityMobilityReportsConstants from '../../data/Google/Covid-19CommunityMobilityReports/constants';
import JapanMeteorologicalAgencyHighestTemperature from '../../data/JapanMeteorologicalAgency/jsons/highestTemperature.json';
import JapanMeteorologicalAgencyLowestTemperature from '../../data/JapanMeteorologicalAgency/jsons/lowestTemperature.json';
import JapanMeteorologicalAgencyMaximumSustainedWinds from '../../data/JapanMeteorologicalAgency/jsons/maximumSustainedWinds.json';
import JapanMeteorologicalAgencyRainfall from '../../data/JapanMeteorologicalAgency/jsons/rainfall.json';
import JapanMeteorologicalAgencySunlightHours from '../../data/JapanMeteorologicalAgency/jsons/sunlightHours.json';

namespace ISODates {
  export import Constants = ISODateConstants;
}

namespace Prefectures {
  export import Constants = PrefecturesConstants;
}

namespace Covid19CommunityMobilityReports {
  export const Json = Covid19CommunityMobilityReportsJson;
  export import Constants = Covid19CommunityMobilityReportsConstants;
  export const jaCategoryNames: { [key in Constants.Categories]: string } = {
    [Constants.Categories.RETAIL_AND_RECREATION]: '小売、娯楽',
    [Constants.Categories.GROCERY_AND_PHARMACY]: '食料品店、薬局',
    [Constants.Categories.PARKS]: '公園',
    [Constants.Categories.TRANSIT_STATIONS]: '乗換駅',
    [Constants.Categories.WORKSPACES]: '職場',
  };
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

  export const Jsons = {
    [Constants.Categories.HIGHEST_TEMPERATURE]: JapanMeteorologicalAgencyHighestTemperature,
    [Constants.Categories.LOWEST_TEMPERATURE]: JapanMeteorologicalAgencyLowestTemperature,
    [Constants.Categories.MAXIMUM_SUSTAINED_WINDS]: JapanMeteorologicalAgencyMaximumSustainedWinds,
    [Constants.Categories.RAINFALL]: JapanMeteorologicalAgencyRainfall,
    [Constants.Categories.SUNLIGHT_HOURS]: JapanMeteorologicalAgencySunlightHours,
  } as JsonsData;
}

export { ISODates, Prefectures, Covid19CommunityMobilityReports, JapanMeteorologicalAgency };
