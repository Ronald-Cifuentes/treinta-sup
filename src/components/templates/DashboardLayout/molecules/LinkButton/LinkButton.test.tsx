import {renderThemeAndRouter, screen} from '__tests__/test-utils';

import {ROUTES, RoutesSpanish} from 'routes/types';

import {LinkButton} from './LinkButton';

jest.mock('config/firebase', () => null);

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn().mockImplementation(() => ({
    pathname: `https://localhost${RoutesSpanish.INVENTORY}`,
  })),
}));

describe('LinkButton', () => {
  it('Should render a line if href corresponds to current location', () => {
    renderThemeAndRouter(
      <LinkButton icon={() => <div />} label="" href={ROUTES.INVENTORY} />,
    );
    expect(screen.getByTestId('dashboard_linkButton_line')).toBeInTheDocument();
  });
});
