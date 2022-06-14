import { TreintaDropdownOptions } from '@30sas/web-ui-kit-core';

export const createOptionsRowsPerPage = (): Array<TreintaDropdownOptions> => {
  const ret: Array<TreintaDropdownOptions> = [
    { label: `Filas por página: 25`, value: `25` },
    { label: `Filas por página: 50`, value: `50` },
    { label: `Filas por página: 100`, value: `100` }
  ];
  return ret;
};

export const optionsRowsPerPage: Array<TreintaDropdownOptions> =
  createOptionsRowsPerPage();
