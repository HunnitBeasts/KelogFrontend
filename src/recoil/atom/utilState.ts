import { atom } from 'recoil';

export const modalState = atom<boolean>({
  key: 'modalState',
  default: false,
});

export const headerState = atom<string>({
  key: 'headerState',
  default: 'K-elog',
});
