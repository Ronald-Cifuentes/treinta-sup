import {fireEvent, renderThemeAndRouter, screen} from '__tests__/test-utils';
import {Steps} from './Steps';

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

describe('<Steps/>', () => {
  test('#1. Exist - Render correctly - steps', () => {
    renderThemeAndRouter(<Steps />);
    const steps = screen.getByTestId('steps-test');
    expect(steps).toBeInTheDocument();
  });

  test('#2. Exist - Render correctly - button goBack', () => {
    // eslint-disable-next-line no-console
    console.log = jest.fn();
    renderThemeAndRouter(<Steps />);
    const steps = screen.getByTestId('btn-go-back-test');
    fireEvent.click(steps);
    // eslint-disable-next-line no-console
    expect(console.log).toHaveBeenCalledWith('Pendiente de programar');
  });

  test('#3. Exist - Render correctly - button step', () => {
    // eslint-disable-next-line no-console
    console.log = jest.fn();
    renderThemeAndRouter(<Steps />);
    const steps = screen.getByTestId('btn-step-test') as HTMLButtonElement;
    // eslint-disable-next-line no-console
    expect(steps).toBeDisabled(); //With('Pendiente de programar');
  });
});
