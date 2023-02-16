import React from 'react'

import '../../styles/datagrid.css'
import BasicTableHeader from './BasicTableHeader'
import BasicTableRow from './BasicTableRow'

export type rowItem = {
  value: string | number
  header: string
}

type BasicDatagridProp = {
  rowList: Array<Array<rowItem>>
  pCheckRowError?: string
  maxTextLength?: number
}

export default function BasicDatagrid(prop: BasicDatagridProp) {
  const { rowList, pCheckRowError } = prop
  const maxTextLength = prop.maxTextLength && prop.maxTextLength > 0 ? prop.maxTextLength : -1
  const theHeaderList = rowList[0].map((item) => item.header)
  const checkRows = () => {
    const rowLength = rowList.length > 0 ? rowList[0].length : 0
    if (rowLength === 0) {
      return true
    }
    return rowList.every((item) => item.length === rowLength)
  }

  if (!checkRows()) {
    return (
      <div className='basic-datagrid-error'>
        <div>{pCheckRowError ? pCheckRowError : 'Error'}</div>
      </div>
    )
  }

  return (
    <table className='basic-datagrid'>
      <BasicTableHeader headerList={theHeaderList} />
      <BasicTableRow rowList={rowList} maxTextLength={maxTextLength} />
    </table>
  )
}
