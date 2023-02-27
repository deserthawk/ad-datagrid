import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import 'jest-canvas-mock'

import BasicDatagrid from '../../../src/lib/components/basicdatagrid/BasicDatagrid'

import { CreateTable } from './generateData'

test('basic datagrid default header', async () => {
  const list = CreateTable(20)
  render(<BasicDatagrid rowList={list} />)
  expect(screen.queryAllByText('Id', { selector: 'th' })).toHaveLength(1)
  expect(screen.queryAllByText('Title', { selector: 'th' })).toHaveLength(1)
  expect(screen.queryAllByText('Completed', { selector: 'th' })).toHaveLength(1)
})

test('basic datagrid custom header', async () => {
  const list = CreateTable(20)
  const headerList = ['Id1', 'Title1', 'Completed 3']
  render(<BasicDatagrid rowList={list} pHeaderList={headerList} />)
  expect(screen.queryAllByText('Id1', { selector: 'th' })).toHaveLength(1)
  expect(screen.queryAllByText('Title1', { selector: 'th' })).toHaveLength(1)
  expect(screen.queryAllByText('Completed 3', { selector: 'th' })).toHaveLength(1)
})
