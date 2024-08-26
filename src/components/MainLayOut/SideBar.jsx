import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { convertToSlug } from '../../shared/utils';
import { HomeOutlined, VideoCameraOutlined, PlaySquareOutlined, SmileOutlined, TrophyOutlined, GlobalOutlined, AppstoreOutlined, ClockCircleOutlined, CloseOutlined } from '@ant-design/icons';
import { IoLogoOctocat } from 'react-icons/io';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './index.css';
import { navLists } from '../../shared/constant';

const icons = [<HomeOutlined />, <VideoCameraOutlined />, <PlaySquareOutlined />, <TrophyOutlined />, <IoLogoOctocat />, <AppstoreOutlined />, <GlobalOutlined />, <SmileOutlined />, <ClockCircleOutlined />, <CloseOutlined />];

const SideBar = ({ onCloseSideBar, isSidebarActive, theLoaiData, quocGiaData }) => {
  const [openKeys, setOpenKeys] = useState([]); // State để quản lý openKeys
  //   const [showDropDown, setShowDropDown] = useState(null);

  // console.log(showDropDown)

  //   const handleMouseEnter = (item) => {
  //     // setShowDropDown(item);
  //     if (isSidebarActive) {
  //       setShowDropDown(item);
  //     }
  //   };

  //   const handleMouseLeave = () => {
  //     // setShowDropDown(null);
  //     if (isSidebarActive) {
  //       setShowDropDown(null);
  //     }
  //   };

  // const handleItemClick = () => {
  //   setOpenKeys([]); // Đóng tất cả submenu khi đóng sidebar
  //   if (window.innerWidth <= 1024) {
  //     onCloseSideBar();
  //   }
  // };
  
  const handleCloseSideBar = () => {
    setOpenKeys([]); // Đóng tất cả submenu khi đóng sidebar
    onCloseSideBar();
  };

  const menuItems = navLists.map((item, index) => {
    if (item === 'THỂ LOẠI') {
      return {
        key: item,
        icon: icons[index],
        label: item,
        children: theLoaiData?.map((theLoai) => ({
          key: theLoai.name,
          label: (
            <Link
              to={`/the-loai/${theLoai.slug}`}
              onClick={handleCloseSideBar}>
              {theLoai.name}
            </Link>
          ),
        })),
      };
    } else if (item === 'QUỐC GIA') {
      return {
        key: item,
        icon: icons[index],
        label: item,
        children: quocGiaData?.map((quocGia) => ({
          key: quocGia.name,
          label: (
            <Link
              to={`/quoc-gia/${quocGia.slug}`}
              onClick={handleCloseSideBar}>
              {quocGia.name}
            </Link>
          ),
        })),
      };
    } else {
      return {
        key: item,
        icon: icons[index],
        label: (
          <Link
            to={`/${convertToSlug(item)}`}
            onClick={handleCloseSideBar}>
            {item}
          </Link>
        ),
      };
    }
  });

  // console.log(menuItems);

  return (
    <div>
      <div className={`sidebar  ${isSidebarActive ? 'active' : ''}`}>
        <div className='relative custom-bg rounded-tr-lg'>
          <div className='flex items-center justify-between'>
            <div className='logo'>
              <LazyLoadImage
                src='/logo.jpg'
                alt='Logo'
              />
            </div>
            <div className='mr-5'>
              <span className='logo-text'>
                Cuồng <span className='text-primary'>Phim</span>
              </span>
            </div>
            <button
              onClick={handleCloseSideBar} // Sử dụng handleCloseSideBar
              className='text-black text-xl mr-1.5 rounded-full px-1 x-button'>
              <CloseOutlined />
            </button>
          </div>
        </div>
        <Menu
          className='overflow-y-scroll scroll-bar-custom'
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['TRANG CHỦ']}
          items={menuItems}
          openKeys={openKeys} // Sử dụng openKeys để quản lý open submenu
          onOpenChange={(keys) => setOpenKeys(keys)} // Cập nhật openKeys khi submenu được mở
        />
      </div>
      <div
        onClick={handleCloseSideBar}
        className={`bg-black/60 z-[5] fixed top-0 left-0 w-full h-full visible lg:invisible md:opacity-0 transition duration-300  ${isSidebarActive ? 'opacity-100 visible' : 'opacity-0 invisible'} media-screen`}></div>
    </div>
  );
};

export default SideBar;
