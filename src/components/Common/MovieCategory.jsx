import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { NoteViewer, CardItem, Filter, PaginationCom, SectionTitle, TrendingNow } from './index.js';
import { IMG_URL, noteLine } from '../../shared/constant.js';
import { classifyAddon } from '../../shared/utils.js';
import { useSearch } from '../../context/SearchContext.jsx';
import SkeletonForAll from '../Skeleton/SkeletonForAll/SkeletonForAll.jsx';
import { useGetMoviesByCategoryQuery } from '../../store/apiSlice/homeApi.slice.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppdispatch, useAppSelector } from '../../store/hook.js';
import { setCurrentPage, setPage } from '../../store/searchSlice/searchSlice.js';

const MovieCategory = ({ sectionTitle, dataResults, totalItemsSearch, categorySlug }) => {
  const navigate = useNavigate();
  // console.log(dataResults)
  const location = useLocation();
  // const { handlePageChange } = useSearch();
  const pageType = location.pathname === '/tim-kiem' ? 'search' : 'normal';
  // const [totalPages, setTotalPages] = React.useState(0);
  /* -------------------------------------------------------------------------- */
  const currentPage = useAppSelector((state) => state.search.currentPage);

  // const searchParams = new URLSearchParams(location.search);
  // const currentPageFromUrl = parseInt(searchParams.get('page'), 10) || 1;
  // const [currentPage, setCurrentPage] = React.useState(currentPageFromUrl);
  const dispatch = useAppdispatch();
  const { data: categoryData, isLoading, isFetching, isError, error } = useGetMoviesByCategoryQuery({ category: categorySlug, page: currentPage }, { skip: !categorySlug });
  /* -------------------------------------------------------------------------- */
  const limit = 24;
  // React.useEffect(() => {
  //   if (totalItemsSearch) {
  //     setTotalPages(Math.ceil(totalItemsSearch / limit));
  //   } else {
  //     setTotalPages(Math.ceil(categoryData?.data.params?.pagination?.totalItems / limit));
  //   }
  // }, []);

  const totalPages = totalItemsSearch ? Math.ceil(totalItemsSearch / limit) : Math.ceil((categoryData?.data?.params?.pagination?.totalItems || 0) / limit);

  useEffect(() => {
    if (isError && error) {
      toast('BẠN VUI LÒNG BẤM F5 HOẶC BẤM TẢI LẠI TRANG');
    }
  }, [isError, error]);

  // const handleChangePagination = (event, newPage) => {
  //   dispatch(setCurrentPage(newPage));
  //   dispatch(setPage(newPage));
  //   navigate(`${routePath}?page=${newPage}`);
  //   // console.log(`Trang mới: ${newPage}`);
  // };
  return (
    <>
      <div className='min-h-screen custom-page px-0 bg-[#151d25]'>
        <NoteViewer
          note={noteLine}
          hidden={`hidden`}
        />
        <ToastContainer />
        {isFetching ? (
          <>
            <SkeletonForAll
              withSlider={false}
              cardCount={24}
              sectionCount={1}
            />
          </>
        ) : (
          <>
            <Filter />
            <div className='bg-[#151d25] border-t border-t-[#1e2732] custom-page lg:flex shadow-lg  min-h-screen'>
              <div className='lg:mr-5 mb-5 lg:w-3/4'>
                <div className='mb-3'>
                  <SectionTitle
                    sectionFilm={sectionTitle}
                    hidden={`hidden`}
                  />
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 responsive-edit gap-2.5 '>
                  {(dataResults || categoryData?.data?.items)?.map((item, index) => (
                    <Link
                      to={`/chitiet-phim/${item.slug}`}
                      key={item._id}>
                      <CardItem
                        image={`${IMG_URL}/${item?.thumb_url}`}
                        title={item?.name}
                        originalName={item?.origin_name}
                        quality={item?.quality}
                        lang={item?.lang}
                        key={index}
                        addOn={classifyAddon(item)}
                        cardItemQualang='cardItemQualang'
                      />
                    </Link>
                  ))}
                </div>
              </div>
              <div className='lg:w-2/6 '>
                <TrendingNow />
              </div>
            </div>
          </>
        )}
        <div className='fixed bottom-0 bg-black/75 z-10'>
          {/* {totalItemsSearch ? (
            <PaginationCom
              routePath={location.pathname}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalItemsSearch} // Sử dụng totalPages đã được tính toán trong useEffect
              // onPageChange={handlePageChange} // Luôn truyền onPageChange
              pageType={pageType} // Luôn truyền pageType
              onChange={handleChangePagination}
            />
          ) : (
            <PaginationCom
              routePath={location.pathname} // Truyền pathname cho PaginationCom
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
              // onPageChange={handlePageChange} // Luôn truyền onPageChange
              pageType={pageType} // Luôn truyền pageType
              onChange={handleChangePagination}
            />
          )} */}
          <PaginationCom
            routePath={location.pathname} // Truyền pathname cho PaginationCom
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            // onPageChange={handlePageChange} // Luôn truyền onPageChange
            pageType={pageType} // Luôn truyền pageType
            // onChange={handleChangePagination}
          />
        </div>
      </div>
    </>
  );
};

export default MovieCategory;

// const [data, setData] = React.useState([]);
// const [isLoading, setIsLoading] = React.useState(false);

/* -------------------------------------------------------------------------- */

// React.useEffect(() => {
//   if (typeof fetchFunction === 'function') {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const res = await fetchFunction(currentPage);
//         setData(res);
//         if (totalItemsSearch) {
//           setTotalPages(Math.ceil(totalItemsSearch / limit));
//         } else {
//           setTotalPages(Math.ceil(res?.params?.pagination?.totalItems / limit));
//         }
//       } catch (error) {
//         console.log(`error in fetchData: ${error}`);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchData();
//   }
// }, [currentPage, fetchFunction, dataResults, totalItemsSearch]);

{
  /* {dataResults
                    ? dataResults &&
                      dataResults?.items?.map((item, index) => (
                        <Link
                          to={`/chitiet-phim/${item.slug}`}
                          key={item._id}>
                          <CardItem
                            image={`${IMG_URL}/${item?.thumb_url}`}
                            title={item?.name}
                            originalName={item?.origin_name}
                            quality={item?.quality}
                            lang={item?.lang}
                            key={index}
                            addOn={classifyAddon(item)}
                            cardItemQualang='cardItemQualang'
                          />
                        </Link>
                      ))
                    : categoryData &&
                      categoryData?.data?.items?.map((item, index) => (
                        <Link
                          to={`/chitiet-phim/${item.slug}`}
                          key={item._id}>
                          <CardItem
                            image={`${IMG_URL}/${item?.thumb_url}`}
                            title={item?.name}
                            originalName={item?.origin_name}
                            quality={item?.quality}
                            lang={item?.lang}
                            key={index}
                            addOn={classifyAddon(item)}
                            cardItemQualang='cardItemQualang'
                          />
                        </Link>
                      ))} */
}
