import React from "react"
import NavigationMenu from './NavigationMenu';
import Container from 'react-bootstrap/Container';
import Home from './Home';
import About from "./About";
import imageUrls from "../data/image-sources";
import LoadingIndicator from "./common/Loadingindicator";
import Rating from "./common/Rating"
const App=()=>{
    return(
        <>
        <NavigationMenu />
<Container>
    {/*<Home/>*/}
    {/*<About imageUrls={imageUrls}/>*/}
{/*<LoadingIndicator size="large" message="hiiiiii..loading"/>*/}
<Rating value={3.35} className="me-2"/>
3.35(123 ratings in total)
</Container>
        </>
    )
}
export default App