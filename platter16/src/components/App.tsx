import React from "react"
import { Routes,Route } from 'react-router-dom';
import NavigationMenu from './NavigationMenu';
import Container from 'react-bootstrap/Container';
import Home from './Home';
import About from "./About";
import RestaurantsList from "./restaurants-list/RestaurantsList";
import RestaurantDetails from "./restaurant-details/RestaurantDetails";
const App=()=>{
    return(
        <>
        <NavigationMenu />
<Container>
    <Routes>
                    <Route path="/about" Component={About} />
                    <Route path="/restaurants/:id" Component={RestaurantDetails} />
                    <Route path="/restaurants" Component={RestaurantsList} />
                    <Route path="/" Component={Home} />
                </Routes>
</Container>
        </>
    )
}
export default App