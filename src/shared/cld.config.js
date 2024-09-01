import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
    cloud: {
        cloudName: 'drc92vzby',
        api_key: '126525586791946',
        api_secret: 'LTnCJVwcIiX33vz08JY-KTQX0sc'
    }
});

export default cld;