import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const isPrevPageAvailbale = currentPage !== 1;
  const isNextPageAvailbale = Math.ceil(totalItems / itemsPerPage) !== currentPage;

  const arrowLeft = isPrevPageAvailbale ? <>←</> : '';
  const disabledLeft = isPrevPageAvailbale ? false : true;

  const arrowRight = isNextPageAvailbale ? <>→</> : '';
  const disabledRight = isNextPageAvailbale ? false : true;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={disabledLeft}>
        {arrowLeft}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" onClick={goNext} disabled={disabledRight}>
        {arrowRight}
      </button>
    </div>
  );
};

export default Pagination;
