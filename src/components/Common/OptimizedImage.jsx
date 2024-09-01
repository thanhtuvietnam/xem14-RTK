// import React from 'react';
// import { AdvancedImage } from '@cloudinary/react';
// import { fill } from "@cloudinary/url-gen/actions/resize";
// import { format, quality } from "@cloudinary/url-gen/actions/delivery";
// import { auto } from "@cloudinary/url-gen/qualifiers/format";
// import { auto as autoQuality } from "@cloudinary/url-gen/qualifiers/quality";
// import cld from '../../config/cloudinary';

// const OptimizedImage = ({ publicId, alt, className, width, height }) => {
//   const myImage = cld.image(publicId);

//   myImage
//     .resize(fill().width(width).height(height))
//     .delivery(format(auto()))
//     .delivery(quality(autoQuality()));

//   return (
//     <AdvancedImage cldImg={myImage} alt={alt} className={className} />
//   );
// };

// export default OptimizedImage;

import React, { useState } from 'react';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, lazyload, placeholder } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { auto } from "@cloudinary/url-gen/qualifiers/format";
import { auto as autoQuality } from "@cloudinary/url-gen/qualifiers/quality";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Initialize Cloudinary
const cld = new Cloudinary({
    cloud: {
        cloudName: 'drc92vzby' // Replace with your Cloudinary cloud name
    }
});

const OptimizedImage = ({ publicId, alt, className, width, height }) => {
    // const [isLoaded, setIsLoaded] = useState(false);

    // Extract the original image URL from the Cloudinary transformation URL
    const getOriginalImageUrl = (url) => {
        const match = url.match(/https:\/\/img\.ophim\.live\/uploads\/movies\/[^/]+\.jpg/);
        return match ? match[0] : url;
    };
    const imageUrl = getOriginalImageUrl(publicId);

    //   const myImage = cld.image(publicId);
    //   myImage
    //     .resize(fill().width(width).height(height))
    //     .delivery(format(auto()))
    //     .delivery(quality(autoQuality()));

    return (
        <LazyLoadImage
            effect='blur'
            src={imageUrl}
            alt={alt || 'Movie poster'}
            //   className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            className='h-full w-full object-cover rounded-t-lg group-hover:scale-110 transition duration-500'
            wrapperClassName='h-full w-full'
            placeholder={<div className="h-full w-full bg-gray-300 animate-pulse"></div>}
            width={width}
            height={height}
            // loading="lazy"
            // onLoad={() => setIsLoaded(true)}
        />
    );
};

export default OptimizedImage;