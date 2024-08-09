import ReactPaginate from "react-paginate";
import { NextArrowIcon, PreviousArrowIcon } from "../icons/icons";
import { memo } from "react";

const Pagination = ({ totalPages, currentPage, setSelectedPage }) => {
  const handlePageChange = (e) => {
    setSelectedPage(e.selected + 1);
  };
  return (
    <ReactPaginate
      containerClassName="pagination"
      breakLabel="..."
      previousLabel={<PreviousArrowIcon />}
      nextLabel={<NextArrowIcon />}
      onPageChange={handlePageChange}
      pageRangeDisplayed={3}
      pageCount={totalPages}
      activeClassName="active"
      forcePage={currentPage - 1}
    />
  );
};

export default memo(Pagination);
