/* eslint-disable complexity */
/* eslint-disable max-params */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {Product} from '@30sas/web-ui-kit-core';
import {filter, compose, not, propEq, update, findIndex} from 'ramda';

// Elimina un objeto de un array apartir de la búsqueda de una key
export const deleteFromKey = (
  array: Array<any>,
  keyName: string,
  key: string | boolean | number,
): Array<any> => filter(compose(not, propEq(keyName, key)), array);

// Actualiza un objeto de un array apartir de la búsqueda de su id
export const replaceObjectById = (
  array: Array<any>,
  id: string,
  objToChange: any,
): Array<any> => update(findIndex(propEq('id', id))(array), objToChange, array);

export const compareValues = (key: string, order = 'asc'): any =>
  function innerSort(a: Product, b: Product) {
    if (
      !Object.prototype.hasOwnProperty.call(a, key) ||
      !Object.prototype.hasOwnProperty.call(b, key)
    ) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

    let comparison = 0;

    if (typeof a[key] === 'string' && typeof b[key] === 'string') {
      return order === 'desc'
        ? varA.localeCompare(varB) * -1
        : varA.localeCompare(varB);
    } else {
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === 'desc' ? comparison * -1 : comparison;
    }
  };

export const sortObjectArrayAlphabetically = <T>(
  objectArray: T[],
  sortKey: string,
  direction: 'asc' | 'desc',
): T[] =>
  objectArray.sort((previousObject, nextObject) => {
    if (direction === 'asc') {
      return previousObject[sortKey].localeCompare(nextObject[sortKey]);
    }
    if (direction === 'desc') {
      return nextObject[sortKey].localeCompare(previousObject[sortKey]);
    }
  });
