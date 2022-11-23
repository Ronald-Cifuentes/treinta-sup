import {parseFile} from './useParseXlsxOrderBulkUpdate.func';

describe('useParseXlsxOrderBulkUpdate.func', () => {
  test('#1. parseFile', () => {
    expect(parseFile('test')).toEqual([]);
  });
});
