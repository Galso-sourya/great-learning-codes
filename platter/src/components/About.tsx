//it is also a function component
import React,{useState,useEffect} from 'react';
import ListGroup from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink,faCode} from '@fortawesome/free-solid-svg-icons';
import ImageSource from '../models/ImageSource';
import {getImageSources} from '../services/about';
const About=()=>{//we have to pass a prop here and mention the type also
    const [imageUrls,setImageUrls]=useState<ImageSource[]>([]);
    useEffect(
()=>{
    const fetchImageSources=async()=>{
        try{
const data=await getImageSources();
setImageUrls(data);}catch(error){
alert(error.message);}
    };
    fetchImageSources();
},
[]
    );
    return(
        <main>
<section>
    <header>
        <h2>
            <FontAwesomeIcon icon={faLink}/>
        </h2>
    </header>
    <p>fffffffff</p>
    <ListGroup>
        {
            imageUrls.map(
                (imageUrl,idx)=>(
<ListGroup.Item key={imageUrl}>
    <a href={imageUrl}>{imageUrl}</a>
    </ListGroup.Item>//iterate through
                )
            )
            
        }
      
    </ListGroup>   
</section>
        </main>
    )
};
export default About;