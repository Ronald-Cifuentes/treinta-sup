import { ChangeEventHandler } from "react";


export interface PropTypesChangeStates {
  open?: boolean;
  setOpen?: (boolean) => void;
  handleChangeStates?: ChangeEventHandler<HTMLSelectElement>;
  count?: number;
}
