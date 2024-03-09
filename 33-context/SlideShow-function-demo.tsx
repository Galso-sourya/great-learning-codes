import React,{useState,useCallback} from 'react';
import ThemeContext from './ThemeContext';
import SlideShowTitle from './components/SlideShowTitle-function';
import SlideShow from './components/SlideShow-function';
import Slide from './components/Slide-function';
import './SlideShow-demo.css';
const App=()=>{
    const [theme,setTheme]=useState<'light' | 'dark'>('light');//initial value is light
    const toggleTheme=useCallback(()=>setTheme(theme=>theme==='light'?'dark':'light'),[setTheme]);
    return(
        <>
        <ThemeContext.Provider value={{theme,toggleTheme}}>
        <SlideShowTitle title="Introduction to React"/>
        <SlideShow>
            <Slide heading="Styling in React">
<ul style={{marginTop:'1em'}}>
<li>a</li>
<li>aa</li>
</ul>
            </Slide>
            <Slide heading="Component Props">
<p>b</p>
            </Slide>
        </SlideShow>
        </ThemeContext.Provider>
        </>
    );
};
export default <App/>