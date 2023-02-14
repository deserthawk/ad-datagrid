import React from 'react'

type BasicTableHeaderProp = {
  headerList: Array<string>
}

export default function TableHeader(prop: BasicTableHeaderProp) {
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
