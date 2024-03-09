import React,{useState,useCallback} from 'react';
import ThemeContext from './ThemeContext';
import SlideShowTitle from './components/SlideShowTitle-class';
import SlideShow from './components/SlideShow-class';
import Slide from './components/Slide-class';
import './SlideShow-demo.css';
const App=()=>{//common ancestor is app
    const [theme,setTheme]=useState<'light' | 'dark'>('light');//initial value is light
    const toggleTheme=useCallback(()=>setTheme(theme=>theme==='light'?'dark':'light'),[setTheme]);
    //if it is light,
    //it will become dark and vice versa
    return(
        <>
        <ThemeContext.Provider value={{theme,toggleTheme}}>
        <SlideShowTitle title="Introduction to React"/>
        <SlideShow theme={theme}>
            <Slide heading="Styling in React">
<ul style={{marginTop:'1em'}}>
<li>a</li>
<li>aa</li>
</ul>
            </Slide>
            <Slide heading="Component Props">
<p>b</p>
            </Slide>
        </SlideShow></ThemeContext.Provider>
        </>
    );
}