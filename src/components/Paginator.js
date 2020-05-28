import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import PropTypes from 'prop-types';

function Paginator({ currentPage, totalPages, onChangePage }) {
  return (
    <Pagination>
      <Pagination.First
        disabled={currentPage === 1}
        onClick={() => onChangePage(1)}
      />

      {currentPage > 1 && (
        <Pagination.Prev onClick={() => onChangePage(currentPage - 1)} />
      )}

      {currentPage >= 4 && <Pagination.Ellipsis disabled />}

      {currentPage >= 3 && (
        <Pagination.Item onClick={() => onChangePage(currentPage - 2)}>
          {currentPage - 2}
        </Pagination.Item>
      )}

      {currentPage >= 2 && (
        <Pagination.Item onClick={() => onChangePage(currentPage - 1)}>
          {currentPage - 1}
        </Pagination.Item>
      )}

      <Pagination.Item active>{currentPage}</Pagination.Item>

      {currentPage + 1 <= totalPages && (
        <Pagination.Item onClick={() => onChangePage(currentPage + 1)}>
          {currentPage + 1}
        </Pagination.Item>
      )}

      {currentPage + 2 <= totalPages && (
        <Pagination.Item onClick={() => onChangePage(currentPage + 2)}>
          {currentPage + 2}
        </Pagination.Item>
      )}

      <Pagination.Ellipsis disabled />

      {currentPage < totalPages && (
        <Pagination.Next onClick={() => onChangePage(currentPage + 1)} />
      )}

      <Pagination.Last
        disabled={currentPage === totalPages}
        onClick={() => onChangePage(totalPages)}
      />
    </Pagination>
  );
}

Paginator.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
};

export default React.memo(Paginator);
