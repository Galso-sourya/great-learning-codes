import axios from 'axios';
import ImageSource from '../models/ImageSource';

const getImageSources = () => {
    return axios.get<ImageSource[]>( `${process.env.REACT_APP_API_BASE_URL}/image-sources` )
            .then( response => response.data )
};

export {
    getImageSources
};