import { atom } from 'recoil';
import { JapanMeteorologicalAgency } from '~/data';

const initialState = JapanMeteorologicalAgency.Constants.Categories.HIGHEST_TEMPERATURE;

export const currentSortSoucceState = atom({
  key: 'currentSortSource',
  default: initialState,
});
