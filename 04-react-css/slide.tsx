import React from 'react';
import './slide.css';
import {
    headingFinalStyle,
    headingStyle,
    textCenter,
    listUnstyle,bodyStyle
}from './slides.styles';
const el=(
<div className="slide">
<h1 style={headingFinalStyle}>syling in react</h1>
<hr/>
<ul style={{...bodyStyle,...listUnstyle}}>
<li>a</li>
</ul>
</div>
);
export default el;