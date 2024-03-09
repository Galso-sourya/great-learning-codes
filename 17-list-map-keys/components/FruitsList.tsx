import React from 'react';
const FruitsList=()=>{
    const fruits=[
        'apples',
        'oranges',
        'bananas'
    ];
    return(
        <ul>
            {
                fruits.map(
                    (fruit,idx)=>(
                        <li key={idx}>{fruit}</li>
                    )
                )
            }
        </ul>
    )
};
export default FruitsList;