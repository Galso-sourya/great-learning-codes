import React from 'react';
import SlideShow from './components/SlideShow';
import Slide from './components/Slide';
import './SlideShow-demo.css';
export default(
    //<SlideShow>
<SlideShow defaultActiveSlide={0}>
    <Slide heading="Styling in React" showDivider={false} showTotal={false}>
<ul style={{marginTop:'1em'}}>
<li>a</li>
<li>b</li>
</ul>
    </Slide>
    <Slide heading="Component Props" showDivider={true} showTotal={true}>
<p>rrrrrr</p>
    </Slide>
    <Slide heading="Component State" showDivider={true} showTotal>
<p>rrrrrr</p>
    </Slide>
    <Slide heading="thank you">
<p>rrr</p>
    </Slide>
</SlideShow>
);