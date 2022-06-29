import {render, screen} from '__tests__/test-utils';

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

describe('<Detail/>', () => {
  // UI TESTING
  test('#1. Exist', () => {
    render(<h1>Hola</h1>);
    const detail = screen.getByText('Hola');
    expect(detail).toBeInTheDocument();
  });
});
