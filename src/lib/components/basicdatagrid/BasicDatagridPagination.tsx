import React, { useEffect, useState } from 'react'

type BasicDatagridPaginationProp = {
  handlePagination: (e: React.MouseEvent<HTMLButtonElement>) => void
  page: number
  nextPage: () => void
  previousPage: () => void
  firstPage: () => void
  lastPage: () => void
  pageLinkCount: number
  pageCount: number
}

export default function BasicDatagridPagination(prop: BasicDatagridPaginationProp) {
  const { handlePagination, page, nextPage, previousPage, firstPage, lastPage, pageLinkCount, pageCount } = prop
  const [buttons, setButtons] = useState<Array<any>>([])
  const [maxPage, setMaxPage] = useState(pageLinkCount)
  const [minPage, setMinPage] = useState(1)

  function setMinMaxPage(pMin: number, pMax: number) {
    setMinPage(pMin)
    setMaxPage(pMax)
  }

  function setPaginationButtons(pMin: number, pMax: number) {
    const tempButtons = []
    for (let i = pMin; i <= pMax; i++) {
      let selected = ''
      if (i === page) {
        selected = 'basictable-pagination-selected'
      }
      tempButtons.push(
        <button
          className={`basictable-pagination-button basictable-pagination-number ${selected}`}
          key={i}
          value={i}
          onClick={handlePagination}
        >
          {i}
        </button>,
      )
    }
    setButtons(tempButtons)
  }

  useEffect(() => {
    let tempMinPage = minPage
    let tempMaxPage = pageCount < maxPage ? pageCount : maxPage

    if (tempMinPage > page) {
      tempMinPage = page
      tempMaxPage = page + pageLinkCount - 1
      setMinMaxPage(tempMinPage, tempMaxPage)
    }
    if (tempMaxPage < page) {
      tempMaxPage = page
      tempMinPage = page - pageLinkCount + 1
      setMinMaxPage(tempMinPage, tempMaxPage)
    }
    setPaginationButtons(tempMinPage, tempMaxPage)
  }, [page])
  return (
    <div className='basictable-pagination'>
      <button className='basictable-pagination-button basictable-pagination-action' onClick={firstPage}>
        First
      </button>
      <button className='basictable-pagination-button basictable-pagination-action' onClick={previousPage}>
        Pre
      </button>
      {buttons.map((item) => item)}
      <button className='basictable-pagination-button basictable-pagination-action' onClick={nextPage}>
        Next
      </button>
      <button className='basictable-pagination-button basictable-pagination-action' onClick={lastPage}>
        Last
      </button>
    </div>
  )
}
