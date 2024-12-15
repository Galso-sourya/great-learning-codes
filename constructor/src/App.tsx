import React from "react";
import SlideShow from "./constructor-class";
import Slide from './slide-element';
function App() {

  return (  
    <SlideShow initialActiveSlide={0}>
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