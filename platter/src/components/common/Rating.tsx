//function component
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar,faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarEmpty} from '@fortawesome/free-regular-svg-icons';
import './Rating.css';
type Props={
    value:number,
    className?:string //? sign indicates that we are making it optional
};
const Rating=({value,className}:Props)=>{
    const numFullStars=Math.floor(value);
    //for more than 0.5, it will be half star. below it, will be empty star
    const numHalfStars=Math.round(value)-Math.floor(value);//the value will be either 0 or 1
    const numEmptyStars=5-(numFullStars+numHalfStars);
    return (
<span className={`rating ${className}`}>
{
    Array.from({length:numFullStars}).map(
        (item,idx)=>(
            <FontAwesomeIcon icon={faStar} key={idx}/>
        )
    )
}
{
    Array.from({length:numHalfStars}).map(
        (item,idx)=>(
            <FontAwesomeIcon icon={faStarHalfAlt} key={idx}/>
        )
    )
}
{
    Array.from({length:numEmptyStars}).map(
        (item,idx)=>(
            <FontAwesomeIcon icon={faStarEmpty} key={idx}/>
        )
    )
}
</span>
    );
}
Rating.defaultProps={
    value:5
};
export default Rating;