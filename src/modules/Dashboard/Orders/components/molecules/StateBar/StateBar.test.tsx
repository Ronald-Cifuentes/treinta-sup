import {cleanup, renderTheme, screen} from '__tests__/test-utils';
import {StateBar} from './StateBar';

const DTI_STATE_BAR = 'state-bar-test';

describe('<StateBar />', () => {
  beforeEach(cleanup);

  test('#1. render', () => {
    renderTheme(<StateBar />);
    expect(screen.getByTestId(DTI_STATE_BAR)).toBeInTheDocument();
  });

  test('#1. render - with props', () => {
    renderTheme(
      <StateBar dataTestId={DTI_STATE_BAR} status={{id: 0, name: 'some'}} />,
    );
    expect(screen.getByTestId(DTI_STATE_BAR)).toBeInTheDocument();
  });

  test('#2. render - props undefined', () => {
    renderTheme(<StateBar dataTestId={undefined} status={undefined} />);
    expect(screen.getByTestId(DTI_STATE_BAR)).toBeInTheDocument();
  });
});
