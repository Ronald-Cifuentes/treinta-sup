export interface PropTypesChangeStates {
  open?: boolean;
  setOpen?: (boolean) => void;
  handleChangeStates?: React.ChangeEventHandler<HTMLSelectElement>;
  count?: number;
}
