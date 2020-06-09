import { atomFamily, selectorFamily, useRecoilValue } from 'recoil';
import { Covid19CommunityMobilityReports, Prefectures } from '~/data';
import TimeUtilities from '~/utilities/time';
import { currentDateState } from './currentDate';
import { currentGraphSourceState } from './currentGraphSource';

const getCovid19CommunityMobilityReportsData = async (code: Prefectures.Constants.Codes) => {
  const currentDate = useRecoilValue(currentDateState);

  const json = await Covid19CommunityMobilityReports.getJson();

  return json[code].filter((row) => row.date === TimeUtilities.parseISOYYYYMMDDString(currentDate))[0];
};

export const prefectureDataState = atomFamily({
  key: `prefectureData`,
  default: async (code: Prefectures.Constants.Codes) => ({
    name: Prefectures.Constants.Names[code].ja,
    ...(await getCovid19CommunityMobilityReportsData(code)),
  }),
});

export const selectedPrefectureDataState = selectorFamily({
  key: `selectedPrefecuterData`,
  get: (code: Prefectures.Constants.Codes) => async ({ get }) => {
    const data = get(prefectureDataState(code));
    const currentGraphSource = get(currentGraphSourceState);

    return {
      name: Prefectures.Constants.Names[code].ja,
      value: data[currentGraphSource],
    };
  },
});
