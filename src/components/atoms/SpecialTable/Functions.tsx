import {FC, useState, MouseEventHandler} from 'react'
import {Tag, ColorTypesTag} from '@30sas/web-ui-kit-core';
import {Checkbox, FormControlLabel} from '@mui/material';
import NumberFormat from 'react-number-format'

export const ComponentTest:FC<{handleButton?:MouseEventHandler}> = ({handleButton}) => {
    return (
        <button onClick={handleButton}>Testing Component</button>
    )
}

export const rowsOneComponent:Function = (handleButton:MouseEventHandler) => {
    return [
        { id: <ComponentTest handleButton={handleButton}/> }
    ]
}

export const IdItem:FC<{label:string}> = ({label}) => {
    const [isChecked, setIsChecked] = useState(false)

    const handleChange = () => {
        setIsChecked(!isChecked)
    }
    
    return(
        <FormControlLabel 
            control={
                <Checkbox
                    checked={isChecked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                    style={{padding: '0 9px'}}
                />
            }
            label={label}
        />
    ) 
}

export const Detail:FC<{detail:string}> = ({detail}) => {
    return (
        <a style={{
            textDecoration: "underline",
            color: "#176BF3"
        }} href={detail} target="_blank">Detalle</a>
    )
}

export const createData = (
  id: string,
  state: {status: string; variant: ColorTypesTag},
  client: string,
  phone: string,
  creationDate: string,
  updateDate: string,
  deliveryDate: string,
  value: string | number,
  detail: string
) => {
    const CreationDate=new Date(creationDate)
    const UpdateDate=new Date(updateDate)
    const DeliveryDate=new Date(deliveryDate)
  return {
    id: <IdItem label={id.slice(0,8)} />,
    state: <Tag label={state?.status} variant={state.variant} />,
    client,
    phone,
    creationDate: `${CreationDate.getFullYear()}/${CreationDate.getMonth()}/${CreationDate.getDate()}`,
    updateDate: `${UpdateDate.getFullYear()}/${UpdateDate.getMonth()}/${UpdateDate.getDate()}`,
    deliveryDate: `${DeliveryDate.getFullYear()}/${DeliveryDate.getMonth()}/${DeliveryDate.getDate()}`,
    value: <NumberFormat
        value={value}
        className="foo"
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
    />,
    detail: <Detail detail={detail} />,
  };
};