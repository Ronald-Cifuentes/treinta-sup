import {render, RenderResult} from '__tests__/test-utils';

import {SharedRightBar} from './SharedRightBar';

let wrapper: RenderResult;
const currentScreen = '';

jest.mock('context/DashboardContext', () => ({
  useDashboard: jest
    .fn()
    .mockImplementation(() => ({screens: [currentScreen]})),
}));

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));
jest.mock('context/AuthContext', () => ({
  useAuth: jest.fn(() => ({isLoggedIn: jest.fn().mockReturnValue(false)})),
}));

describe('<SharedRightBar />', () => {
  beforeEach(() => {
    wrapper = render(<SharedRightBar />);
  });

  it('Should render invalid screen', () => {
    expect(wrapper.container.childNodes.length).toBe(0);
  });
});
