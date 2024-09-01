// import * as React from 'react';
// import { icons } from '../../shared/icon';
// import { TrailerModal } from './index.js';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
// const { IoPlaySharp, MdExpandMore, FaCirclePlus, IoLogoYoutube, ImBookmark } = icons;

// const CarInfo = ({ image, altname, setExpandServer, trailerLink, handleWatchMovie }) => {
//   const [showModal, setShowModal] = React.useState(false);

//   const openModal = () => {
//     setShowModal(true);
//   };
//   return (
//     <div className='bg-blue-800  justify-between min-[425px]:mx-[43px] md:mx-0 relative rounded-lg'>
//       <div className='flex flex-col items-center rounded-lg'>
//         <LazyLoadImage
//           effect='blur'
//           wrapperProps={{
//             // If you need to, you can tweak the effect transition using the wrapper style.
//             background: '#f0f0f0',
//             style: { transitionDelay: '200ms' },
//           }}
//           src={image}
//           alt={altname}
//           className='w-full h-full object-cover rounded-lg'
//         />
//         <div className='mt-4 absolute text-black left-1.5 -top-4 animate-bookmarkshake'>
//           <div className='relative'>
//             <ImBookmark
//               size={30}
//               color='#d75a4a'
//             />
//             <FaCirclePlus
//               color='#77a61a'
//               className='absolute top-1/2 -right-1 bg-white rounded-full'
//             />
//           </div>
//         </div>
//         <button
//           className='text-sm text-white flex items-center gap-1 mt-2 absolute top-[2px] right-[7px] cardInfo-trailer rounded-[20px] px-3 py-1'
//           onClick={openModal}>
//           <IoLogoYoutube
//             color='white'
//             size={15}
//           />
//           Trailer
//         </button>
//         {showModal ? (
//           <TrailerModal
//             setShowModal={setShowModal}
//             link={trailerLink}
//           />
//         ) : null}

//         <div className='flex justify-center text-sm  mt-4 mb-3 absolute bottom-0 w-full text-white truncate  min-[768px]:text-[11px] min-[1180px]:text-sm'>
//           <button
//             className='flex items-center gap-1  rounded-lg px-2 py-2 mx-2 button-one trasition duration-300'
//             onClick={() => setExpandServer((prev) => !prev)}>
//             <MdExpandMore />
//             <span>Tập phim</span>
//           </button>
//           {/* <SideMovieInfo expandServer={expandServer} /> */}

//           <button
//             className='flex items-center gap-1  rounded-lg px-2 mx-2
//           button-two trasition duration-300'
//             onClick={() => handleWatchMovie()}>
//             <IoPlaySharp
//               size={15}
//               color='white'
//             />
//             <span>Xem phim</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarInfo;



// import React, { useState, useCallback } from 'react';
// import { icons } from '../../shared/icon';

// import { TrailerModal } from './index.js';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';


// const { IoPlaySharp, MdExpandMore, FaCirclePlus, IoLogoYoutube, ImBookmark } = icons;
// const CarInfo = React.memo(({ image, altname, setExpandServer, trailerLink, handleWatchMovie }) => {
//   const [showModal, setShowModal] = useState(false);

//   const openModal = useCallback(() => {
//     setShowModal(true);
//   }, []);

//   const toggleExpandServer = useCallback(() => {
//     setExpandServer(prev => !prev);
//   }, [setExpandServer]);

//   return (
//     <div className='bg-blue-800 justify-between min-[425px]:mx-[43px] md:mx-0 relative rounded-lg'>
//       <div className='flex flex-col items-center rounded-lg'>
//         <LazyLoadImage
//           effect='blur'
//           wrapperProps={{
//             style: { transitionDelay: '200ms', background: '#f0f0f0' },
//           }}
//           src={image}
//           alt={altname}
//           className='w-full h-full object-cover rounded-lg'
//         />
//         <div className='mt-4 absolute text-black left-1.5 -top-4 animate-bookmarkshake'>
//           <div className='relative'>
//             <ImBookmark size={30} color='#d75a4a' />
//             <FaCirclePlus color='#77a61a' className='absolute top-1/2 -right-1 bg-white rounded-full' />
//           </div>
//         </div>
//         <button
//           className='text-sm text-white flex items-center gap-1 mt-2 absolute top-[2px] right-[7px] cardInfo-trailer rounded-[20px] px-3 py-1'
//           onClick={openModal}>
//           <IoLogoYoutube color='white' size={15} />
//           Trailer
//         </button>
//         {showModal && <TrailerModal setShowModal={setShowModal} link={trailerLink} />}

