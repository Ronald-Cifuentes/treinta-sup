import {ToastLocations} from 'config/constants';
import {renderHook, act, fireEvent} from '__tests__/test-utils';

import {ToastProvider, useToast} from './ToastContext';

jest.mock('config/firebase', () => null);

describe('useToast', () => {
  it('should open toast', () => {
    const {result} = renderHook(() => useToast(), ToastProvider);
    act(() => {
      result.current.setOpen(true);
    });
    expect(result.current.open).toBe(true);
  });
  it('should set Title', () => {
    const {result} = renderHook(() => useToast(), ToastProvider);
    act(() => {
      result.current.setTitle('Title');
    });
    expect(result.current.title).toBe('Title');
  });
  it('should close toast', () => {
    const {result} = renderHook(() => useToast(), ToastProvider);
    act(() => {
      result.current.setOpen(true);
    });
    fireEvent.mouseDown(window);
    expect(result.current.open).toBe(false);
  });
  it('should open toast function', () => {
    const {result} = renderHook(() => useToast(), ToastProvider);
    act(() => {
      result.current.Toast({location: ToastLocations.GENERAL});
    });
    expect(result.current.Toast).toBeDefined();
  });
});
