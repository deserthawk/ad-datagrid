# ad-datagrid

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

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

[npm-url]: https://www.npmjs.com/package/ad-datagrid
[npm-image]: https://img.shields.io/npm/v/ad-datagrid
[github-license]: https://img.shields.io/github/license/deserthawk/ad-datagrid
[github-license-url]: https://github.com/deserthawk/ad-datagrid/blob/main/LICENSE
[github-build]: https://github.com/deserthawk/ad-datagrid/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/deserthawk/ad-datagrid/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/ad-datagrid
## Demo

BasicDatagrid: [demo](https://deserthawk.github.io/ad-datagrid/)

