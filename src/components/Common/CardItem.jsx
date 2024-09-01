import PropTypes from 'prop-types';
import Tooltip from '@mui/joy/Tooltip';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { memo } from 'react';
import OptimizedImage from './OptimizedImage';

const CardItem = memo(({ 
  image = '',
  title = '',
  originalName = '',
  quality = '',
  lang = '',
  addOn = '',
  cardItemQualang = ''
}) => {
  // const getPublicId = (imageUrl) => {
  //   if (typeof imageUrl !== 'string') {
  //     console.log('Image URL is not a string:', imageUrl);
  //     return null;
  //   }
    
  //   // Log the image URL for debugging
  //   console.log('Processing image URL:', imageUrl);

  //   // Check if it's a Cloudinary URL
  //   if (imageUrl.includes('cloudinary.com')) {
  //     const parts = imageUrl.split('/upload/');
  //     if (parts.length > 1) {
  //       const publicId = parts[1].split('.')[0];
  //       console.log('Extracted public ID:', publicId);
  //       return publicId;
  //     }
  //   }
    
  //   // If it's not a Cloudinary URL, return the full URL
  //   console.log('Using full URL as public ID');
  //   return imageUrl;
  // };

  // const publicId = getPublicId(image);
  return (
    <div className={`card-custom flex flex-col bg-[#202a34] group`}>
      <div className='h-5/6 relative overflow-hidden rounded-t-lg'>
        {/* <LazyLoadImage
          // effect='opacity'
          effect='blur'
          wrapperProps={{
            // If you need to, you can tweak the effect transition using the wrapper style.
            background: '#f0f0f0',
            style: { transitionDelay: '200ms' },
          }}
          src={image}
          className='h-full w-full object-cover rounded-t-lg group-hover:scale-110 transition duration-500'
        /> */}
          <OptimizedImage
          publicId={image} // Pass the full image URL
          alt={title || 'Movie poster'}
          className='h-full w-full object-cover rounded-t-lg group-hover:scale-110 transition duration-500'
          width={300} // Adjust based on your needs
          height={450} // Adjust based on your needs
        />
        {quality && lang && (
            <div className={`${cardItemQualang}`}>
              {quality}+{lang}
            </div>
          )}
       {addOn && <div className='addOn-custom'>{addOn}</div>}
      </div>
      <div className='mt-1'>
        <Tooltip title={title || 'No title'} placement='top'>
          <div className='text-center mx-3'>
            <h3 className='text-[#e6920e] truncate font-medium mb-1/2'>{title || 'No title'}</h3>
            <p className='text-[#8a9eaf] truncate text-sm mb-1'>{originalName || 'No original name'}</p>
          </div>
        </Tooltip>
      </div>
    </div>
  );
});

// const CardItem = ({ image, title, originalName, quality, lang, addOn, cardItemQualang }) =>{
//   return (
//     <div className={`card-custom flex flex-col bg-[#202a34] group`}>
//       <div className='h-5/6 relative overflow-hidden rounded-t-lg'>
//         <LazyLoadImage
//           // effect='opacity'
//           effect='blur'
//           wrapperProps={{
//             // If you need to, you can tweak the effect transition using the wrapper style.
//             background: '#f0f0f0',
//             style: { transitionDelay: '200ms' },
//           }}
//           src={image}
//           className='h-full w-full object-cover rounded-t-lg group-hover:scale-110 transition duration-500'
//         />
//         <div className={`${cardItemQualang}`}>
//           {quality}+{lang}
//         </div>
//         <div className='addOn-custom'>{addOn}</div>
//       </div>
//       <div className='mt-1'>
//         <Tooltip
//           // color='warning'
//           title={title}
//           placement='top'
//           // variant='soft'
//         >
//           <div className='text-center mx-3'>
//             <h3 className='text-[#e6920e] truncate font-medium mb-1/2'>{title}</h3>
//             <p className='text-[#8a9eaf] truncate text-sm mb-1'>{originalName}</p>
//           </div>
//         </Tooltip>
//       </div>
//     </div>
//   );
// }

CardItem.propTypes = {
  addOn: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  originalName: PropTypes.string,
  quality: PropTypes.string,
  lang: PropTypes.string,
};


CardItem.displayName = 'CardItem';
export default CardItem;
