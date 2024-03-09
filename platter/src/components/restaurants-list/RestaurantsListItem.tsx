import React from 'react';
import {Card} from 'react-bootstrap';
import IRestaurant from '../../models/IRestaurant';
import Rating from '../common/Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
//we have to fetch information from the backend which is the platter-server folder. it is running in
//3001 which is mentioned in the .env file
type Props={
    restaurant:IRestaurant
};
const RestaurantsListItem=({restaurant}:Props)=>{
    const {
      id,
name,
description,
rating,
numRatings,
imageUrl
    }=restaurant;
    return(
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${process.env
    .REACT_APP_API_BASE_URL}${imageUrl}`} />{/*we have to give here environment specific variable */}
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
            <div>{name}
        <div className="text-xs">
            <Rating value={rating}/>
            {rating}({numRatings} rating)
        </div>
        </div>
        <div>
            <Link to={`/restaurants/${id}`} className="btn btn-primary btn-sm">
                <FontAwesomeIcon icon={faCoffee}/>
                Menu</Link>
            
        </div>
        </Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
    );
}
export default RestaurantsListItem;