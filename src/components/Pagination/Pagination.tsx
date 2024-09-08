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

  return (
    <>
      <ul className={style.wrapper}>
        {[...Array(totalPages)].map((_, index) => (
          <li key={index}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(index + 1);
              }}
              style={{ cursor: 'pointer', marginRight: '8px' }}
            >
              {index + 1}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
