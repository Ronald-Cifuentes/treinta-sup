import {renderHook} from '__tests__/test-utils';

import {useCurrencyFormatter} from './useCurrencyFormatter';

jest.mock('context/AuthContext/AuthContext', () => ({
  useAuth: jest
    .fn()
    .mockReturnValue({user: {countryId: 1}, store: {countryId: 1}}),
}));

describe('useCurrencyFormatter', () => {
  it('Should format currency with Colombian format', () => {
    const {result} = renderHook(() => useCurrencyFormatter());

    expect(result.current.country.name).toBe('Colombia');
    expect(result.current.countryId).toBe(1);
    expect(result.current.country.code).toBe('+57');
    expect(result.current.formatter(2000)).toContain('2.000');
  });
});
