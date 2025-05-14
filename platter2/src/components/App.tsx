import React from "react"
import NavigationMenu from './NavigationMenu';
import Container from 'react-bootstrap/Container';
import Home from './Home';
const App=()=>{
    return(
        <>
        <NavigationMenu />
<Container>
    <Home/>
</Container>
        </>
    )
}
export default App