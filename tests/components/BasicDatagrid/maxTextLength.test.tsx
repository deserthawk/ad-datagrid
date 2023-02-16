import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import 'jest-canvas-mock'

import BasicDatagrid from '../../../src/lib/components/basicdatagrid/BasicDatagrid'

import itemList from './testdata'

test('check cell maxTextLength property not entered', async () => {
  const pText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas gravida urna lobortis molestie. Curabitur pellentesque enim ut massa porta.'
  render(<BasicDatagrid rowList={itemList} />)
  expect(screen.getByText(pText)).toHaveTextContent(pText)
})

test('check cell maxTextLength property entered', async () => {
  const pMaxTextLength = 100
  const pText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas gravida urna lobortis molestie. Curabitur pellentesque enim ut massa porta.'
  const pSlice = pText.slice(0, pMaxTextLength) + '...'
  render(<BasicDatagrid rowList={itemList} maxTextLength={pMaxTextLength} />)
  expect(screen.getByText(pSlice)).toHaveTextContent(pSlice)
})
