import {TreintaDropdownOptions} from '@30sas/web-ui-kit-core';

export const createOptionsRowsPerPage = (): Array<TreintaDropdownOptions> => {
  const ret: Array<TreintaDropdownOptions> = [];
  for (let i = 1; i <= 20; i++) {
    ret.push({label: `Filas por página: ${i}`, value: `${i}`});
  }
  return ret;
};

export const optionsRowsPerPage: Array<TreintaDropdownOptions> =
  createOptionsRowsPerPage();
