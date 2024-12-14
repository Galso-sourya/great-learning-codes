import React from "react";
import SlideShow from "./State-function";
import Slide from './slide-element';
function App() {

  return (  
    <SlideShow>
      <Slide heading='first'>
<p>hi</p>
      </Slide>
      <Slide heading='second'>
      <p>hello</p>
      </Slide>
    </SlideShow>
  )
}

export default App;