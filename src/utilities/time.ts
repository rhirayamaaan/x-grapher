import moment from 'moment-timezone';
import { isHoliday } from 'japanese-holidays';
import 'moment/locale/ja';

const TIMEZONE = 'Asia/Tokyo';

namespace TimeUtilities {
  export const getMoment = (date?: Date | string, format?: string) => moment(date, format).tz(TIMEZONE);

  export const getDate = (date?: Date | string) => getMoment(date).toDate();

  export const parseJaYYYYMMDDString = (date: Date) => getMoment(date).format('YYYY/M/D');

  export const parseJaMMDDString = (date: Date) => getMoment(date).format('M/D');

  export const parseISOYYYYMMDDString = (date: Date) => getMoment(date).format('YYYY-MM-DD');

  export enum HolidayTypes {
    SANDAY = 'sunday',
    SATURDAY = 'saturday',
    NATIONAL_HOLIDAY = 'nationalHoliday',
  }

  export const checkHoliday = (date: Date) => {
    const weekdayNumber = getMoment(date).weekday();
    const japaneseHoliday = isHoliday(date);

    if (typeof japaneseHoliday !== 'undefined') {
      return HolidayTypes.NATIONAL_HOLIDAY;
    }

    if (weekdayNumber === 0) {
      return HolidayTypes.SANDAY;
    }

    if (weekdayNumber === 6) {
      return HolidayTypes.SATURDAY;
    }

    return null;
  };

  export const jaWeekdayNames = ['日', '月', '火', '水', '木', '金', '土'];

  export const parseJaWeekdayName = (date: Date) => jaWeekdayNames[getMoment(date).weekday()];
}

export default TimeUtilities;
