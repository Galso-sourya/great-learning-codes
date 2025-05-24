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
import RestaurantsList from "./restaurants-list/RestaurantsList";
import RestaurantDetails from "./restaurant-details/RestaurantDetails";
const App=()=>{
    return(
        <>
        <NavigationMenu />
<Container>
    {/*<Home/>*/}
    {/*<About/>*/}
{/*<LoadingIndicator size="large" message="hiiiiii..loading"/>*/}
{/*<Rating value={3.35} className="me-2"/>
3.35(123 ratings in total)*/}
{/*<RestaurantsListItem restaurant={restaurant}/>*/}
{/*<RestaurantsList/>*/}
<RestaurantDetails/>
</Container>
        </>
    )
}
export default App