import {FC, useState, MouseEventHandler, useEffect} from 'react';
import {Tag, ColorTypesTag} from '@30sas/web-ui-kit-core';
import {Checkbox, FormControlLabel} from '@mui/material';
import NumberFormat from 'react-number-format';
import {format} from 'date-fns';

export const ComponentTest: FC<{handleButton?: MouseEventHandler}> = ({
  handleButton,
}) => <button onClick={handleButton}>Testing Component</button>;

export const rowsOneComponent: Function = (handleButton: MouseEventHandler) => [
  {id: <ComponentTest handleButton={handleButton} />},
];

export const IdItem: FC<{label?: string; onChange?: (boolean) => void}> = ({
  label = '',
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    onChange && onChange(isChecked);
  }, [isChecked]);

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={isChecked}
          onChange={handleChange}
          inputProps={{'aria-label': 'controlled'}}
          style={{padding: '0 9px'}}
        />
      }
      label={label}
    />
  );
};

export const Detail: FC<{detail: string}> = ({detail}) => (
  <a
    style={{
      textDecoration: 'underline',
      color: '#176BF3',
    }}
    href={detail}
    target="_blank"
    rel="noreferrer">
    Detalle
  </a>
);

export const createData = (
  id: string,
  state: {status: string; variant: ColorTypesTag},
  client: string,
  phone: string,
  creationDate: string,
  updateDate: string,
  deliveryDate: string,
  value: string | number,
  detail: string,
) => ({
  id: id.slice(0, 8),
  state: <Tag label={state?.status} variant={state.variant} />,
  client,
  phone,
  creationDate: format(new Date(creationDate), 'MM/dd/yyyy'),
  updateDate: format(new Date(updateDate), 'MM/dd/yyyy'),
  deliveryDate: format(new Date(deliveryDate), 'MM/dd/yyyy'),
  value: (
    <NumberFormat
      value={value}
      className="foo"
      displayType="text"
      thousandSeparator={true}
      prefix="$"
    />
  ),
  detail: <Detail detail={detail} />,
});
