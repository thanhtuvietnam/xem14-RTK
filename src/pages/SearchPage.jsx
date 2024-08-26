import React, { useEffect, useState } from 'react';
import { MovieCategory, NoteViewer } from '../components/Common';
import { useSearch } from '../context/SearchContext';
import { MoonLoader } from 'react-spinners';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { CardSkeleton, FilterSkeleton } from '../components/Skeleton/HomePageSkeleton';
import { noteLine } from '../shared/constant';
import SkeletonForAll from '../components/Skeleton/SkeletonForAll/SkeletonForAll';
import { useAppSelector } from '../store/hook';
import { useGetSearchQuery } from '../store/apiSlice/homeApi.slice';
import { useDebounce } from '../hooks/useDebounce';

const SearchPage = () => {
  // const { searchResults, isLoading } = useSearch();
  const searchTerm = useAppSelector((state) => state.search.searchKey);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const page = useAppSelector((state) => state.search.page);
  const { data: state, isLoading, error, isFetching } = useGetSearchQuery({ searchTerm: debouncedSearchTerm, page }, { skip: !debouncedSearchTerm });

  const totalPages = state?.data?.params?.pagination?.totalItems
  const dataResults = state?.data?.items;
  return (
    <>
      <div className='min-h-screen custom-page px-0 bg-[#151d25]'>
        {isFetching ? (
          <SkeletonForAll />
        ) : (
          <MovieCategory
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