//         <div className='flex justify-center text-sm mt-4 mb-3 absolute bottom-0 w-full text-white truncate min-[768px]:text-[11px] min-[1180px]:text-sm'>
//           <button
//             className='flex items-center gap-1 rounded-lg px-2 py-2 mx-2 button-one transition duration-300'
//             onClick={toggleExpandServer}>
//             <MdExpandMore />
//             <span>Tập phim</span>
//           </button>
//           <button
//             className='flex items-center gap-1 rounded-lg px-2 mx-2 button-two transition duration-300'
//             onClick={handleWatchMovie}>
//             <IoPlaySharp size={15} color='white' />
//             <span>Xem phim</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// });
// CarInfo.displayName = 'CardInfo'
// export default CarInfo;


// import React, { useState, useCallback } from 'react';
// import { icons } from '../../shared/icon';
// import { TrailerModal } from './index.js';
// import { Cloudinary } from "@cloudinary/url-gen";
// import { AdvancedImage, lazyload, placeholder } from '@cloudinary/react';
// import { fill } from "@cloudinary/url-gen/actions/resize";
// import { format, quality } from "@cloudinary/url-gen/actions/delivery";
// import { auto } from "@cloudinary/url-gen/qualifiers/format";
// import { auto as autoQuality } from "@cloudinary/url-gen/qualifiers/quality";

// const { IoPlaySharp, MdExpandMore, FaCirclePlus, IoLogoYoutube, ImBookmark } = icons;

// // Initialize Cloudinary
// const cld = new Cloudinary({
//   cloud: {
//     cloudName: 'drc92vzby' // Replace with your Cloudinary cloud name
//   }
// });

// const CarInfo = React.memo(({ image, altname, setExpandServer, trailerLink, handleWatchMovie }) => {
//   const [showModal, setShowModal] = useState(false);
//   const [isLoaded, setIsLoaded] = useState(false);

//   const openModal = useCallback(() => {
//     setShowModal(true);
//   }, []);

//   const toggleExpandServer = useCallback(() => {
//     setExpandServer(prev => !prev);
//   }, [setExpandServer]);

//   // Extract the public ID from the Cloudinary URL
//   const publicId = image.split('/upload/')[1].split('.')[0];

//   const myImage = cld.image(publicId);
//   myImage
//     .resize(fill().width(800).height(600)) // Adjust dimensions as needed
//     .delivery(format(auto()))
//     .delivery(quality(autoQuality()));

//   return (
//     <div className='bg-blue-800 justify-between min-[425px]:mx-[43px] md:mx-0 relative rounded-lg'>
//       <div className='flex flex-col items-center rounded-lg'>
//         <div className='w-full h-full relative'>
//           <AdvancedImage
//             cldImg={myImage}
//             plugins={[lazyload(), placeholder({ mode: 'blur' })]}
//             onLoad={() => setIsLoaded(true)}
//             className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
//             alt={altname}
//           />
//         </div>
//         <div className='mt-4 absolute text-black left-1.5 -top-4 animate-bookmarkshake'>
//           <div className='relative'>
//             <ImBookmark size={30} color='#d75a4a' />
//             <FaCirclePlus color='#77a61a' className='absolute top-1/2 -right-1 bg-white rounded-full' />
//           </div>
//         </div>
//         <button
//           className='text-sm text-white flex items-center gap-1 mt-2 absolute top-[2px] right-[7px] cardInfo-trailer rounded-[20px] px-3 py-1'
//           onClick={openModal}>
//           <IoLogoYoutube color='white' size={15} />
//           Trailer
//         </button>
//         {showModal && <TrailerModal setShowModal={setShowModal} link={trailerLink} />}

