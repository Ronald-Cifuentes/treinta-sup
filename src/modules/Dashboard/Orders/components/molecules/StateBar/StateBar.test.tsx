import {renderTheme, screen} from '__tests__/test-utils';
import {StateBar} from './StateBar';

const DTI_STATE_BAR = 'state-bar-test';

describe('<StateBar />', () => {
  test('#1. render', () => {
    renderTheme(<StateBar dataTestId={DTI_STATE_BAR} />);
    expect(screen.getByTestId(DTI_STATE_BAR)).toBeInTheDocument();
  });
});
