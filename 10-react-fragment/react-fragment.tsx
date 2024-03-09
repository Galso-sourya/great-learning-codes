import React,{Fragment}from 'react';
const fruitEl=(
    <Fragment>
<li>apples</li>
<li>oranges</li>
    </Fragment>
);
const veggiesEl=(
    <Fragment>
<li>potatoes</li>
<li>onions</li>
    </Fragment>
);
const shoppingListEl=(
<ul>
    {fruitEl}
    {veggiesEl}
</ul>
);
export default shoppingListEl;