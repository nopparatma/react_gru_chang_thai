"use client";
import React, { useState } from "react";

interface PaginationProps {
  totalEntries: number;
  entriesPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  totalEntries,
  entriesPerPage,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const handleClick = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    buttons.push(
      <button
        key="prev"
        onClick={() => handleClick(currentPage - 1)}
        className="px-3 py-1 bg-red-950 rounded-l-md"
      >
        &lt;
      </button>
    );

    if (currentPage > 1) {
      buttons.push(
        <button
          key={1}
          onClick={() => handleClick(1)}
          className="px-3 py-1 bg-red-950"
        >
          1
        </button>
      );
      if (currentPage > 3) {
        buttons.push(
          <span key="dots1" className="px-3 py-1">
            ...
          </span>
        );
      }
    }

    if (currentPage > 2) {
      buttons.push(
        <button
          key={currentPage - 1}
          onClick={() => handleClick(currentPage - 1)}
          className="px-3 py-1 bg-red-950"
        >
          {currentPage - 1}
        </button>
      );
    }

    buttons.push(
      <button
        key={currentPage}
        onClick={() => handleClick(currentPage)}
        className="px-3 py-1 bg-yellow-500"
      >
        {currentPage}
      </button>
    );

    if (currentPage < totalPages - 1) {
      buttons.push(
        <button
          key={currentPage + 1}
          onClick={() => handleClick(currentPage + 1)}
          className="px-3 py-1 bg-red-950"
        >
          {currentPage + 1}
        </button>
      );
    }

    if (currentPage < totalPages) {
      if (currentPage < totalPages - 2) {
        buttons.push(
          <span key="dots2" className="px-3 py-1">
            ...
          </span>
        );
      }
      buttons.push(
        <button
          key={totalPages}
          onClick={() => handleClick(totalPages)}
          className="px-3 py-1 bg-red-950"
        >
          {totalPages}
        </button>
      );
    }

    buttons.push(
      <button
        key="next"
        onClick={() => handleClick(currentPage + 1)}
        className="px-3 py-1 bg-red-950 rounded-r-md"
      >
        &gt;
      </button>
    );

    return buttons;
  };

  return (
    <div className="flex flex-col items-center bg-black text-white py-4 space-y-2 sm:space-y-0 sm:flex-row sm:justify-between">
      <span>
        {` Showing ${entriesPerPage * (currentPage - 1) + 1} to 
        ${Math.min(
          entriesPerPage * currentPage,
          totalEntries
        )} of ${totalEntries} entries`}
      </span>
      <div className="flex space-x-2">{renderPaginationButtons()}</div>
    </div>
  );
};

export default Pagination;
