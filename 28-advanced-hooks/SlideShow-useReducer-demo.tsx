import React from 'react';
import SlideShow from './components/SlideShow-function';
import Slide from './components/Slide-function';
import './SlideShow-demo.css';
export default(
<SlideShow>
    <Slide heading="Styling in React" page={{current:1,total:2}}>
        <ul className="list-unstyled" style={{marginTop:'1em'}}>
<li>a</li>
<li>b</li>
        </ul>
    </Slide>
    <Slide heading="Component Props" page={{current:2,total:2}}>
<p>c</p>
    </Slide>
</SlideShow>
);