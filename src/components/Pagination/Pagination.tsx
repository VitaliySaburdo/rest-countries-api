import { useEffect, useState } from 'react';
import { Country } from '../../../types/Country';
import style from './Pagination.module.scss';

interface PaginationProps {
  countries: Country[];
  setFragment: (fragment: Country[]) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  countries,
  setFragment,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const fragment = countries.slice(startIndex, endIndex);
    setFragment(fragment);
  }, [currentPage, countries, setFragment]);

  const totalPages = Math.ceil(countries.length / itemsPerPage);

  const renderPagination = () => {
    const pages = [];

    pages.push(
      <li key={1}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handlePageChange(1);
          }}
          style={{
            cursor: 'pointer',
            marginRight: '8px',
            fontWeight: currentPage === 1 ? 'bold' : 'normal',
          }}
        >
          1
        </a>
      </li>
    );

    if (currentPage > 4) {
      pages.push(<li key="dots1">...</li>);
    }

    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 4);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li key={i}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(i);
            }}
            style={{
              cursor: 'pointer',
              marginRight: '8px',
              fontWeight: currentPage === i ? 'bold' : 'normal',
            }}
          >
            {i}
          </a>
        </li>
      );
    }

    if (currentPage < totalPages - 2) {
      pages.push(<li key="dots2">...</li>);
    }

    pages.push(
      <li key={totalPages}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handlePageChange(totalPages);
          }}
          style={{
            cursor: 'pointer',
            marginRight: '8px',
            fontWeight: currentPage === totalPages ? 'bold' : 'normal',
          }}
        >
          {totalPages}
        </a>
      </li>
    );

    return pages;
  };

  return (
    <>
      <ul className={style.wrapper}>{renderPagination()}</ul>
    </>
  );
};
