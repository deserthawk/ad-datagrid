import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import 'jest-canvas-mock'

import BasicDatagrid from '../../../src/lib/components/basicdatagrid/BasicDatagrid'

import itemList from './generateData'
import userEvent from '@testing-library/user-event'

test('check pagination default max number', async () => {
  const defaultPaginationLink = 5
  render(<BasicDatagrid rowList={itemList} />)
  expect(screen.getByText(`${defaultPaginationLink}`, { selector: 'button' })).toHaveTextContent(
    `${defaultPaginationLink}`,
  )
})

test('check pagination default more than max number', async () => {
  render(<BasicDatagrid rowList={itemList} />)
  expect(screen.queryAllByText('6', { selector: 'button' })).toHaveLength(0)
})

test('check pagination custom max number', async () => {
  const paginationLink = 10
  render(<BasicDatagrid rowList={itemList} pPaginationButton={paginationLink} />)
  expect(screen.getByText(`${paginationLink}`, { selector: 'button' })).toHaveTextContent(`${paginationLink}`)
})

// simule kısmı 100 satırlık data için geçerlidir.
test('check pagination last and first buttons', async () => {
  render(<BasicDatagrid rowList={itemList} />)

  // check last button
  await userEvent.click(screen.getByText('Last'))
  expect(screen.queryAllByText('10', { selector: 'button' })).toHaveLength(1)
  expect(screen.queryAllByText('1', { selector: 'button' })).toHaveLength(0)

  // check first button
  await userEvent.click(screen.getByText('First'))
  expect(screen.queryAllByText('10', { selector: 'button' })).toHaveLength(0)
  expect(screen.queryAllByText('1', { selector: 'button' })).toHaveLength(1)
})
