import { MovieCategory } from '../components/Common';

const TVShows = () => {
  return (
    <>
      <MovieCategory
        categoryBreadCrumb='TV-SHOWS'
        sectionTitle='TVSHOWS'
        categorySlug='tv-shows'
        hiddenOther={`hidden`}
      />
    </>
  );
};

export default TVShows;
