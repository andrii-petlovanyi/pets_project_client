import { useState } from 'react';

const usePagination = () => {
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState();
  const [perPage, setPerPage] = useState(12);

  const countPage = Math.ceil(totalCount / perPage);

  return { page, setPage, setTotalCount, countPage, perPage, setPerPage };
};

export default usePagination;
