import {TreintaDropdownOptions} from '@30sas/web-ui-kit-core';

export const createOptionsRowsPerPage = ({
  rowsPerPage,
}): TreintaDropdownOptions[] => {
  const ret: TreintaDropdownOptions[] = [
    {label: `${rowsPerPage} 25`, value: `25`},
    {label: `${rowsPerPage} 50`, value: `50`},
    {label: `${rowsPerPage} 100`, value: `100`},
  ];
  return ret;
};
