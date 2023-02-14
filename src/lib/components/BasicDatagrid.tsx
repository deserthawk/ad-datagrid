import React from 'react'
import '../styles/datagrid.css'

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
    <>
      <table className='basic-datagrid'>
        <thead>
          <tr>
            {theHeaderList.map((item, index) => {
              return <th key={index}>{item}</th>
            })}
          </tr>
        </thead>
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
      </table>
    </>
  )
}
