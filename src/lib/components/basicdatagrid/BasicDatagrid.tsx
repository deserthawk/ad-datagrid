import React, { useState } from 'react'

import '../../styles/datagrid.css'
import BasicDatagridPagination from './BasicDatagridPagination'
import BasicTableHeader from './BasicTableHeader'
import BasicTableRow from './BasicTableRow'

/**
 * @param value row cell value
 * @param header row cell header
 */
export type rowItem = {
  value: string | number
  header: string
}

type BasicDatagridProp = {
  rowList: Array<Array<rowItem>>
  pCheckRowError?: string
  maxTextLength?: number
  pageItemCount?: number
  pPaginationButton?: number
  pHeaderList?: Array<string>
}

export default function BasicDatagrid(prop: BasicDatagridProp) {
  const { rowList, pCheckRowError } = prop
  const maxTextLength = prop.maxTextLength && prop.maxTextLength > 0 ? prop.maxTextLength : -1
  const theHeaderList = prop.pHeaderList ? prop.pHeaderList : rowList[0].map((item) => item.header)
  const pageItemCount = prop.pageItemCount ? prop.pageItemCount : 10
  const paginationButton = prop.pPaginationButton ? prop.pPaginationButton : 5
  const [page, setPage] = useState<number>(1)
  const pageCount = Math.ceil(rowList.length / pageItemCount)

  const checkRows = () => {
    const rowLength = rowList.length > 0 ? rowList[0].length : 0
    if (rowLength === 0) {
      return true
    }
    return rowList.every((item) => item.length === rowLength)
  }

  const handlePagination = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPage(parseInt(e.currentTarget.value))
  }

  const nextPage = () => {
    if (page < pageCount) {
      setPage(page + 1)
    }
  }

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const firstPage = () => {
    setPage(1)
  }

  const lastPage = () => {
    setPage(pageCount)
  }

  if (!checkRows()) {
    return (
      <div className='basic-datagrid-error'>
        <div>{pCheckRowError ? pCheckRowError : 'Error'}</div>
      </div>
    )
  }

  return (
    <>
      <table className='basic-datagrid'>
        <BasicTableHeader headerList={theHeaderList} />
        <BasicTableRow
          rowList={rowList}
          maxTextLength={maxTextLength}
          page={page}
          pageItemCount={pageItemCount}
          pHeaderList={theHeaderList}
        />
      </table>
      <BasicDatagridPagination
        handlePagination={handlePagination}
        page={page}
        nextPage={nextPage}
        previousPage={previousPage}
        firstPage={firstPage}
        lastPage={lastPage}
        pageLinkCount={paginationButton}
        pageCount={pageCount}
      />
    </>
  )
}
