import {render, screen} from '__tests__/test-utils';
import {LinearProgressBar} from './LinearProgressBar';
jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

describe('<LinearProgressBar/>', () => {
  test('#1. Exist - Render correctly LinearProgressBar', () => {
    render(<LinearProgressBar value={10} />);
    const linearBar = screen.getByTestId('linear-progress-bar-test');
    expect(linearBar).toBeInTheDocument();
  });
});
