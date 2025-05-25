import React, { Component, useState,useEffect } from 'react';
import IRestaurant from '../../models/IRestaurant';
import { LoadingStatus } from '../../models/types';
import LoadingIndicator from '../common/Loadingindicator';
import { Row, Col, Alert, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Rating from '../common/Rating';
import { getRestaurantById } from '../../services/restaurants';
import Menu from '../menu/Menu';
type Props = {
};
const RestaurantDetails = (props:Props ) => {
    const [ status, setStatus ] = useState<LoadingStatus>( 'LOADING' );
    const [ restaurant, setRestaurant ] = useState<IRestaurant | null>( null );
    const [ error, setError ] = useState<Error | null>( null );
    useEffect(
        () => {
            const fetchRestaurant = async () => {
                    const data = await getRestaurantById(1 );
                    setRestaurant( data );
                    setStatus( 'LOADED' );
            };

            fetchRestaurant();
        },
        [ ]
    );
let el;
        

        switch( status ) {
            case 'LOADING':
                el = (
                    <LoadingIndicator
                        size="large"
                        message="We are fetching the list of restaurants. Please wait..."
                    />
                );
                break;
            case 'LOADED':
                const {
                id,
                name,
                description,
                cuisines,
                opens,
                closes,
                rating,
                numRatings,
                costForTwo,
                imageUrl
            } = restaurant as IRestaurant;
                el = (
                    <>
                    <Row>
                    <Col xs={12}>
                    <h1>{name}</h1>
                    <hr/>
                    </Col>
                        <Col xs={12} lg={4}>
                        <img
                        src={`${process.env.REACT_APP_API_BASE_URL}${imageUrl}`}
                        alt={name}
                        className='w-100'
                        />
                        </Col>
                        <Col xs={12} lg={8} className="my-2">
                        <div>
                                {
                                    cuisines.map(
                                        cuisine => (
                                            <Badge
                                                bg="primary me-2"
                                                key={cuisine}
                                            >
                                                {cuisine}
                                            </Badge>
                                        )
                                    )
                                }
                            </div><div className="fs-5 my-2">{description}</div>
                            <Row xs={3} className="text-sm">
                                <Col>
                                    <FontAwesomeIcon icon={faClock} />
                                    <span className="ms-2">{opens} - {closes}</span>
                                </Col>
                                <Col>
                                    <Rating value={rating} className="me-2" />
                                    {rating} ({numRatings} ratings)
                                </Col>
                                <Col>
                                    Cost for two: Rs. {costForTwo}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Menu id={id}/>
                    </>
                );
                break;
            case 'ERROR_LOADING':
                el = (
                    <Alert variant="danger my-3">
                        {error?.message}
                    </Alert>
                );
                break;
        }
    
        return el;
    
}

export default RestaurantDetails;