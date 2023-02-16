import React from 'react'

import { rowItem } from './BasicDatagrid'
import BasicTableCell from './BasicTableCell'

type BasicTableRowProp = {
  rowList: Array<Array<rowItem>>
  maxTextLength: number
}

export default function BasicTableRow(prop: BasicTableRowProp) {
  const { rowList, maxTextLength } = prop

  return (
    <tbody>
      {rowList.map((row, indexRow) => {
        return (
          <tr key={indexRow} className={indexRow % 2 === 1 ? 'stripe-color' : ''}>
            {row.map((item, indexItem) => (
              <BasicTableCell item={item} maxTextLength={maxTextLength} key={indexItem} />
            ))}
          </tr>
        )
      })}
    </tbody>
  )
}
