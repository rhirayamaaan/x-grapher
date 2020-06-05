import Covid19CommunityMobilityReportsConstants from './constants';

namespace Covid19CommunityMobilityReportsInterfaces {
  export interface PrefectureData {
    date: string;
    [Covid19CommunityMobilityReportsConstants.Categories.RETAIL_AND_RECREATION]: number | null;
    [Covid19CommunityMobilityReportsConstants.Categories.GROCERY_AND_PHARMACY]: number | null;
    [Covid19CommunityMobilityReportsConstants.Categories.PARKS]: number | null;
    [Covid19CommunityMobilityReportsConstants.Categories.TRANSIT_STATIONS]: number | null;
    [Covid19CommunityMobilityReportsConstants.Categories.WORKSPACES]: number | null;
  }

  export type Json = {
    [key: string]: PrefectureData[];
  };
}

export default Covid19CommunityMobilityReportsInterfaces;
