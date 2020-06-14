import React, { FC, createElement, SVGAttributes } from 'react';
import styles from './styles.scss';
import ArrowLeft from 'material-design-icons/hardware/svg/production/ic_keyboard_arrow_left_24px.svg';
import ArrowRight from 'material-design-icons/hardware/svg/production/ic_keyboard_arrow_right_24px.svg';
import BuildingIcon from 'material-design-icons/social/svg/production/ic_domain_24px.svg';
import CartIcon from 'material-design-icons/action/svg/production/ic_shopping_cart_24px.svg';
import ParkIcon from 'material-design-icons/image/svg/production/ic_nature_people_24px.svg';
import SortIcon from 'material-design-icons/content/svg/production/ic_sort_24px.svg';
import StoreIcon from 'material-design-icons/action/svg/production/ic_store_24px.svg';
import TrainIcon from 'material-design-icons/maps/svg/production/ic_train_24px.svg';
import CelsiusIcon from 'weather-icons/svg/wi-celsius.svg';
import RainIcon from 'weather-icons/svg/wi-rain.svg';
import SunIcon from 'weather-icons/svg/wi-day-sunny.svg';
import ThermometerIcon from 'weather-icons/svg/wi-thermometer.svg';
import WindIcon from 'weather-icons/svg/wi-strong-wind.svg';

export enum IconThemes {
  ARROW_LEFT = 'arrowLeft',
  ARROW_RIGHT = 'arrowRight',
  BUILDING = 'building',
  CART = 'cart',
  CELSIUS = 'celcius',
  PARK = 'park',
  RAIN = 'rain',
  SORT = 'sort',
  STORE = 'store',
  SUN = 'sun',
  THERMOMETER = 'thermometer',
  TRAIN = 'train',
  WIND = 'wind',
}

const IconComponents: { [key in IconThemes]: FC<SVGAttributes<SVGElement>> } = {
  [IconThemes.ARROW_LEFT]: ArrowLeft,
  [IconThemes.ARROW_RIGHT]: ArrowRight,
  [IconThemes.BUILDING]: BuildingIcon,
  [IconThemes.CART]: CartIcon,
  [IconThemes.CELSIUS]: CelsiusIcon,
  [IconThemes.PARK]: ParkIcon,
  [IconThemes.RAIN]: RainIcon,
  [IconThemes.SORT]: SortIcon,
  [IconThemes.STORE]: StoreIcon,
  [IconThemes.SUN]: SunIcon,
  [IconThemes.TRAIN]: TrainIcon,
  [IconThemes.THERMOMETER]: ThermometerIcon,
  [IconThemes.WIND]: WindIcon,
};

interface IconProps {
  theme: IconThemes;
  className?: string;
}

const Icon: FC<IconProps> = ({ theme, className = '' }) => (
  <span className={[styles.icon, className].join(' ').trim()} aria-label={theme}>
    {createElement(IconComponents[theme], { className: styles.icon__content })}
  </span>
);

export default Icon;
