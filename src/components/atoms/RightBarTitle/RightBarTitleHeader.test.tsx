import {screen, renderTheme} from '__tests__/test-utils';
import {RightBarTitleHeader} from './RightBarTitleHeader';

const goBackSpy = jest.fn();
jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

jest.mock('context/DashboardContext/DashboardContext', () => ({
  useDashboard: jest.fn().mockImplementation(() => ({
    setParams: jest.fn(),
    setRightBarOpen: jest.fn(),
    rightBarNavigation: {
      navigate: jest.fn(),
      goBack: goBackSpy,
      canGoBack: jest.fn(() => true),
    },
  })),
}));

describe('RightBarTitleHeader', () => {
  it('Should render correctly', () => {
    renderTheme(
      <RightBarTitleHeader
        title="rightBarHeaderTest"
        lineColor="success"
        // eslint-disable-next-line react/jsx-no-useless-fragment
        icon={<></>}
        lineColorType="400"
      />,
    );
    expect(screen.getByText('rightBarHeaderTest')).toBeInTheDocument();
  });
});
