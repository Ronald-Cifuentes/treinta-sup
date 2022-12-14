import {renderTheme, screen, fireEvent} from '__tests__/test-utils';
import {ModalConfirm} from './ModalConfirm';

describe('<ModalConfirm/>', () => {
  test('#1. Exist - Render correctly', () => {
    renderTheme(<ModalConfirm open={true} />);
    const modalConfirm = screen.getByTestId('modal-confirm');
    expect(modalConfirm).toBeInTheDocument();
  });
  test('#2. trigger button success', () => {
    const spyBtn = jest.fn();
    renderTheme(<ModalConfirm open={true} handleBtnConfirm={spyBtn} />);
    const btnSuccess = screen.getByTestId('btn-success');
    fireEvent.click(btnSuccess);
    expect(spyBtn).toHaveBeenCalled();
  });
  test('#1. trigger button cancel', () => {
    const spyOpen = jest.fn();
    renderTheme(<ModalConfirm open={true} setOpen={spyOpen} />);
    const btnCancel = screen.getByTestId('btn-cancel');
    fireEvent.click(btnCancel);
    expect(spyOpen).toHaveBeenCalled();
  });
});
