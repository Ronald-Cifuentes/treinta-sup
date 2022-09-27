import React, {FC} from 'react';
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
  const optionsMap = options?.map((item, ind) => {
    switch (typeof defaultSelected) {
      case 'string':
        return (
          <option
            key={`option-${item.value}`}
            value={item.value}
            selected={item.value == defaultSelected}>
            {item.label}
          </option>
        );
      case 'number':
        return (
          <option
            key={`option-${item.value}`}
            value={item.value}
            selected={ind == defaultSelected}>
            {item.label}
          </option>
        );

      default:
        return (
          <option key={`option-${item.value}`} value={item.value}>
            {item.label}
          </option>
        );
    }
  });
  return (
    <div className={className} style={style}>
      {label && (
        <SpecialSelectLabel style={styleLabel}>{label}</SpecialSelectLabel>
      )}
      <StyledSelect onChange={onChange}>
        {defaultText && (
          <option
            style={styleOptions}
            value=""
            disabled
            selected
            defaultChecked>
            {defaultText}
          </option>
        )}
        {optionsMap}
      </StyledSelect>
    </div>
  );
};
