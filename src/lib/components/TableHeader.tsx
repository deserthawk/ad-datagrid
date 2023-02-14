import React from 'react'

type TableHeaderProp = {
  headerList: Array<string>
}

export default function TableHeader(prop: TableHeaderProp) {
  const { headerList } = prop
  return (
    <thead>
      <tr>
        {headerList.map((item, index) => {
          return <th key={index}>{item}</th>
        })}
      </tr>
    </thead>
  )
}
