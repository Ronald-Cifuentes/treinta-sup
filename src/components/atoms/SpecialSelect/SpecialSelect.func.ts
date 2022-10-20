import {OptionsType} from 'hooks/useCommonDocumentTypes';

export const getItemSelected = (
  options: OptionsType[],
  item: string | number,
): string => {
  let itemSelected = '';

  for (let i = 0; i < options.length; i++) {
    if (options[i].label === item) {
      itemSelected = options[i].value.toString();
    }
  }
  return itemSelected;
};

export const getDefaultValue = (
  defaultText: string | undefined,
  defaultSelected: string | number | undefined,
  itemSelected: string,
): string | number | undefined =>
  defaultText || defaultSelected ? itemSelected : undefined;

export const insertOption = (
  options: OptionsType[],
  defaultText: string,
): OptionsType[] => {
  const op = [...options];
  op?.splice(0, 0, {
    label: defaultText,
    value: '',
    disabled: true,
  });
  return op;
};

export const getOptions = (options?: OptionsType[]): OptionsType[] => [
  ...(options || []),
];
