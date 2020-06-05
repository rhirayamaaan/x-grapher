import { atom } from 'recoil';
import TimeUtilities from '~/utilities/time';
import { ISODates } from '~/data';

const initialState = TimeUtilities.getDate(ISODates.Constants.LAST_DATE);

export const currentDateState = atom({
  key: 'currentDate',
  default: initialState,
});
