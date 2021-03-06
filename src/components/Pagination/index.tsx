import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { selectTweetsCount } from '../../redux/tweets/tweetsSelectors';

interface PaginationProps {
  page: number,
  limit: number,
  setLimit: (event: any) => void,
  setPage: any
}

const Pagination: FC<PaginationProps> = ({ page, limit, setLimit, setPage }) => {

  const totalCount = useSelector(selectTweetsCount);

  let numberOfPages = 1;

  if (totalCount > 0 && Number.isInteger(totalCount / limit)) {
    numberOfPages = totalCount / limit;
  }

  if (totalCount > 0 && !Number.isInteger(totalCount / limit)) {
    numberOfPages = Math.ceil(totalCount / limit);
  }

  const handlePrevious = () => {
    setPage((prevPage: number) => prevPage - 1);
  }

  const handleNext = () => {
    setPage((prevPage: number) => prevPage + 1);
  }

  const handleLimitChange = (event: any) => {
    setLimit(event.target.value)
  }

  return (
    <div>
      <button
        disabled={page <= 1}
        onClick={handlePrevious}
      >
        Previous
      </button>
      <span>Page {page} of {numberOfPages}</span>
      <button
        disabled={page >= numberOfPages}
        onClick={handleNext}
      >
        Next
      </button>
      <span>Rows per page</span>
      <select onChange={handleLimitChange} defaultValue={5}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
        <option value={totalCount}>All</option>
      </select>
    </div>
  );
}

export default Pagination;
