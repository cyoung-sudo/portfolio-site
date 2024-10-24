import { useState, useEffect } from 'react';

interface Project {
  name: string;
  about: string;
  website: string;
  images: string[];
  tech: string[];
  repos: {};
  deployed: boolean;
}

const usePagination = (data: Project[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // Calc total pages
  useEffect(() => {
    setTotalPages(Math.ceil(data.length / itemsPerPage));
  }, [data, itemsPerPage]);

  // Retrieve data for current page
  const currentData = () => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const resetPage = () => {
    setCurrentPage(1);
  }

  return {
    currentPage,
    totalPages,
    currentData,
    nextPage,
    prevPage,
    resetPage
  };
};

export default usePagination;