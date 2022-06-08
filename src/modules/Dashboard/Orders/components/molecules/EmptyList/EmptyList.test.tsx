import {render, screen} from '__tests__/test-utils';

import {EmptyList} from './EmptyList';

jest.mock('context/DashboardContext/DashboardContext', () => ({
  useDashboard: jest.fn().mockImplementation(() => ({
    rightBarNavigation: {
      navigate: jest.fn(),
    },
    products: {searchValue: jest.fn(), setSearchFilter: jest.fn()},
    setRightBarOpen: jest.fn(),
  })),
}));
jest.mock('config/firebase', () => null);

describe('<EmptyList />', () => {
  it('Should render correctly', () => {
    render(<EmptyList text="test" />);
    expect(
      screen.getByTestId('orders_component_emptyList'),
    ).toBeInTheDocument();
  });
});
