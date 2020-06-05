import { atom } from 'recoil';
import { Covid19CommunityMobilityReports } from '~/data';

const initialState = Covid19CommunityMobilityReports.Constants.Categories.RETAIL_AND_RECREATION;

export const currentGraphSourceState = atom({
  key: 'currentGraphSource',
  default: initialState,
});
