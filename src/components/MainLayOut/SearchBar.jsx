import React, { useState, useRef, useReducer, useEffect, useCallback } from 'react';
import { RightBarCar } from '../MainLayOut/index.js';
import { Link, useNavigate } from 'react-router-dom';
import { icons } from '../../shared/icon';
import instance from '../../shared/axiosConfig';
import { RingLoader } from 'react-spinners';
const { IoIosSearch } = icons;
import { IMG_URL } from '../../shared/constant.js';
import { useSearch } from '../../context/SearchContext.jsx';
import Tooltip from '@mui/joy/Tooltip';
import { useMediaQuery } from '@mui/material';
import { useGetSearchQuery, useGetHomeQuery } from '../../store/apiSlice/homeApi.slice.js';
import { useAppdispatch, useAppSelector } from '../../store/hook.js';
import { clearSearchKey, setCurrentPage, setPage, setSearchKey, setTotalItems } from '../../store/searchSlice/searchSlice.js';
import { useDebounce } from '../../hooks/useDebounce.js';

// const initialState = {
//   keyword: '',
//   searchResults: [],
//   isLoading: false,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_KEYWORD':
//       return { ...state, keyword: action.payload };
//     case 'SET_SEARCH_RESULTS':
//       return { ...state, searchResults: action.payload };
//     case 'SET_IS_LOADING':
//       return { ...state, isLoading: action.payload };
//     // case 'SET_HOME_API_RESULTS':
//     //   return { ...state, homeApiResults: action.payload };
//     default:
//       return state;
//   }
// };

