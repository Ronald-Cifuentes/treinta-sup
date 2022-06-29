import {PriceInput} from '@30sas/web-ui-kit-core';
import {PencilIcon} from '@30sas/web-ui-kit-icons';
import {Country} from '@30sas/web-ui-kit-utils';
import {FC, useState} from 'react';

export const PriceInputControl: FC<{
  initialValue?: number;
  country: Country;
}> = ({initialValue = 0, country}) => {
  const [value, setValue] = useState(initialValue);
  return (
    <PriceInput
      onChange={e => setValue(e)}
      country={country}
      value={value}
      StartIcon={PencilIcon}
    />
  );
};
