import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { icons } from '../../shared/icon.js';
import { SearchBar } from './index.js';
import { useAppdispatch, useAppSelector } from '../../store/hook.js';
import { clearSearchKey, setCurrentPage, setPage } from '../../store/searchSlice/searchSlice.js';
import { clearSlug, clearType } from '../../store/mainSlice/SubmenuSlice/submenuSlice.js';
import { setActiveOther } from '../../store/mainSlice/LoadingSlice/loadingSlice.js';

const { FaBookmark } = icons;

const Header = () => {
  const dispatch = useAppdispatch();
  const typeRTK = useAppSelector((state) => state.submenu.type);
  const slugRTK = useAppSelector((state) => state.submenu.slug);
  const searchKeyRTK = useAppSelector((state) => state.search.searchKey);
  const currentPageRTK = useAppSelector((state) => state.search.currentPage);
  const pageRTK = useAppSelector((state) => state.search.page);
  const activeOther = useAppSelector((state) => state.loadingState.activeOther);
 

  const handleOnClick = () => {

    if (activeOther !== null) {
      dispatch(setActiveOther(null));
    }
    if (currentPageRTK !== 1 || pageRTK !== 1) {
      dispatch(setCurrentPage(1));
      dispatch(setPage(1));
    }
    if (searchKeyRTK !== '') {
      dispatch(clearSearchKey());
    }
    if (typeRTK !== '' || slugRTK !== '') {
      dispatch(clearType());
      dispatch(clearSlug());
    }
  };
  return (
    <div className='h-16 custom-bg'>
      <div className='h-full flex items-center justify-between text-[13px] text-[#e9eaee] leading-5 custom-page '>
        <div onClick={handleOnClick}>
          <Link
            to='/'
            className='flex items-center gap-1.5 object-cover'>
            <LazyLoadImage
              effect='blur'
              wrapperProps={{
                // If you need to, you can tweak the effect transition using the wrapper style.
                background: '#f0f0f0',
                // style: { transitionDelay: '1s' },
              }}
              src='/logo.jpg'
              className='h-10 w-10 ml-2.5 rounded-md'
            />
            <p className='text-2xl text-white font-bold whitespace-nowrap'>
              Cuồng <span className='text-[#1890ff]'>Phim</span>
            </p>
          </Link>
        </div>
        {/* <div className='px-10 py-[10px] w-[40%]'> */}
        <div className='hidden sm:flex'>
          <SearchBar />
        </div>
        <div className='bg-[#337ab7] rounded-2xl px-[15px] py-[6px] mr-4 mt-[1px] custom-bg2 shadow-custom text-sm items-center gap-1 hidden lg:flex'>
          <FaBookmark
            size={15}
            color='white'
          />
          <span>Phim yêu thích</span>
          <span className='bg-red-600 rounded-full px-[6px] py-[3px] ml-2.5'>0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
