import React, {FC} from 'react';
import {SpecialSelectLabel, StyledSelect} from './SpecialSelect.styled';
import {SpecialSelectTypes} from './types';

const Fn: FC<{style?: React.CSSProperties}> = ({style, children}) =>
  style ? <div style={style}>{children}</div> : <> {children} </>;

export const SpecialSelect: FC<SpecialSelectTypes> = ({
  onChange,
  defaultText,
  defaultSelected,
  options,
  label,
  styleContainer,
  styleLabel,
  styleOptions,
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
    <Fn style={styleContainer}>
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
    </Fn>
  );
};
