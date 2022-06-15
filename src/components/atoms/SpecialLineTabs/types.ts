export interface DropdownListItem {
  label?: string;
  value?: string;
}

export interface MenuItems {
  key?: string;
  label?: string;
  value?: string;
  dropdownList?: Array<DropdownListItem>;
}

export interface PropTypesLineTabs {
  optionsTabs?: Array<MenuItems>;
  onChange?: (value: React.SetStateAction<number>) => void;
}
