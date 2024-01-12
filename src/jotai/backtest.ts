import { atom } from 'jotai';
// Types
import { StrategiesUniverse } from '@interface/strategies';

export const strategiesUniverseAtom = atom<StrategiesUniverse>('KOSPI');
