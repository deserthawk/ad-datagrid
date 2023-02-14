import React from 'react'

import { rowItem } from './BasicDatagrid'

type BasicTableRowProp = {
  rowList: Array<Array<rowItem>>
}

export default function BasicTableRow(prop: BasicTableRowProp) {
  const { rowList } = prop
  return (
    <tbody>
      {rowList.map((row, indexRow) => {
        return (
          <tr key={indexRow} className={indexRow % 2 === 1 ? 'stripe-color' : ''}>
            {row.map((item, indexItem) => (
              <td key={indexItem}>{item.value}</td>
            ))}
          </tr>
        )
      })}
    </tbody>
  )
}
