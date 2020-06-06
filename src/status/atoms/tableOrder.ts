import { atom, selector } from 'recoil';
import { Prefectures } from '~/data';

const initalState = () => Prefectures.Constants.codeKeys.map((key) => Prefectures.Constants.Codes[key]);

export const tableOrderState = atom({
  key: 'tableOrder',
  default: initalState(),
});

// export const tableOrderState = selector({
//   key: 'tableOrder',
//   get: ({ get }) => {

//   }
// })
