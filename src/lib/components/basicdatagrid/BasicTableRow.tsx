import React from 'react'

import { rowItem } from './BasicDatagrid'
import BasicTableCell from './BasicTableCell'

type BasicTableRowProp = {
  rowList: Array<Array<rowItem>>
  maxTextLength: number
  page: number
  pageItemCount: number
  pHeaderList: Array<string>
}

export default function BasicTableRow(prop: BasicTableRowProp) {
  const { rowList, maxTextLength, page, pageItemCount, pHeaderList } = prop

  function setTableCell(row: rowItem[]) {
    const tempRow: Array<JSX.Element> = []
    pHeaderList.map((header) => {
      row.map((cell, indexCell) => {
        if (cell.header === header) {
          tempRow.push(<BasicTableCell item={cell} maxTextLength={maxTextLength} key={indexCell} />)
        }
      })
    })
    return <>{tempRow.map((item) => item)}</>
  }

  return (
    <tbody>
      {rowList.map((row, indexRow) => {
        const pHideRow = !(page * pageItemCount > indexRow && (page - 1) * pageItemCount <= indexRow) ? ' hide-row' : ''
        return (
          <tr key={indexRow} className={(indexRow % 2 === 1 ? 'stripe-color' : '') + pHideRow}>
            {setTableCell(row)}
          </tr>
        )
      })}
    </tbody>
  )
}
