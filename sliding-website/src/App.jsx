import { useEffect, useState } from "react"
import Background from "./Components/Background/Background"
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"

const App=()=>{
  let heroData=[
    {text1:"dive into",text2:"what you love"},
    {text1:"keep your",text2:"passion"},
    {text1:"go for your",text2:"passion"}
  ]
  const [heroCount,setHeroCount]=useState(2)
  //to play or pause the video
  const [playStatus,setPlayStatus]=useState(false)
  useEffect(()=>{//this autometically change the background after every 3 sec
    setInterval(()=>{
setHeroCount((count)=>{return count===2?0:count+1})
    },9000)
  },[])
  return(
    <div>
<Background playStatus={playStatus} heroCount={heroCount}/>{/*we are passing 2 props */}
<Navbar/>
<Hero
setPlayStatus={setPlayStatus}
heroData={heroData[heroCount]}
heroCount={heroCount}
setHeroCount={setHeroCount}
playStatus={playStatus}
/>
    </div>
  )
}
export default App