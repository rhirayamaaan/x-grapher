import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import 'ress';
import './styles/reset.scss';
import styles from './App.scss';
import Top from './components/layouts/Top';

const App = () => (
  <RecoilRoot>
    <div className={styles.app}>
      <Top />
    </div>
  </RecoilRoot>
);

ReactDOM.render(<App />, document.getElementById('app'));
