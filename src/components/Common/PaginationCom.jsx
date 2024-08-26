import * as React from 'react';
import { Pagination } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import { useAppdispatch } from '../../store/hook';
import { setCurrentPage, setPage } from '../../store/searchSlice/searchSlice';

const PaginationCom = ({ currentPage, totalPages, routePath, onPageChange, pageType, onChange }) => {
  const navigate = useNavigate();
  const dispatch = useAppdispatch();
  // const { pageSearch } = useSearch();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleChangePagination = (event, newPage) => {
    dispatch(setCurrentPage(newPage));
    dispatch(setPage(newPage));
    navigate(`${routePath}?page=${newPage}`);
    // console.log(`Trang mới: ${newPage}`);
  };

  // const calculatedTotalPages =
  //   pageType === 'search'
  //     ? Math.ceil(totalPages / limit) // Sử dụng totalItemsSearch cho trang tìm kiếm
  //     : totalPages; // Sử dụng totalPages cho các trang khác

  // const handleChangePage = (e, newPage) => {
  //   if (pageType === 'search') {
  //     onPageChange(newPage);
  //   }
  //   setCurrentPage(newPage); // Luôn cập nhật currentPage
  //   navigate(`${routePath}?page=${newPage}`);
  // };

  // React.useEffect(() => {
  //   if (pageType === 'search') {
  //     setCurrentPage(pageSearch);
  //   }
  // }, [pageType, pageSearch]);

  return (
    <>
      <Stack>
        <Pagination
          shape='rounded'
          // count={totalPages}
          showFirstButton
          showLastButton
          color='secondary'
          count={totalPages}
          page={currentPage}
          onChange={handleChangePagination}
          // onChange={handleChangePage}
          sx={{
            '& .MuiPaginationItem-root': {
              color: 'white',
            },
          }}
        />
      </Stack>
    </>
  );
};

export default PaginationCom;
