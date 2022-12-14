export interface ModalConfirmTypes {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  open?: boolean;
  handleBtnConfirm?: () => void | Promise<void>;
  textHead?: string;
  textBtnConfirm?: string;
  textBtnCancel?: string;
  dataTestId?: string;
  dataTestIdBtnSuccess?: string;
  dataTestIdBtnCancel?: string;
}
