import { hoatHinh } from '../services/danhsach/';
import { MovieCategory } from '../components/Common';

const HoatHinh = () => {
  return (
    <>
      <MovieCategory
        fetchFunction={hoatHinh}
        sectionTitle='Hoạt Hình'
        categorySlug='hoat-hinh'
      />
    </>
  );
};

export default HoatHinh;
