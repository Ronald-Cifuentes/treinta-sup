import {
  cleanup,
  fireEvent,
  renderRouter,
  renderThemeAndRouter,
  screen,
} from '__tests__/test-utils';
import * as router from 'react-router';
import {FiltersAndReport} from './FiltersAndReport';

const navigate = jest.fn();
jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

describe('<FiltersAndReport/>', () => {
  beforeEach(cleanup);
  // UI TESTING
  test('#1. Exist - Render correctly Components', () => {
    renderRouter(<FiltersAndReport />);
    const filtersAndReport = screen.getByTestId('filters-and-report');
    expect(filtersAndReport).toBeInTheDocument();
  });

  test('#2. Exist - Render correctly BTN-DATASTUDIO', () => {
    renderRouter(<FiltersAndReport />);
    const btnDatastudio = screen.getByTestId('btn-datastudio');
    expect(btnDatastudio).toBeInTheDocument();
  });

  test('#3. disable prop', () => {
    renderThemeAndRouter(<FiltersAndReport disabled />);
    const btnOrderupdate = screen.getByTestId('calendar-input');
    expect(btnOrderupdate).toBeInTheDocument();
  });

  test('#4. REACT_APP_ORDERS_UPDATE == undefined', () => {
    delete process.env.REACT_APP_ORDERS_UPDATE;
    expect(process.env.REACT_APP_ORDERS_UPDATE).toBeUndefined();
  });

  test('#5. REACT_APP_ORDERS_UPDATE == true', () => {
    process.env.REACT_APP_ORDERS_UPDATE = 'true';
    expect(process.env.REACT_APP_ORDERS_UPDATE).toBe('true');
  });

  test('#6. Unavailable Permisions in REACT_APP_ORDERS_UPDATE', () => {
    // Set undefined .env variable
    delete process.env.REACT_APP_ORDERS_UPDATE;
    expect(process.env.REACT_APP_ORDERS_UPDATE).toBeUndefined();

    // Render
    renderRouter(<FiltersAndReport />);

    // Get button Order Update
    const btnOrderupdate = screen.queryByTestId('btn-orderupdate');
    expect(btnOrderupdate).not.toBeInTheDocument();
  });

  test('#7. Exist - Render correctly BTN-ORDERUPDATE', () => {
    // Set true .env variable
    process.env.REACT_APP_ORDERS_UPDATE = 'true';
    expect(process.env.REACT_APP_ORDERS_UPDATE).toBe('true');

    // Render
    renderRouter(<FiltersAndReport />);

    // Get button Order Update
    const btnOrderupdate = screen.getByTestId('btn-orderupdate');

    // Validate
    expect(btnOrderupdate).toBeInTheDocument();
  });

  test('#8. Available Permisions in REACT_APP_ORDERS_UPDATE', () => {
    // Set available .env variable
    process.env.REACT_APP_ORDERS_UPDATE = 'true';
    expect(process.env.REACT_APP_ORDERS_UPDATE).toBe('true');

    // Set alert
    global.alert = jest.fn();

    // Render
    renderRouter(<FiltersAndReport />);

    // Get button Order Update
    const btnOrderupdate = screen.getByTestId('btn-orderupdate');

    // Click on button Order Update
    fireEvent.click(btnOrderupdate);

    // Review
    expect(global.alert).not.toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith({pathname: '/ordenes/actualizar'});
  });
});
