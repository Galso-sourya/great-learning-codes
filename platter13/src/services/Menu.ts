import axios from 'axios';
import IMenuItem from '../models/IMenuItem';

const getMenuForRestaurant = ( id : number ) => {
    return axios.get<IMenuItem[]>( `${process.env.REACT_APP_API_BASE_URL}/restaurants/${id}/items` )
            .then( response => response.data )
};
export {
    getMenuForRestaurant
};