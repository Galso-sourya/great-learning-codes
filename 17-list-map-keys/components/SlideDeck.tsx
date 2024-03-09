import React,{ReactElement} from 'react';
import Slide from './Slide';
type SlideType={
    id:number,
    heading:string,
    body:ReactElement
}
type Props={
    slides:SlideType[]
};
const SlideDeck=({slides}:Props)=>{
return(
    <>
    {
        slides.map(
            ({id,heading,body},idx)=>(
<Slide heading={heading}
page={{current:idx+1,total:slides.length}}
key={id}
>
{body}
</Slide>
            )
        )
    }
    </>
)
};
export default SlideDeck;