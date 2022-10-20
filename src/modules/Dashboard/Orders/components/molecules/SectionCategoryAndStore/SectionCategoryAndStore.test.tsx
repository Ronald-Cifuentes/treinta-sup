import {screen, cleanup, renderQuery} from '__tests__/test-utils';
import {SectionCategoryAndStore} from './SectionCategoryAndStore';

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));
jest.mock('axios', () => ({
  create: jest.fn(() => ({
    get: jest.fn(),
    interceptors: {
      request: {use: jest.fn(), eject: jest.fn()},
      response: {use: jest.fn(), eject: jest.fn()},
    },
  })),
  defaults: {timeout: 0},
}));

describe('<SectionCategoryAndStore/>', () => {
  afterEach(cleanup);

  test('#1. It should render component', () => {
    // UI TESTING
    renderQuery(<SectionCategoryAndStore />);
    const inventory = screen.getByTestId('section-search-ctrls');
    expect(inventory).toBeInTheDocument();
  });
});
