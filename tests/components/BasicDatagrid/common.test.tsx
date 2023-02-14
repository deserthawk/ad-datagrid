import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import BasicDatagrid, { rowItem } from '../../../src/lib/components/basicdatagrid/BasicDatagrid'

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
  { header: 'Title', value: 'lorem ipsum' },
  { header: 'Completed', value: 'false' },
]

const itemList: Array<Array<rowItem>> = [row1, row2, row3, row4]

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<BasicDatagrid rowList={itemList} />)
  })
})
