import React from "react"
import NavigationMenu from './NavigationMenu';
import Container from 'react-bootstrap/Container';
import Home from './Home';
import About from "./About";
import imageUrls from "../data/image-sources";
import LoadingIndicator from "./common/Loadingindicator";
import Rating from "./common/Rating"
import RestaurantsListItem from "./restaurants-list/RestaurantsListItem";
import IRestaurant from "../models/IRestaurant";
const restaurant:IRestaurant={
"id": 1,
    "name": "Mad About Pizza",
    "description": "Delicious pizzas baked in wood-fired oven. We serve authentic Italian varieties, classic American pizzas, and desi ones too!",
    "cuisines": [
      "Italian",
      "American",
      "Fusion"
    ],
    "opens": "11:00",
    "closes": "23:30",
    "rating": 4.1,
    "numRatings": 125,
    "costForTwo": 600,
    "imageUrl": "/images/restaurants/mad-about-pizza/restaurant.jpg"
}
const App=()=>{
    return(
        <>
        <NavigationMenu />
<Container>
    {/*<Home/>*/}
    {/*<About imageUrls={imageUrls}/>*/}
{/*<LoadingIndicator size="large" message="hiiiiii..loading"/>*/}
{/*<Rating value={3.35} className="me-2"/>
3.35(123 ratings in total)*/}
<RestaurantsListItem restaurant={restaurant}/>
</Container>
        </>
    )
}
export default App