import { rowItem } from '../../../src/lib/components/basicdatagrid/BasicDatagrid'

const ValueArray = [
  'Lorem ipsum dolor sit amet.',
  'Phasellus commodo viverra suscipit. Nunc eleifend facilisis volutpat. Fusce tristique.',
  'Nunc ornare et lorem in dapibus. Quisque tincidunt imperdiet erat. Nulla facilisi. Mauris dignissim justo.',
  'Maecenas sit amet.',
  'Duis nec diam ante. Nulla et tellus mauris.',
  'Nam tempor gravida urna et iaculis. Sed tempus arcu sapien, eget pulvinar tortor tempor a. Phasellus vel erat eu mi auctor dignissim vel ac quam. Nam et lorem nulla. Donec rhoncus eu erat sed blandit. Nam lacinia purus sit amet urna faucibus, eget hendrerit ante congue. Vestibulum porta tempus lorem.',
  'Donec ut enim posuere, semper lectus sed, commodo augue. Curabitur et mi pellentesque lorem commodo efficitur. Cras a diam interdum lectus cursus ornare accumsan non nulla. Morbi a velit velit. Sed ac ex quis.',
  'Nunc neque lectus, dapibus sit amet mollis eu, fringilla at nunc. Sed vulputate blandit lorem, in pretium orci ultrices id. Nam vehicula elementum.',
  'Integer eu lacus in enim posuere molestie vel eu erat. Praesent in faucibus velit. Curabitur finibus, mauris.',
  'Integer varius, mauris in tempor tempus, urna sapien consectetur leo, id dictum mi.',
]

const Header = ['Id', 'Title', 'Completed']

const Completed = ['true', 'false']

function CreateRowItem(pHeader: string, pValue: string | number): rowItem {
  return { header: pHeader, value: pValue }
}

function CreateRow(pIndex: number): Array<rowItem> {
  const result: Array<rowItem> = []
  Header.map((item) => {
    let tempValue: string | number
    if (item === 'Title') {
      tempValue = ValueArray[Math.floor(Math.random() * ValueArray.length)]
    } else if (item === 'Completed') {
      tempValue = Completed[Math.floor(Math.random() * Completed.length)]
    } else {
      tempValue = pIndex
    }
    result.push(CreateRowItem(item, tempValue))
  })

  return result
}

export function CreateTable(rowNumber: number): Array<Array<rowItem>> {
  const result: Array<Array<rowItem>> = []
  for (let i = 1; i <= rowNumber; i++) {
    result.push(CreateRow(i))
  }
  return result
}

const itemList: Array<Array<rowItem>> = CreateTable(100)

export default itemList
