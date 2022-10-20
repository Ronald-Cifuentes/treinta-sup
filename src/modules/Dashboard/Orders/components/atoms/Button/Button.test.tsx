import {fireEvent, renderTheme, screen} from '__tests__/test-utils';

import {ButtonStyled} from './Button';

const spy = jest.fn();

describe('<ButtonStyled />', () => {
  beforeEach(() => {
    renderTheme(
      <ButtonStyled
        label="test"
        textColor="danger"
        textColorType="500"
        onClick={spy}
      />,
    );
  });
  it('Button render', () => {
    expect(screen.getByTestId('default-button')).toBeInTheDocument();
  });
  it('Button onClick', () => {
    fireEvent.click(screen.getByTestId('default-button'));
    expect(spy).toBeCalled();
  });
});
