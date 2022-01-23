import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .paginationItem {
    background: none;
    border: none;
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 50%;
    height: 32px;
    width: 32px;
    position: relative;
    margin: 0 5px;
    cursor: pointer;
    color: var(--clr-primary);
  }

  .paginationItem span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .prev,
  .next {
    background: none;
    border: none;
    color: var(--clr-primary);
    font-weight: bold;
    padding: 10px;
    margin: 0 10px;
    cursor: pointer;
    outline: none;
  }

  .paginationItem.active {
    background: var(--clr-primary);
    color: var(--white);
    pointer-events: none;
  }

  .prev.disabled,
  .next.disabled {
    pointer-events: none;
    color: #999;
  }
`
const Pagination = ({ data, RenderComponent, title, pageLimit, dataLimit }) => {
  const [pages] = useState(Math.ceil(data.length / dataLimit))
  console.log("🚀 ~ file: Pagination.tsx ~ line 58 ~ Pagination ~ pages", pages)
  const [currentPage, setCurrentPage] = useState(1)

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1)
  }
  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1)
  }
  const changePage = (e): void => {
    const pageNumber = Number(e.target.textContent)
    setCurrentPage(pageNumber)
  }
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit
    const endIndex = startIndex + dataLimit
    return data.slice(startIndex, endIndex)
  }
  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit
    const pageCount = pageLimit > start ? pageLimit : pages - start
    return new Array(pageCount).fill(1).map((_, idx) => start + idx + 1)
  }

  return (
    <Wrapper>
      <h1>{title}</h1>

      {/* show the components, 10 components at a time */}
      <div className="dataContainer">
        {getPaginatedData().map((d: React.FunctionComponent, idx: number) => (
          <RenderComponent key={idx} data={d} />
        ))}
      </div>

      {/* show the pagiantion
              it consists of next and previous buttons
              along with page numbers, in our case, 5 page
              numbers at a time
          */}
      <div className="pagination">
        {/* previous button */}
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
        >
          &lt;
        </button>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${currentPage === item ? 'active' : ''}`}
          >
            <span>{item}</span>
          </button>
        ))}

        {/* next button */}
        <button
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? 'disabled' : ''}`}
        >
          &gt;
        </button>
      </div>
    </Wrapper>
  )
}

export default Pagination