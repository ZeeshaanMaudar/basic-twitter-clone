import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { selectTweetsCount } from '../../redux/tweets/tweetsSelectors';

import {
  PaginationWrapper,
  ButtonsWrapper,
  PreviousButton,
  NextButton,
  PageContent,
  LimitWrapper,
  LimitSelector
} from './styled';

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
    <PaginationWrapper>
      <ButtonsWrapper>
        <PreviousButton
          disabled={page <= 1}
          onClick={handlePrevious}
        >
          Previous
        </PreviousButton>
        <PageContent>Page <strong>{page}</strong> of {numberOfPages}</PageContent>
        <NextButton
          disabled={page >= numberOfPages}
          onClick={handleNext}
        >
          Next
        </NextButton>
      </ButtonsWrapper>
      
      <LimitWrapper>
        <span>Rows per page</span>
        <LimitSelector onChange={handleLimitChange} defaultValue={5}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </LimitSelector>
      </LimitWrapper>
    </PaginationWrapper>
  );
}

export default Pagination;
