import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { ModalInfo } from '@interface/common';

type Countries = 'DOMESTIC' | 'USA';
type CommonOptions = {
  // isResetSearchValue: boolean;
  searchDefalutValue: string;
};
type RecentsSearchKeyword = {
  value: string | number;
  date: string;
};

export const modalListAtom = atom<ModalInfo[]>([]);

export const countriesdAtom = atomWithStorage<Countries>(
  'Countries',
  'DOMESTIC',
);

export const commonOptionsAtom = atom<CommonOptions>({
  // isResetSearchValue: false,
  searchDefalutValue: '',
});

export const recentsSearchKeywordAtom = atomWithStorage<RecentsSearchKeyword[]>(
  'recentsSearchKeyword',
  [],
);
