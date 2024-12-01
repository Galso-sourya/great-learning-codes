import React from 'react';
import ReactDOM from 'react-dom';
import smallFragment from './react-fragment/react-fragment';
import functionComponent from './component/function/slide-element';
const el=(
<h1>learning react</h1>
);
ReactDOM.render(el,document.getElementById('root'));
ReactDOM.render(smallFragment,document.getElementById('fragment'));
ReactDOM.render(functionComponent,document.getElementById('fComponent'));