import {OptionsType} from 'hooks/useCommonDocumentTypes';
import {FC} from 'react';
import {
  getDefaultValue,
  getItemSelected,
  getOptions,
  insertOption,
} from './SpecialSelect.func';
import {SpecialSelectLabel, StyledSelect} from './SpecialSelect.styled';
import {SpecialSelectTypes} from './types';

export const SpecialSelect: FC<SpecialSelectTypes> = ({
  onChange,
  defaultText,
  defaultSelected,
  options,
  label,
  style,
  styleLabel,
  styleOptions,
  className,
}) => {
  let itemSelected = '';
  let items: OptionsType[] = getOptions(options);
  const isNotNumeric = isNaN(
    Number(defaultSelected === '' ? NaN : defaultSelected),
  );

  if (defaultText && items?.[0]?.label !== defaultText) {
    items = insertOption(items || [], defaultText);
  }

  if (options && isNotNumeric) {
    if (defaultSelected) {
      itemSelected = getItemSelected(
        items,
        defaultText ? defaultText : defaultSelected,
      );
    }
  }

  const optionsMap = items?.map(item => (
    <option
      style={styleOptions}
      key={`option-${item?.value}`}
      value={item?.value}
      disabled={item?.disabled}>
      {item?.label}
    </option>
  ));

  const defVal = getDefaultValue(defaultText, defaultSelected, itemSelected);

  return (
    <div className={className} style={style}>
      {label && (
        <SpecialSelectLabel style={styleLabel}>{label}</SpecialSelectLabel>
      )}
      <StyledSelect
        data-testid="special-select"
        onChange={onChange}
        defaultValue={defVal}>
        {optionsMap}
      </StyledSelect>
    </div>
  );
};
