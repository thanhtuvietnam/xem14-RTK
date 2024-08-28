import React, { useState, useEffect } from 'react';

import { Filter, TrendingNow, MovieWatchBox, RecommendMovie, TableLink, LinkServer, NoteViewer, BreadCrumb } from '../components/Common/index.js';
import { PacmanLoader, MoonLoader } from 'react-spinners';

import { useLocation } from 'react-router-dom';
import { noteMovieWatch } from '../shared/constant.js';
import { useAppdispatch, useAppSelector } from '../store/hook.js';
import { setLoading } from '../store/mainSlice/LoadingSlice/loadingSlice.js';

const MovieWatch = () => {
  // const [isLoading, setIsLoading] = React.useState(false);
  const location = useLocation();

  const movieDetails = location?.state?.movieDetails;

  const serverData = movieDetails?.episodes[0].server_data;
  const isLoading = useAppSelector((state) => state.loadingState.Loading); // Lấy loading state từ Redux
  // console.log(serverData);
  const dispatch = useAppdispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    if (movieDetails) {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 100);
    }
  }, [movieDetails]);

  return (
    <div>
      <Filter />
      <div className='bg-[#151d25] border-t border-t-[#1e2732] custom-page lg:flex shadow-lg'>
        <div className='lg:w-3/4'>
          {isLoading ? (
            <div className='flex flex-col items-center gap-2 mt-3'>
              <span className='text-[#e9e9ea]'>Đang tải...</span>
              <MoonLoader
                size={60}
                color='#e06c26'
                className='z-50'
              />
            </div>
          ) : (
            <div className='mt-2 sm  lg:mr-5 mb-5'>
              <div className='mb-2'>
                <BreadCrumb
                  categoryBreadCrumb={'Xem Phim'}
                  OthersBreadCrumb={movieDetails?.name}
                  hidden={`opacity-0`}
                />
              </div>

              <NoteViewer note={noteMovieWatch} />
              <div>
                <MovieWatchBox movieDetails={movieDetails} />
              </div>
              {/* <div>tập dự phòng</div> */}
              <div className='bg-[#101821] rounded-md p-3 text-[#a5a5a5] mb-2 border-[1px] border-[#1e2732] overflow-y-auto overflow-x-scroll h-60 scroll-bar-custom'>
                <TableLink movieServerData={serverData} />
              </div>
              <div>comment</div>
              <div>
                <RecommendMovie />
              </div>
            </div>
          )}
        </div>
        <div className='lg:w-2/6 '>
          <TrendingNow />
        </div>
      </div>
    </div>
  );
};

export default MovieWatch;
