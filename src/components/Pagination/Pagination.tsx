import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Country } from '../../../types/Country';
import { CountryList } from '../CountryList';
import style from './Pagination.module.scss';

interface PaginationProps {
  countries: Country[];
}

export const Pagination: React.FC<PaginationProps> = ({ countries }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = countries.slice(startIndex, endIndex);

  const pageCount = Math.ceil(countries.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected + 1);
  };

  return (
    <>
      <CountryList currentItems={currentItems} />
      {pageCount > 1 && (
        <ReactPaginate
          containerClassName={style.pagination}
          activeClassName={style.active}
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          aria-label="Pagination"
        />
      )}
    </>
  );
};
