import {fireEvent, render, screen} from '__tests__/test-utils';

import {EmptyList} from './EmptyList';

const onClickHander = jest.fn();

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
      screen.getByTestId('inventory_component_emptyList'),
    ).toBeInTheDocument();
  });
  it('should click add product button', () => {
    const component = render(<EmptyList text="test" hiddenActions={false} />);
    fireEvent.click(
      component.getByRole('button', {name: 'product-form.add-manual'}),
    );
    expect(onClickHander).toHaveBeenCalledTimes(0);
  });
  it('should click add products excel', () => {
    const component = render(<EmptyList text="test" hiddenActions={false} />);
    fireEvent.click(
      component.getByRole('button', {name: 'inventory.upload-excel'}),
    );
    expect(onClickHander).toHaveBeenCalledTimes(0);
  });
  it('should click add product with search by sku', () => {
    const component = render(
      <EmptyList text="test" hiddenActions={false} isSearchSku={true} />,
    );
    fireEvent.click(
      component.getByRole('button', {name: 'product-form.add-title'}),
    );
    expect(onClickHander).toHaveBeenCalledTimes(0);
  });
});
