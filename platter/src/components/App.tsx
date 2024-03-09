import React from 'react';
import NavigationMenu from './NavigationMenu';
import Container from 'react-bootstrap/Container';
import Home from './Home';
import About from './About';
import RestaurantsListItem from './restaurants-list/RestaurantsListItem';
//import IRestaurant from '../models/IRestaurant';
import RestaurantsList from './restaurants-list/RestaurantsList';
import RestaurantDetails from './restaurant-details/RestaurantDetails';
//import AddMenuItem from '../add-menu-item/AddMenuItem';
import {Route,Switch} from 'react-router-dom';
const App=()=>{
    return(
        <span className="rating">{/*instead of using fragment,we are using span */}
        <NavigationMenu/>
        <Container>
            {/*this is a comment */}
            <Switch><Route path="/about" component={About}/>
        
        <Route path="/restaurants/:id" component={RestaurantDetails}/>
        <Route path="/restaurants" component={RestaurantsList}/>
        <Route path="/" component={Home}/>
            {/*<LoadingIndicator size="large" message="please wait......."/>*/}
{/*<Rating value={3.75} className="me-2"/>3.75 (120 ratings)*/}
{/*<RestaurantsListItem restaurant={restaurant}/>*/}
{/*<RestaurantsList/>*/}
{/*<RestaurantDetails/>*/}
<AddMenuItem id={1}/>
</Switch>
        </Container>
        </span>
        
    );
};
export default App;
//to install bootstrap-
//npm install react-bootstrap@next bootstrap@5.0.2
//to install fontawesome related-
//npm i --save @fortawesome/fontawesome-svg-core
//npm install --save @fortawesome/free-solid-svg-icons
//npm install --save @fortawesome/react-fontawesome
//npm i @fortawesome/free-regular-svg-icons
//npm i @fortawesome/fontawesome-free