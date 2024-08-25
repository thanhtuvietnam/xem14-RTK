import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../shared/constant';

const baseUrl = API_URL;

export const homeApi = createApi({
  reducerPath: 'homeApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getHome: builder.query({
      query: () => `home`,
    }),
    getMovieRes: builder.query({
      query: (slug) => `phim/${slug}`,
    }),

    getPhimmoi: builder.query({
      query: (page) => `danh-sach/phim-moi-cap-nhat?page=${page}`,
    }),
    getPhimbo: builder.query({
      query: (page) => `danh-sach/phim-bo?page=${page}`,
    }),
    getPhimle: builder.query({
      query: (page) => `danh-sach/phim-le?page=${page}`,
    }),
    getTVShows: builder.query({
      query: (page) => `danh-sach/tv-shows?page=${page}`,
    }),
    getHoathinh: builder.query({
      query: (page) => `danh-sach/hoat-hinh?page=${page}`,
    }),
    getMoviesByCategory: builder.query({
      query: ({ category, page }) => `danh-sach/${category}?page=${page}`,
    }),
    getTheLoai: builder.query({
      query: (genreName = '', page = 1) => `the-loai/${genreName}?page=${page}`,
    }),
    getQuocGia: builder.query({
      query: (genreName = '', page = 1) => `quoc-gia/${genreName}?page=${page}`,
    }),
    searchMovies: builder.query({
      query: ({ keyword, page }) => `tim-kiem?keyword=${keyword}&page=${page}`,
    }),
  }),
});

export const { useGetPhimmoiQuery, useGetPhimboQuery, useGetPhimleQuery, useGetTVShowsQuery, useGetHoathinhQuery, useGetTheLoaiQuery, useGetQuocGiaQuery, useSearchMoviesQuery, useGetHomeQuery, useGetMovieResQuery, useGetMoviesByCategoryQuery } = homeApi;
