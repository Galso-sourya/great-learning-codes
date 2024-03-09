import React from 'react';
import SlideShow from './components/SlideShow-function';
import Slide from './components/Slide-class';
import './SlideShow-demo.css';
export default(
<SlideShow>
    <Slide heading="Styling in React">
<ul style={{marginTop:'1em'}}>
<li>a</li>
<li>b</li>
</ul>
    </Slide>
    <Slide heading="Component Props">
<p>rrrrrr</p>
    </Slide>
</SlideShow>
);