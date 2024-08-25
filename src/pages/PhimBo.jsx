import { phimBo } from '../services/danhsach/';
import { MovieCategory } from '../components/Common';
const PhimBo = () => {
  return (
    <>
      <MovieCategory
        categorySlug='phim-bo'
        fetchFunction={phimBo}
        
      />
    </>
  );
};

export default PhimBo;
