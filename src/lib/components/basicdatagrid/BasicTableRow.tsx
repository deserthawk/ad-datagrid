import React from 'react'

import { rowItem } from './BasicDatagrid'
import BasicTableCell from './BasicTableCell'

type BasicTableRowProp = {
  rowList: Array<Array<rowItem>>
  maxTextLength: number
  page: number
  pageItemCount: number
}

export default function BasicTableRow(prop: BasicTableRowProp) {
  const { rowList, maxTextLength, page, pageItemCount } = prop

  return (
    <tbody>
      {rowList.map((row, indexRow) => {
        const pHideRow = !(page * pageItemCount > indexRow && (page - 1) * pageItemCount <= indexRow) ? ' hide-row' : ''
        return (
          <tr key={indexRow} className={(indexRow % 2 === 1 ? 'stripe-color' : '') + pHideRow}>
            {row.map((item, indexItem) => (
              <BasicTableCell item={item} maxTextLength={maxTextLength} key={indexItem} />
            ))}
          </tr>
        )
      })}
    </tbody>
  )
}
