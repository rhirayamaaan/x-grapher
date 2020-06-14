import { atom } from 'recoil';
import { JapanMeteorologicalAgency } from '~/data';

enum CurrentSortSourcesDefaultType {
  DEFAULT = 'default',
}

export namespace CurrentSortSourceConstants {
  export enum Types {
    HIGHEST_TEMPERATURE = JapanMeteorologicalAgency.Constants.Categories.HIGHEST_TEMPERATURE,
    LOWEST_TEMPERATURE = JapanMeteorologicalAgency.Constants.Categories.LOWEST_TEMPERATURE,
    MAXIMUM_SUSTAINED_WINDS = JapanMeteorologicalAgency.Constants.Categories.MAXIMUM_SUSTAINED_WINDS,
    RAINFALL = JapanMeteorologicalAgency.Constants.Categories.RAINFALL,
    SUNLIGHT_HOURS = JapanMeteorologicalAgency.Constants.Categories.SUNLIGHT_HOURS,
    DEFAULT = CurrentSortSourcesDefaultType.DEFAULT,
  }

  export const jaCategoryNames = {
    [Types.HIGHEST_TEMPERATURE]: JapanMeteorologicalAgency.Constants.jaCategoryNames.highestTemperature,
    [Types.LOWEST_TEMPERATURE]: JapanMeteorologicalAgency.Constants.jaCategoryNames.lowestTemperature,
    [Types.MAXIMUM_SUSTAINED_WINDS]: JapanMeteorologicalAgency.Constants.jaCategoryNames.maximumSustainedWinds,
    [Types.RAINFALL]: JapanMeteorologicalAgency.Constants.jaCategoryNames.rainfall,
    [Types.SUNLIGHT_HOURS]: JapanMeteorologicalAgency.Constants.jaCategoryNames.sunlightHours,
    [Types.DEFAULT]: '指定なし',
  };

  export const jaUnitNames = {
    [Types.HIGHEST_TEMPERATURE]: JapanMeteorologicalAgency.Constants.jaUnitNames.highestTemperature,
    [Types.LOWEST_TEMPERATURE]: JapanMeteorologicalAgency.Constants.jaUnitNames.lowestTemperature,
    [Types.MAXIMUM_SUSTAINED_WINDS]: JapanMeteorologicalAgency.Constants.jaUnitNames.maximumSustainedWinds,
    [Types.RAINFALL]: JapanMeteorologicalAgency.Constants.jaUnitNames.rainfall,
    [Types.SUNLIGHT_HOURS]: JapanMeteorologicalAgency.Constants.jaUnitNames.sunlightHours,
    [Types.DEFAULT]: '指定なし',
  };
}

const initialState = CurrentSortSourceConstants.Types.HIGHEST_TEMPERATURE;

export const currentSortSourceState = atom<CurrentSortSourceConstants.Types>({
  key: 'currentSortSource',
  default: initialState,
});
