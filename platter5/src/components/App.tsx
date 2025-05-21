import React from "react"
import NavigationMenu from './NavigationMenu';
import Container from 'react-bootstrap/Container';
import Home from './Home';
import About from "./About";
import imageUrls from "../data/image-sources";
import LoadingIndicator from "./common/Loadingindicator";
const App=()=>{
    return(
        <>
        <NavigationMenu />
<Container>
    {/*<Home/>*/}
    {/*<About imageUrls={imageUrls}/>*/}
<LoadingIndicator size="large" message="hiiiiii..loading"/>
</Container>
        </>
    )
}
export default App