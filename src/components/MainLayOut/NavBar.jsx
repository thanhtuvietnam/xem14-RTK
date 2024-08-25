import { useEffect, useReducer, useState, useRef } from 'react';
import { SearchBar, SideBar } from '../MainLayOut/index.js';
import { icons } from '../../shared/icon.js';
import { Link, useNavigate } from 'react-router-dom';
import { navLists } from '../../shared/constant.js';
import { convertToSlug } from '../../shared/utils.js';
import { useActiveButton } from '../../hooks/useActiveButton.js';
// import { quocGia, theLoai } from '../../services/theloaivaquocgia.js';
import UtilityButton from '../Common/UtilityButton.jsx';
import { useGetTheLoaiQuery, useGetQuocGiaQuery } from '../../store/apiSlice/homeApi.slice.js';

const { MdOutlineMenu, FaBookmark,  HiOutlineDotsVertical, IoMdArrowDropdown } = icons;

const NavBar = () => {

  const [isSideBarActive, setIsSideBarActive] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const [activeButton, handleClick] = useActiveButton(navLists);
  const [showDropDown, setShowDropDown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const { data: theLoaiRes, isLoading: isLoadingTheLoai, isError: isErrorTheLoai } = useGetTheLoaiQuery();
  const { data: quocGiaRes, isLoading: isLoadingQuocGia, isError: isErrorQuocGia } = useGetQuocGiaQuery();

  const isLoading = isLoadingTheLoai || isLoadingQuocGia;
  const isError = isErrorTheLoai || isErrorQuocGia;

  const theLoai = theLoaiRes?.data?.items;
  const quocGia = quocGiaRes?.data?.items;

  useEffect(() => {
    if (theLoai && quocGia) {
      // console.log({ theLoai, quocGia }); 
    }else if(isError) {
        console.error('Có lỗi xảy ra:');
    }
  }, [theLoai, quocGia]); // Chạy useEffect khi theloai1 thay đổi

  // const initialState = {
  //   subMenuTheLoais: [],
  //   subMenuQuocGias: [],
  // };

  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case 'SET_SUBMENU_THELOAI':
  //       return { ...state, subMenuTheLoais: action.payload };
  //     case 'SET_SUBMENU_QUOCGIA':
  //       return { ...state, subMenuQuocGias: action.payload };
  //     default:
  //       return state;
  //   }
  // };
  // const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   setIsLoading(true);
  //   const fetchData = async () => {
  //     try {
  //       const [theloaiRes, quocgiaRes] = await Promise.all([theLoai(), quocGia()]);
  //       dispatch({ type: 'SET_SUBMENU_THELOAI', payload: theloaiRes });
  //       dispatch({ type: 'SET_SUBMENU_QUOCGIA', payload: quocgiaRes });
  //     } catch (error) {
  //       console.log(`lỗi ở fetchData navbar: ${error}`);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);
  const navListsSlug = navLists.map((text) => convertToSlug(text));

  const handleItemClick = (index) => {
    handleClick(index);
    navigate(`/${navListsSlug[index]}`);
  };

  const handleMouseEnter = (item) => {
    setShowDropDown(item);
  };
  const handleMouseLeave = () => {
    setShowDropDown(false);
  };

  const handleDropdownClick = (item) => {
    setShowDropDown((prev) => (prev === item ? 'null' : item));
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropDown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className=' bg-[#12171b] shadow-custom'>
      <ul className='text-[#989898] hidden lg:flex custom-page list-none items-center justify-start text-[15px] font-normal transition duration-300'>
        {navLists &&
          navLists.map((navList, index) => (
            <li
              key={index}
              className='relative'
              // onMouseLeave={handleMouseLeave}
            >
              {navList === 'THỂ LOẠI' || navList === 'QUỐC GIA' ? (
                <div
                  ref={showDropDown === navList ? dropdownRef : null} // Gắn ref khi dropdown hiển thị
                  className={`px-2.5 py-3.5 dropdown hover:text-[#ff8a00] hover:bg-[#000000] hover:translate-y-0 cursor-pointer ${activeButton === index ? 'bg-[#223344]' : ''}`}
                  onClick={() => handleDropdownClick(navList)} // Thêm onClick
                >
                  <div className='flex items-center justify-center'>
                    {navList}
                    <IoMdArrowDropdown />
                  </div>
                </div>
              ) : (
                <div
                  className={`px-2.5 py-3.5 hover:text-[#ff8a00] hover:bg-[#000000] hover:translate-y-0 cursor-pointer ${activeButton === index ? 'bg-[#223344]' : ''}`}
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
          onCloseSideBar={() => setIsSideBarActive(false)}
        />
      </div>
      <div className='hidden md:flex'>
        <UtilityButton />
      </div>
    </div>
  );
};

export default NavBar;