//         <div className='flex justify-center text-sm mt-4 mb-3 absolute bottom-0 w-full text-white truncate min-[768px]:text-[11px] min-[1180px]:text-sm'>
//           <button
//             className='flex items-center gap-1 rounded-lg px-2 py-2 mx-2 button-one transition duration-300'
//             onClick={toggleExpandServer}>
//             <MdExpandMore />
//             <span>Tập phim</span>
//           </button>
//           <button
//             className='flex items-center gap-1 rounded-lg px-2 mx-2 button-two transition duration-300'
//             onClick={handleWatchMovie}>
//             <IoPlaySharp size={15} color='white' />
//             <span>Xem phim</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// });

// CarInfo.displayName = 'CarInfo';

// export default CarInfo;


import React, { useState, useCallback } from 'react';
import { icons } from '../../shared/icon';
import { TrailerModal } from './index.js';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, lazyload, placeholder } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { auto } from "@cloudinary/url-gen/qualifiers/format";
import { auto as autoQuality } from "@cloudinary/url-gen/qualifiers/quality";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const { IoPlaySharp, MdExpandMore, FaCirclePlus, IoLogoYoutube, ImBookmark } = icons;

// Initialize Cloudinary
const cld = new Cloudinary({
  cloud: {
    cloudName: 'drc92vzby' // Replace with your Cloudinary cloud name
  }
});

const CarInfo = React.memo(({  
  image = '',
  altname = '',
  setExpandServer,
  trailerLink = '',
  handleWatchMovie 
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const openModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const toggleExpandServer = useCallback(() => {
    setExpandServer(prev => !prev);
  }, [setExpandServer]);

  // Function to safely extract publicId or return the original image URL
  const getImageSource = (imageUrl) => {
    if (typeof imageUrl !== 'string') {
      console.log('Image URL is not a string:', imageUrl);
      return null;
    }
    
    if (imageUrl.includes('cloudinary.com')) {
      const parts = imageUrl.split('/upload/');
      return parts.length > 1 ? parts[1].split('.')[0] : imageUrl;
    }
    
    return imageUrl;
  };

  const imageSource = getImageSource(image);

  const renderImage = () => {
    if (!imageSource) {
      return (
        <div className="w-full h-full bg-gray-300 flex items-center justify-center rounded-lg">
          <span className="text-gray-500">Image not available</span>
        </div>
      );
    }

    if (imageSource.includes('cloudinary.com')) {
      const myImage = cld.image(imageSource);
      myImage
        .resize(fill().width(800).height(600))
        .delivery(format(auto()))
        .delivery(quality(autoQuality()));

      return (
        <AdvancedImage
          cldImg={myImage}
          plugins={[lazyload(), placeholder({ mode: 'blur' })]}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          alt={altname}
        />
      );
    }

    return (
      <img
        src={imageSource}
        alt={altname}
        className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
      />
    );
  };

  return (
    <div className='bg-blue-800 justify-between min-[425px]:mx-[43px] md:mx-0 relative rounded-lg'>
      <div className='flex flex-col items-center rounded-lg'>
        <div className='w-full h-full relative'>
          {renderImage()}
        </div>
        <div className='mt-4 absolute text-black left-1.5 -top-4 animate-bookmarkshake'>
          <div className='relative'>
            <ImBookmark size={30} color='#d75a4a' />
            <FaCirclePlus color='#77a61a' className='absolute top-1/2 -right-1 bg-white rounded-full' />
          </div>
        </div>
        <button
          className='text-sm text-white flex items-center gap-1 mt-2 absolute top-[2px] right-[7px] cardInfo-trailer rounded-[20px] px-3 py-1'
          onClick={openModal}>
          <IoLogoYoutube color='white' size={15} />
          Trailer
        </button>
        {showModal && <TrailerModal setShowModal={setShowModal} link={trailerLink} />}

        <div className='flex justify-center text-sm mt-4 mb-3 absolute bottom-0 w-full text-white truncate min-[768px]:text-[11px] min-[1180px]:text-sm'>
          <button
            className='flex items-center gap-1 rounded-lg px-2 py-2 mx-2 button-one transition duration-300'
            onClick={toggleExpandServer}>
            <MdExpandMore />
            <span>Tập phim</span>
          </button>
          <button
            className='flex items-center gap-1 rounded-lg px-2 mx-2 button-two transition duration-300'
            onClick={handleWatchMovie}>
            <IoPlaySharp size={15} color='white' />
            <span>Xem phim</span>
          </button>
        </div>
      </div>
    </div>
  );
});

CarInfo.displayName = 'CarInfo';

export default CarInfo;