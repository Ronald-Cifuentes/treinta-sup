import {FC, useState} from 'react';
import {QuantityInput} from '@30sas/web-ui-kit-core';
import {WrapperQuantityInput} from '../../organisms/OrderDetail/OrderDetail.styled';

export const Counter: FC<{value: number}> = ({value}) => {
  const [quantity, setQuantity] = useState<number>(value);
  const updateQuantity = (qnt): void => {
    setQuantity(qnt.target.value);
  };

  return (
    <WrapperQuantityInput>
      <QuantityInput
        BaseLabel="Agregar"
        colors={{
          backgroundColor: 'gray',
          backgroundGradient: '100',
          borderColor: 'gray',
          borderGradient: '600',
          hoverColor: 'gray',
          hoverGradient: '200',
          textColor: 'secondary',
          textGradient: '700',
        }}
        name="storybook"
        quantity={quantity}
        setQuantity={updateQuantity}
        unit="kg"
      />
    </WrapperQuantityInput>
  );
};