const SearchBar = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false); // Thêm state này
  const isSmallScreen = useMediaQuery('(max-width: 600px)'); // Kiểm tra kích thước màn hình

  const dispatch = useAppdispatch();
  const totalItemNumbers = useAppSelector((state) => state.search.totalItems);
  const searchTerm = useAppSelector((state) => state.search.searchKey);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const page = useAppSelector((state) => state.search.page);
  // const currentPage = useAppSelector((state) => state.search.currentPage);

  const { data: homeRes } = useGetHomeQuery();
  const { data: state, isLoading, error, isFetching } = useGetSearchQuery({ searchTerm: debouncedSearchTerm, page }, { skip: !debouncedSearchTerm });

  // const totalPages = Math.ceil(state?.data?.params?.pagination?.totalItems / 24) || 1;

  useEffect(() => {
    const totalItems = homeRes?.data?.params?.pagination?.totalItems || 0;
    if (totalItems) {
      dispatch(setTotalItems(totalItems));
    }
  }, [homeRes]);

  const navigate = useNavigate();
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  // const { setSearchResults, pageSearch, setKeyType, setIsLoading } = useSearch();

  // useEffect(() => {
  //   const delayDebounceFn = setTimeout(async () => {
  //     if (state.keyword) {
  //       setIsLoading(true); // Cập nhật isLoading trong context
  //       dispatch({ type: 'SET_IS_LOADING', payload: true });
  //       const searchApi = `/tim-kiem?keyword=${state?.keyword}&page=${pageSearch}`;
  //       try {
  //         const response = await instance.get(searchApi);
  //         const dataSearch = response?.data?.data;
  //         //   console.log(dataSearch.items);
  //         dispatch({ type: 'SET_SEARCH_RESULTS', payload: dataSearch });
  //         setSearchResults(dataSearch || []);
  //         setTotalItems(dataSearch?.params?.pagination?.totalItems || 0);
  //       } catch (error) {
  //         console.log(`lỗi khi tìm kiếm: ${error}`);
  //       } finally {
  //         dispatch({ type: 'SET_IS_LOADING', payload: false });
  //         setIsLoading(false); // Cập nhật isLoading trong context
  //       }
  //     } else {
  //       dispatch({ type: 'SET_SEARCH_RESULTS', payload: [] });
  //     }
  //   }, 300);
  //   return () => clearTimeout(delayDebounceFn);
  // }, [state?.keyword, pageSearch, setSearchResults, setIsLoading]);

  const handleChange = (e) => {
    dispatch(setSearchKey(e.target.value));
    dispatch(setPage(1));
    dispatch(setCurrentPage(1));
    setShowDropdown(true);
  };

  // const handleKeyDownSearch = (event) => {
  //   if (event.key === 'Enter' && state?.keyword.trim() !== '') {
  //     navigate(`/tim-kiem?keyword=${state?.keyword}`);
  //     setShowDropdown(false);
  //   }
  // };
  // const handleClickSearch = () => {
  //   if (state?.keyword.trim() !== '') {
  //     // Kiểm tra xem input có chữ hay không
  //     // navigate(`/tim-kiem?keyword=${state?.keyword}`);
  //     setShowDropdown(false);
  //   }
  // };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      // Kiểm tra xem input có chữ hay không
      navigate(`/tim-kiem?keyword=${searchTerm}`);
      setShowDropdown(false);
    }
    e.target[0].value = '';
  };

  useEffect(() => {
    // Hàm xử lý sự kiện click trên document
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && inputRef.current && !inputRef.current.contains(event.target)) {
        setShowDropdown(false);
        // dispatch(clearSearchKey());
      }
    };

    // Lắng nghe sự kiện click trên document
    document.addEventListener('click', handleClickOutside);

    // Hủy lắng nghe sự kiện khi component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []); // Chạy useEffect một lần duy nhất khi component mount

  return (
    <div className='search-container sm:w-[300px] md:w-[400px]'>
      <form
        onSubmit={handleSearchSubmit}
        className=' items-center flex'
        ref={dropdownRef}>
        <Tooltip
          title={`enter hoặc nhấn 🔍 `}
          sx={{ color: 'black', textTransform: 'capitalize' }}
          placement={isSmallScreen ? 'top-end' : 'bottom-end'} // Thay đổi placement dựa trên kích thước màn hình
          arrow
          size='sm'
          color='warning'
          open={isInputFocused} // Kiểm soát hiển thị Tooltip dựa trên state isInputFocused
          variant='soft'>
          <input
            ref={inputRef}
            className='text-[13px] border-[1px] border-[#ffbb35] truncate rounded-l-md rounded-r-none'
            type='text'
            value={searchTerm}
            placeholder={`Search with ${totalItemNumbers || 0} movie`}
            onChange={handleChange}
            // onKeyDown={handleKeyDownSearch}
            onFocus={() => setIsInputFocused(true)} // Cập nhật state khi focus
            onBlur={() => setIsInputFocused(false)} // Cập nhật state khi blur
          />
        </Tooltip>
        {isFetching && (
          <div className='loading '>
            <RingLoader
              loading={isFetching}
              color='white'
              size={30}
              speedMultiplier={2}
            />
          </div>
        )}
        <div>
          <button className='hover:bg-black border-[1.5px] border-[#ff8a00]  p-[5.5px] rounded-r-md'>
            <IoIosSearch
              size={25}
              color='#ff8a00'
            />
          </button>
        </div>
      </form>
      {/* drop down */}
      {showDropdown && (
        <div>
          <ul
            ref={dropdownRef}
            className='scroll-bar-custom border-[1px] border-[#684808] flex flex-col max-h-[300px] sm:max-h-[400px] md:max-h-[470px] lg:max-h-[550px] xl:max-h-[650px]'>
            <div className='px-2 md:px-4 py-2 text-sm font-medium text-gray-400 capitalize sm:px-6 sm:text-base md:text-lg'>
              <p className=' truncate'>
                Bạn đang tìm: <span className='text-[#d50ac1]'>{searchTerm}</span>
              </p>
            </div>
            {state?.data?.items?.map((result) => (
              <Link
                to={`/chitiet-phim/${result?.slug}`}
                key={result._id}>
                <RightBarCar
                  thumbImage={`${IMG_URL}/${result?.thumb_url}`}
                  year={result?.year}
                  movieName={result?.name}
                  originName={result?.origin_name}
                />
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

// const fetchHomeAPI = useCallback(async () => {
//   dispatch({ type: 'SET_IS_LOADING', payload: true });
//   try {
//     const homeRes = await instance.get(`/home`);
//     const totalItems = homeRes?.data?.data?.params?.pagination?.totalItems || 0;
//     dispatch({ type: 'SET_TOTAL_ITEMS', payload: totalItems });
//   } catch (error) {
//     console.error('Lỗi khi fetch dữ liệu Home API:', error);
//   } finally {
//     dispatch({ type: 'SET_IS_LOADING', payload: false });
//   }
// }, []);
// useEffect(() => {
//   fetchHomeAPI();
// }, [fetchHomeAPI]);

// const totalItemsSearch = state && state?.homeApiResults?.params?.pagination?.totalItems;
