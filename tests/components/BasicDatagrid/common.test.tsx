import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import BasicDatagrid from '../../../src/lib/components/basicdatagrid/BasicDatagrid'

import itemList from './testdata'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<BasicDatagrid rowList={itemList} />)
  })
})
