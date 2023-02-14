# ad-datagrid

The purpose of this package is to create tables dynamically. It makes a table according to the data in the sent json file.


## Usage/Examples

```javascript
import BasicDatagrid, { rowItem } from "ad-datagrid"

const row1: Array<rowItem> = [
    { header: "Id", value: 1}
    { header: "Title", value: "lorem ipsum"}
]

const row2: Array<rowItem> = [
    { header: "Id", value: 2}
    { header: "Title", value: "lorem ipsum 2"}
]

const itemList: Array<Array<rowItem>> = [row1, row2];

function App() {
  return <BasicDatagrid rowList={itemList} />
}
```


## Appendix

It can be written custom error message.

