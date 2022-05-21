import {renderHook} from '__tests__/test-utils';

import {useErrorHandler} from './useErrorHandler';

const spySetLabel = jest.fn();

jest.mock('context/ToastContext', () => ({
  useToast: jest.fn().mockImplementation(() => ({
    setLabel: spySetLabel,
    setOpen: jest.fn(),
    setSeverity: jest.fn(),
  })),
}));

describe('useErrorHandler', () => {
  it('Should show error with action create', () => {
    renderHook(() =>
      useErrorHandler(true, {entity: 'product', action: 'create'}),
    );

    expect(spySetLabel).toBeCalledWith('commons.error-create');
  });
  it('Should show error with action update', () => {
    renderHook(() =>
      useErrorHandler(true, {entity: 'transaction', action: 'update'}),
    );

    expect(spySetLabel).toBeCalledWith('commons.error-update');
  });
  it('Should show error with action delete', () => {
    renderHook(() =>
      useErrorHandler(true, {entity: 'category', action: 'delete'}),
    );

    expect(spySetLabel).toBeCalledWith('commons.error-delete');
  });
  it('Should show error with action read', () => {
    renderHook(() =>
      useErrorHandler(true, {entity: 'contact', action: 'read'}),
    );

    expect(spySetLabel).toBeCalledWith('commons.error-read');
  });
  it('Should show error with custom error', () => {
    renderHook(() => useErrorHandler(true, {message: 'custom-message'}));

    expect(spySetLabel).toBeCalledWith('custom-message');
  });
  it('Should show error with generic error', () => {
    renderHook(() => useErrorHandler(true));

    expect(spySetLabel).toBeCalledWith('commons.generic-error');
  });
});
