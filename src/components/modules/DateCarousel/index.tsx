import React, { useRef, useCallback, useEffect, FC } from 'react';
import Swiper, { SwiperInstance } from 'react-id-swiper';
import { useRecoilState } from 'recoil';
import TimeUtilities from '~/utilities/time';
import { ISODates } from '~/data';
import { currentDateState } from '~/status/atoms/currentDate';
import Icon, { IconThemes } from '~/components/parts/Icon';
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

interface DateCarouselArrowProps {
  arrow: IconThemes.ARROW_LEFT | IconThemes.ARROW_RIGHT;
  className?: string;
  onClick?: () => void;
}

const dateCarouselArrowModifierClassNames = {
  [IconThemes.ARROW_LEFT]: styles['dateCarousel__arrow--prev'],
  [IconThemes.ARROW_RIGHT]: styles['dateCarousel__arrow--next'],
};

const DateCarouselArrow: FC<DateCarouselArrowProps> = ({ arrow, className, onClick }) => (
  <button
    className={[styles.dateCarousel__arrow, dateCarouselArrowModifierClassNames[arrow], className].join(' ').trim()}
    onClick={onClick}
  >
    <Icon theme={arrow} className={styles.dateCarousel__arrowIcon} />
  </button>
);

interface DateCarouselProps {
  className?: string;
}

const DateCarousel: FC<DateCarouselProps> = ({ className }) => {
  const swiperInstance = useRef<SwiperInstance>(null);
  const [currentDate, setCurrentDate] = useRecoilState(currentDateState);

  const getSwiperInstance = useCallback((swiper: SwiperInstance) => {
    swiperInstance.current = swiper;
  }, []);

  const setIncrementDate = useCallback(() => setCurrentDate(TimeUtilities.incrementDay(currentDate)), [currentDate]);

  const setDecrementDate = useCallback(() => setCurrentDate(TimeUtilities.decrementDay(currentDate)), [currentDate]);

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
    <div className={[styles.dateCarousel, className].join(' ').trim()}>
      <Swiper
        centeredSlides={true}
        slidesPerView="auto"
        initialSlide={dates.length - 1}
        allowTouchMove={false}
        containerClass={styles.dateCarousel__container}
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
      <DateCarouselArrow arrow={IconThemes.ARROW_LEFT} onClick={setDecrementDate} />
      <DateCarouselArrow arrow={IconThemes.ARROW_RIGHT} onClick={setIncrementDate} />
    </div>
  );
};

export default DateCarousel;
