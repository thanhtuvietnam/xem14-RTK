import { useEffect, useState, useRef } from 'react';
import { SearchBar, SideBar } from '../MainLayOut/index.js';
import { icons } from '../../shared/icon.js';
import { Link, useNavigate } from 'react-router-dom';
import { navLists } from '../../shared/constant.js';
import { convertToSlug } from '../../shared/utils.js';
import { useActiveButton } from '../../hooks/useActiveButton.js';
import UtilityButton from '../Common/UtilityButton.jsx';
import { useGetTheLoaiQuery, useGetQuocGiaQuery } from '../../store/apiSlice/homeApi.slice.js';
import { useAppdispatch, useAppSelector } from '../../store/hook.js';
import { clearSearchKey, setCurrentPage, setPage } from '../../store/searchSlice/searchSlice.js';
import { setDropdown } from '../../store/mainSlice/LoadingSlice/loadingSlice.js';

const { MdOutlineMenu, FaBookmark, HiOutlineDotsVertical, IoMdArrowDropdown, IoMdArrowDropup } = icons;

const NavBar = () => {
  const [isSideBarActive, setIsSideBarActive] = useState(false);
  const [activeButton, handleClick] = useActiveButton(navLists);
  const [showDropDown, setShowDropDown] = useState(null);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const navbarRef = useRef(null);

  const { data: theLoaiRes, isLoading: isLoadingTheLoai, isError: isErrorTheLoai } = useGetTheLoaiQuery();
  const { data: quocGiaRes, isLoading: isLoadingQuocGia, isError: isErrorQuocGia } = useGetQuocGiaQuery();

  const isLoading = isLoadingTheLoai || isLoadingQuocGia;
  const isError = isErrorTheLoai || isErrorQuocGia;

  const theLoai = theLoaiRes?.data?.items;
  const quocGia = quocGiaRes?.data?.items;

  const dispatch = useAppdispatch();
  // const dropdown = useAppSelector((state) => state.loadingState.Dropdown);

  // useEffect(() => {
  //   if (theLoai && quocGia) {
  //     console.log({ theLoai, quocGia });
  //   } else if (isError) {
  //     console.error('Có lỗi xảy ra:');
  //   }
  // }, [theLoai, quocGia]);

  const navListsSlug = navLists.map((text) => convertToSlug(text));

  const handleItemClick = (index) => {
    handleClick(index);
    navigate(`/${navListsSlug[index]}`);
    dispatch(setCurrentPage(1));
    dispatch(setPage(1));
    dispatch(clearSearchKey());
    // dispatch(setDropdown((previous) => !previous));
    setShowDropDown(null);
  };

  const handleDropdownClick = (item) => {
    setShowDropDown((prev) => (prev === item ? 'null' : item));
    // setShowDropDown((prev) => (!prev));
  };

  const handleMouseEnter = (item) => {
    setShowDropDown(item);
  };
  const handleMouseLeave = () => {
    setShowDropDown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Kiểm tra xem click có nằm ngoài dropdown và navbar không
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && navbarRef.current && !navbarRef.current.contains(event.target)) {
        setShowDropDown(null); // Đóng dropdown
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCloseSideBar = () => {
    setIsSideBarActive(false);
    dispatch(clearSearchKey());
    dispatch(setCurrentPage(1));
    dispatch(setPage(1));
  };

  return (
    <div className=' bg-[#12171b] shadow-custom'>
      <ul
        ref={navbarRef}
        className='text-[#989898] hidden lg:flex custom-page list-none items-center justify-start text-[15px] font-normal transition duration-300 '>
        {navLists &&
          navLists.map((navList, index) => (
            <li
              key={index}
              className='relative border-r-[0.5px] first:border-l-[0.5px] border-[#2e353f] '
              onMouseLeave={handleMouseLeave}>
              {navList === 'THỂ LOẠI' || navList === 'QUỐC GIA' ? (
                <div
                  ref={showDropDown === navList ? dropdownRef : null} // Gắn ref khi dropdown hiển thị
                  className={`px-2.5 py-3.5 dropdown hover:text-[#ff8a00] hover:bg-[#000000] cursor-pointer  ${activeButton === index ? 'bg-[#223344]' : ''}`}
                  onClick={() => handleDropdownClick(navList)} // Thêm onClick
                  onMouseEnter={() => handleMouseEnter(navList)}
                  // onMouseLeave={handleMouseLeave}
                >
                  <div className='flex items-center justify-center'>
                    {navList}
                    {showDropDown === navList ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                  </div>
                </div>
              ) : (
                <div
                  className={`px-2.5 py-3.5 hover:text-[#ff8a00] hover:bg-[#000000] cursor-pointer ${activeButton === index ? 'bg-[#223344]' : ''}`}
                  onClick={() => handleItemClick(index)}>
                  {navList}
                </div>
              )}
              {showDropDown === navList && (
                <div
                  ref={showDropDown === navList ? dropdownRef : null}
                  className='absolute left-0 bg-[#1f3d58] shadow-custom py-2 rounded-lg w-96 z-50 rounded-t-none '
                  // onMouseEnter={() => handleMouseEnter(navList)}
                  onMouseLeave={handleMouseLeave}>
                  {isLoading ? (
                    <div className='absolute bg-black w-96 h-5 z-50 '></div>
                  ) : (
                    <div>
                      {index === 5 && ( // Kiểm tra index để hiển thị đúng dropdown
                        <div className='grid grid-cols-3 '>
                          {theLoai &&
                            theLoai.map((subMenuTheLoai) => (
                              <Link
                                onClick={() => handleItemClick(index)}
                                to={`/the-loai/${subMenuTheLoai.slug}`} // Điều chỉnh route cho thể loại
                                key={subMenuTheLoai._id}
                                className='p-2'>
                                {subMenuTheLoai.name}
                              </Link>
                            ))}
                        </div>
                      )}
                      {index === 6 && ( // Kiểm tra index để hiển thị đúng dropdown
                        <div className='grid grid-cols-3'>
                          {quocGia &&
                            quocGia.map((subMenuQuocGia) => (
                              <Link
                                onClick={() => handleItemClick(index)}
                                to={`/quoc-gia/${subMenuQuocGia.slug}`} // Điều chỉnh route cho quốc gia
                                key={subMenuQuocGia._id}
                                className='p-2'>
                                {subMenuQuocGia.name}
                              </Link>
                            ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
      </ul>

      {/* sideBar */}
      <div className='lg:hidden flex items-center justify-between text-[#a5a5a5] custom-page'>
        <button
          id='myButton'
          className='py-[9px] px-[10px] hover:bg-slate-800	'
          onClick={() => setIsSideBarActive((ev) => !ev)}>
          <MdOutlineMenu size={30} />
        </button>
        <div className='flex items-center gap-2.5'>
          <div className='max-sm:flex hidden'>
            <SearchBar />
          </div>
          <div className='flex relative h-5'>
            <FaBookmark size={17} />
            <span className='bg-red-700 rounded-full absolute text-sm px-1 transform -translate-y-full left-2.5 top-1.5'>0</span>
          </div>
          <HiOutlineDotsVertical size={17} />
        </div>
      </div>
      <div>
        <SideBar
          theLoaiData={theLoai}
          quocGiaData={quocGia}
          isSidebarActive={isSideBarActive}
          onCloseSideBar={handleCloseSideBar}
        />
      </div>
      <div className='hidden md:flex'>
        <UtilityButton />
      </div>
    </div>
  );
};

export default NavBar;
