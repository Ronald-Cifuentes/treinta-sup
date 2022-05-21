import {sortObjectArrayAlphabetically} from './arrays';

const objectArray = [{name: 'banana'}, {name: 'coco'}, {name: 'apple'}];

describe('sortObjectArrayAlphabetically', () => {
  it('Should sort ascending', () => {
    expect(
      sortObjectArrayAlphabetically(objectArray, 'name', 'asc'),
    ).toMatchObject([{name: 'apple'}, {name: 'banana'}, {name: 'coco'}]);
  });
  it('Should sort descending', () => {
    expect(
      sortObjectArrayAlphabetically(objectArray, 'name', 'desc'),
    ).toMatchObject([{name: 'coco'}, {name: 'banana'}, {name: 'apple'}]);
  });
});
