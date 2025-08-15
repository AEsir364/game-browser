import React from 'react';
import styles from './pagination.module.css';

const Pagination = ({ gamesPerPage, totalGames, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styles.pagination}>
        {pageNumbers.map(number => (
          <li key={number} className={styles.pageItem}>
            <a 
              onClick={() => paginate(number)} 
              href="#!"
              className={`${styles.pageLink} ${currentPage === number ? styles.active : ''}`}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;