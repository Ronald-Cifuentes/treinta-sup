import {FC, useState, useEffect, ChangeEvent} from 'react'
import SpecialPagination from 'components/atoms/SpecialPagination'
import SpecialTable from 'components/atoms/SpecialTable'
import {columns} from 'components/atoms/SpecialTable/Mocks'
import {Dropdown, TreintaDropdownOptions, TreintaDropdownType} from '@30sas/web-ui-kit-core';
import { getData, getDataMock, optionsRowsPerPage } from './Mocks'

export interface PropTypes {
  dropDownDefaultValue?: number
  initPagination?: number
  totalItems?: number
  date?: string | Object
  tab?: number
}

const SpecialTableWithPagination:FC<PropTypes> = ({dropDownDefaultValue = 5, initPagination = 1, totalItems = 20, date, tab}) => {
  const [page, setPage] = useState(initPagination)
  const [itemsByPage, setItemsByPage] = useState(dropDownDefaultValue)
  const [response, setResponse] = useState([])

  const handleDropDown  = (value: TreintaDropdownOptions, event: ChangeEvent<unknown>) => {
    setItemsByPage(parseInt(value.value as string))
  }

  const handleSpecialPagination = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  useEffect(() => {
    getData({page, itemsByPage, setResponse, date, tab})
  }, [page, itemsByPage, date, tab])
  

  return (
    <div data-testid="special-table-with-pagination">
      <SpecialTable
        columns={columns}
        rows={response}
        styleContainer={{
          boxShadow: '2px 4px 8px rgba(34, 38, 42, 0.05)',
          marginTop: '40px',
          marginBottom: '56px',
        }}
      />
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <div style={{display: "flex", width: "33%", alignItems: "center"}}>
          <Dropdown
            AlingMenu="right"
            dropdownOptions={optionsRowsPerPage}
            elementId="test"
            errorText="Error text"
            placeholder="Filas por página: "
            defaultValue={`Filas por página: ${dropDownDefaultValue}`}
            typeRenderItem={TreintaDropdownType["OnlyLetter"]}
            onChange={handleDropDown}
          />
        </div>
        <div style={{display: "flex", width: "33%", alignItems: "center", justifyContent: "center"}}>
          <SpecialPagination count={Math.ceil(totalItems / itemsByPage)} onChange={handleSpecialPagination}/>
        </div>
        <div style={{display: "flex", width: "33%", alignItems: "center"}}></div>
      </div>
    </div>
  )
}

export default SpecialTableWithPagination