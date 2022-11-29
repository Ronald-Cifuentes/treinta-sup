import {parseFile} from './useParseXlsxOrderBulkUpdate.func';

describe('useParseXlsxOrderBulkUpdate.func', () => {
  test('#1. parseFile', () => {
    expect(JSON.stringify(parseFile('test')[0]?.['A'])).toEqual(
      '"\\u0000\\u0000\\u0000\\u0000"',
    );
  });
});
