import React, { useRef, useCallback, useEffect, FC } from 'react';
import Swiper, { SwiperInstance } from 'react-id-swiper';
import { useRecoilState } from 'recoil';
import TimeUtilities from '~/utilities/time';
import { ISODates } from '~/data';
import { currentDateState } from '~/status/atoms/currentDate';
import 'swiper/css/swiper.min.css';
import styles from './styles.scss';

const dates = (() => {
  let lastDateMoment = TimeUtilities.getMoment(ISODates.Constants.LAST_DATE);

  const firstDateMoment = TimeUtilities.getMoment(ISODates.Constants.FIRST_DATE);

  return [
    lastDateMoment.toDate(),
    ...[...Array(lastDateMoment.diff(firstDateMoment, 'd'))].map(() => {
      lastDateMoment = lastDateMoment.subtract(1, 'days');
      return lastDateMoment.toDate();
    }),
  ].reverse();
})();

interface DataCarouselProps {
  className?: string;
}

const DateCarousel: FC<DataCarouselProps> = ({ className }) => {
  const swiperInstance = useRef<SwiperInstance>(null);
  const [currentDate, setCurrentDate] = useRecoilState(currentDateState);

  const getSwiperInstance = useCallback((swiper: SwiperInstance) => {
    swiperInstance.current = swiper;
  }, []);

  useEffect(() => {
    const index = dates.findIndex((date) => {
      return TimeUtilities.parseJaMMDDString(date) === TimeUtilities.parseJaMMDDString(currentDate);
    });

    if (index < 0) {
      return;
    }

    swiperInstance.current?.slideTo(index);
  }, [currentDate]);

  return (
    <Swiper
      centeredSlides={true}
      slidesPerView="auto"
      initialSlide={dates.length - 1}
      allowTouchMove={false}
      containerClass={[styles.dateCarousel, className].join(' ').trim()}
      getSwiper={getSwiperInstance}
    >
      {dates.map((date) => {
        const dateString = TimeUtilities.parseJaMMDDString(date);
        return (
          <div
            key={dateString}
            className={[
              styles.dateCarousel__item,
              styles[`dateCarousel__item--${TimeUtilities.checkHoliday(date) || ''}`],
            ]
              .join(' ')
              .trim()}
            onClick={() => setCurrentDate(date)}
          >
            <span>{dateString}</span>
            <span>{TimeUtilities.parseJaWeekdayName(date)}</span>
          </div>
        );
      })}
    </Swiper>
  );
};

export default DateCarousel;
