import { CheckType } from '@interface/common';

export type Sector = {
  name: string;
  id: string;
  isChecked?: boolean;
};

export interface SectorsChecks {
  name: string;
  id: string;
  description: string;
  sectors: CheckType;
  childrenChecks: CheckType;
  children: Sector[];
  childrenLength: number;
  selected: number;
}
