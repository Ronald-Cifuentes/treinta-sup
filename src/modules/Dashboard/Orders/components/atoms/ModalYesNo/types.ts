export interface ModalYesNoTypes {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  open?: boolean;
  handleBtnYes?: () => void | Promise<void>;
}
