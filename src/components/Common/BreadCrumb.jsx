import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import { Link, useNavigate } from 'react-router-dom';

export default function BreadCrumb({ categoryBreadCrumb, PageBreadCrumb, hidden, hiddenOther, OthersBreadCrumb }) {
  const navigate = useNavigate();
  function handleClick(event) {
    event.preventDefault();
    navigate('/');
    // console.info('You clicked a breadcrumb.');
  }
  return (
    <div
      role='presentation'
      className='flex items-center gap-2'>
      <Link
        className='cursor-pointer text-[#1890ff]'
        onClick={handleClick}
        underline='hover'
        sx={{ display: 'flex', alignItems: 'center' }}>
        <HomeIcon
          sx={{ mr: 0.5 }}
          fontSize='inherit'
        />
        Trang chủ
      </Link>
      <div className='flex text-[#b0e8e5] items-center'>
        <WhatshotIcon
          sx={{ mr: 0.5 }}
          fontSize='inherit'
        />
        {categoryBreadCrumb}
      </div>
      <div className={`${hiddenOther} text-[#b0e8e5] flex items-center`}>
        <GrainIcon
          sx={{ mr: 0.5 }}
          fontSize='inherit'
        />
        {OthersBreadCrumb}
      </div>
      <div className={`${hidden} text-[#b0e8e5] flex items-center`}>
        <BakeryDiningIcon
          sx={{ mr: 0.5 }}
          fontSize='inherit'
        />
        {PageBreadCrumb}
      </div>
      {/* </Breadcrumbs> */}
    </div>
  );
}
