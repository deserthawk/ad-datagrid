import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import 'jest-canvas-mock'

import BasicDatagrid, { rowItem } from '../../../src/lib/components/BasicDatagrid'

const row1: Array<rowItem> = [
  { header: 'Id', value: 1 },
  { header: 'Title', value: 'lorem ipsum' },
  { header: 'Completed', value: 'true' },
]

const row2: Array<rowItem> = [
  { header: 'Id', value: 2 },
  { header: 'Title', value: 'lorem ipsum' },
  { header: 'Completed', value: 'true' },
]

const row3: Array<rowItem> = [
  { header: 'Id', value: 3 },
  { header: 'Title', value: 'lorem ipsum' },
  { header: 'Completed', value: 'true' },
]

const row4: Array<rowItem> = [
  { header: 'Id', value: 4 },
  // { header: 'Title', value: 'lorem ipsum' },
  { header: 'Completed', value: 'false' },
]

const itemList: Array<Array<rowItem>> = [row1, row2, row3, row4]

test('check rows default error', async () => {
  render(<BasicDatagrid rowList={itemList} />)
  expect(screen.getByText('Error')).toHaveTextContent('Error')
})

test('check rows parameter error', async () => {
  const errorDescription = 'Kolon sayılarında hata ile karşılaşıldı.'
  render(<BasicDatagrid rowList={itemList} pCheckRowError={errorDescription} />)
  expect(screen.getByText(errorDescription)).toHaveTextContent(errorDescription)
})
