import {render, screen} from '__tests__/test-utils';

import {Layout} from './Layout';

jest.mock('context/AuthContext', () => ({
  useAuth: jest.fn(() => ({
    isAuthReady: true,
    isLoggedIn: jest.fn().mockReturnValue(true),
  })),
}));

describe('<Layout />', () => {
  it('Should render correctly', () => {
    render(
      <Layout>
        <p>Test</p>
      </Layout>,
    );
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
