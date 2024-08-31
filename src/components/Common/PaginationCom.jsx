import * as React from 'react';
import { Pagination } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppdispatch } from '../../store/hook';
import { setCurrentPage, setPage } from '../../store/searchSlice/searchSlice';

const PaginationCom = ({ currentPage, totalPages, routePath, onPageChange, pageType, onChange, categorySlug }) => {
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
    // navigate(`/the-loai/${categorySlug}?page=${newPage}`, { state: { slug: categorySlug, type } }); 
    // console.log(`Trang mới: ${newPage}`);
  };

  return (
    <>
      <Stack>
        <Pagination
          shape='rounded'
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
