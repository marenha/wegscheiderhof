import './App.css'
import NavigationBarTop from './components/NavigationBarTop'
import NavigationBarBottom from './components/NavigationBarBottom'
import Content from './components/Content'
import React, { useRef } from 'react';

function App() {
  const fieldRef = useRef(null);
  const forestRef = useRef(null);
  const horsesRef = useRef(null);
  const cowsRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollCallback = (e) => {
    e.target.id == "forest_buttom" && forestRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
    e.target.id == "cows_buttom" && cowsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
    e.target.id == "field_buttom" && fieldRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
    e.target.id == "horses_buttom" && horsesRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
    e.target.id == "about_buttom" && aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
 }

  return (
    <>
    <div >
      <div className="parallax">  </div>
  
      <NavigationBarTop scrollCallback={scrollCallback} />
      
      <Content 
        horsesRef={horsesRef} 
        cowsRef={cowsRef} 
        fieldRef={fieldRef} 
        forestRef={forestRef}
        aboutRef={aboutRef}
      />
      <NavigationBarBottom />
    </div>
    </>
  )
}

export default App
