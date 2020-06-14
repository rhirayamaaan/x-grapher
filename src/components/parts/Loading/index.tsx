import React, { FC } from 'react';
import styles from './styles.scss';

interface LoadingProps {
  className?: string;
}

const Loading: FC<LoadingProps> = ({ className }) => (
  <div className={[styles.loading, className].join(' ').trim()}></div>
);

export default Loading;
