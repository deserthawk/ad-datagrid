import React, { useState } from 'react'
import TextService from '../services/TextService'
import { rowItem } from './BasicDatagrid'

type BasicTableCellProp = {
  item: rowItem
  maxTextLength: number
}

export default function BasicTableCell(prop: BasicTableCellProp) {
  const { item, maxTextLength } = prop
  const [isMaxTextLengthHover, setIsMaxTextLengthHover] = useState(false)

  const handleMouseOver = () => {
    setIsMaxTextLengthHover(true)
  }

  const handleMouseOut = () => {
    setIsMaxTextLengthHover(false)
  }
  let pValue: rowItem['value']
  let pMaxTextLengthFlag = false
  if (typeof item.value === 'string') {
    pValue = TextService.MaxTextLengthInterpolation(maxTextLength, item.value)
    pMaxTextLengthFlag = TextService.MaxTextLengthControl(maxTextLength, item.value)
  } else {
    pValue = item.value
  }
  return (
    <td className='basictable-td' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {pValue} {isMaxTextLengthHover && pMaxTextLengthFlag && <PopupCellInfo value={item.value} />}
    </td>
  )
}

type PopupCellInfoProp = {
  value: rowItem['value']
}

function PopupCellInfo(prop: PopupCellInfoProp) {
  const { value } = prop
  return <div className='popupcellinfo'>{value}</div>
}
