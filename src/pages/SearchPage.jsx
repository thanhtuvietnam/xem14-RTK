import React, { useEffect, useState } from 'react';
import { MovieCategory } from '../components/Common';

import SkeletonForAll from '../components/Skeleton/SkeletonForAll/SkeletonForAll';
import { useAppdispatch, useAppSelector } from '../store/hook';
import { useGetSearchQuery } from '../store/apiSlice/homeApi.slice';
import { useDebounce } from '../hooks/useDebounce';
import { setError } from '../store/mainSlice/LoadingSlice/loadingSlice';

const SearchPage = () => {
  // const { searchResults, isLoading } = useSearch();
  const searchTerm = useAppSelector((state) => state.search.searchKey);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const page = useAppSelector((state) => state.search.page);
  const { data: state, isLoading, isError, error, isFetching } = useGetSearchQuery({ searchTerm: debouncedSearchTerm, page }, { skip: !debouncedSearchTerm });

  const totalPages = state?.data?.params?.pagination?.totalItems;
  const dataResults = state?.data?.items;
  const dispatch = useAppdispatch();

  useEffect(() => {
    if (isError && error) {
      console.log('BẠN VUI LÒNG NHẬP LẠI PHIM VÀ ENTER');
      dispatch(setError(true));
    }
  }, [isError, error]);

  return (
    <>
      <div className='min-h-screen custom-page px-0 bg-[#151d25]'>
        {isFetching ? (
          <SkeletonForAll />
        ) : (
          <MovieCategory
            hiddenOther={`hidden`}
            categoryBreadCrumb='Tìm Kiếm'
            sectionTitle={`Kết quả tìm kiếm cho từ khoá: ${searchTerm}`}
            dataResults={dataResults}
            totalItemsSearch={totalPages}
          />
        )}
      </div>
    </>
  );
};

export default SearchPage;
