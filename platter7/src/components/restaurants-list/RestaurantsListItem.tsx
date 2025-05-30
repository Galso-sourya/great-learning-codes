import React from 'react';
import IRestaurant from '../../models/IRestaurant';
import { Card } from 'react-bootstrap';
import Rating from '../common/Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
type Props = {
    restaurant: IRestaurant
};

const RestaurantsListItem = ( { restaurant } : Props ) => {
  const {
        id,
        name,
        description,
        rating,
        numRatings,
        imageUrl
    } = restaurant;

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`${process.env.REACT_APP_API_BASE_URL}${imageUrl}`} />
            <Card.Body>
                <Card.Title className="d-flex justify-content-between">
                    <div>
                        {name}
                        <div className="text-xs">
                            <Rating value={rating} className="me-2" />
                            {rating} ({numRatings} rating)
                        </div>
                    </div></Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
    )
}

export default RestaurantsListItem;