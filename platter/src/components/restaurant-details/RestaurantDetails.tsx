import React,{useEffect,useState} from 'react';
import IRestaurant from '../../models/IRestaurant';
import { LoadingStatus } from '../../models/types';
import LoadingIndicator from '../common/LoadingIndicator';
import {Row,Col,Alert,Badge} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-solid-svg-icons';
import Rating from '../common/Rating';
import { getRestaurantById } from '../../services/restaurants';
import Menu from '../menu/Menu';
import { RouteComponentProps,Route } from 'react-router-dom';
import AddMenuItem from '../add-menu-item/AddMenuItem';
//type Props={
//}; not required
const RestaurantDetails =({match}:RouteComponentProps<id:string>)=>{
const [status,setStatus]=useState<LoadingStatus>('LOADING');
const [restaurant,setRestaurant]=useState<IRestaurant|null>(null);
const [error,setError]=useState<Error|null>(null);
useEffect(()=>{
    const fetchRestaurant=async()=> {
        try{
       const data= await getRestaurantById(+match.params.id);//+ sign is converting the string into
       //a number
        setRestaurant(data);
        setStatus('LOADED');}catch(error){
            setError(error);
            setStatus('ERROR_LOADING');
        }
        };
        fetchRestaurant();
},[]);
    let el;
    switch(status){
case 'LOADING':
    el=(
<LoadingIndicator
size="large"
message="please wait"
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
        }=restaurant as IRestaurant;
    el=(
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
        className="w-100"
        />
    </Col>
    <Col xs={12} lg={8}>
        <div>
            {
cuisines.map(
    cuisine=>(
        <Badge bg="primary" key={cuisine}>{cuisine}</Badge>
    )
)
            }
        </div>
        <div>
            {description}
        </div>
        <Row xs={3} className="text-sm">{/*this is taken from the css file. the className */}
            <Col>
            <FontAwesomeIcon icon={faClock}/>
            <span>{opens}-{closes}</span>
            </Col>
            <Col>
            <Rating value={rating}/>
            </Col>
            <Col></Col>
        </Row>
    </Col>
</Row>
<Route path={match.path} 
render={(props:RouteComponentProps)=><Menu {...props} id={id}/>}
exact
/ >
<Route path={`${match.path}/add`} 
render={(props:RouteComponentProps)=><AddMenuItem {...props} id={id}/>}/ >
</>
    );
    break;
    case 'ERROR_LOADING':
    el=(
<Alert variant="danger">
          {error?.message}
        </Alert>
    );
    break;
    }
    return el;
}
export default RestaurantDetails;