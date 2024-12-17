import React from "react";
import SlideShow from "./constructor-class";
import Slide from './slide-element';
function App() {

  return (  
    <SlideShow initialActiveSlide={0}>
      <Slide heading='first' showDivider={true} showTotal={false}>
<p>hi</p>
      </Slide>
      <Slide heading='second' showDivider={false} showTotal={true}>
      <p>hello</p>
      </Slide>
      <Slide heading='third'>
      <p>hello</p>
      </Slide>
      <Slide heading='forth' showDivider={false} showTotal>
      <p>hello</p>
      </Slide>
    </SlideShow>
  )
}

export default App;