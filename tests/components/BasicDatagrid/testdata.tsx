import { rowItem } from '../../../src/lib/components/basicdatagrid/BasicDatagrid'

const row1: Array<rowItem> = [
  { header: 'Id', value: 1 },
  { header: 'Title', value: 'lorem ipsum' },
  { header: 'Completed', value: 'true' },
]

const row2: Array<rowItem> = [
  { header: 'Id', value: 2 },
  {
    header: 'Title',
    value:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas gravida urna lobortis molestie. Curabitur pellentesque enim ut massa porta.',
  },
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

export default itemList
