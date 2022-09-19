export interface ModalConfirmTypes {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  open?: boolean;
  handleBtnConfirm?: () => void | Promise<void>;
}
