import React, { Suspense } from 'react';
import GlobalHeader from '~/components/modules/GlobalHeader';
import DateCarousel from '~/components/modules/DateCarousel';
import GraphTable from '~/components/modules/GraphTable';
import ChangeGraphSource from '~/components/modules/ChangeGraphSource';
import ChangeSortSource from '~/components/modules/ChangeSortSource';
import styles from './styles.scss';
import AboutDialog from '~/components/modules/AboutDialog';
import Loading from '~/components/parts/Loading';

const Top = () => {
  return (
    <div className={styles.top}>
      <GlobalHeader />
      <Suspense
        fallback={
          <div className={styles.top__loading}>
            <Loading className={styles.top__loadingItem} />
          </div>
        }
      >
        <div className={styles.top__table}>
          <div className={styles.top__tableBody}>
            <div className={styles.top__tableBodyHeader}>
              <ChangeSortSource className={styles.top__changeSortSource} />
            </div>
            <div className={styles.top__tableBodyData}>
              <ChangeGraphSource className={styles.top__changeGraphSource} />
              <GraphTable className={styles.top__graphTable} />
            </div>
          </div>
        </div>
      </Suspense>
      <div className={styles.top__dates}>
        <DateCarousel />
      </div>
      <AboutDialog />
    </div>
  );
};

export default Top;
