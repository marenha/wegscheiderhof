import { useState, useEffect } from 'react'

import './NavigationBar.css'

const NavigationBarTop = ({ scrollCallback }) => {
    const [navbar, setNavbar] = useState(false) 

    const changeNavBackground= () => {
        window.scrollY > 10 ? setNavbar(true) : setNavbar(false)
    }

    window.addEventListener("scroll", changeNavBackground)

    return (
    <div className={ navbar ? "navigation-bar-top active" : "navigation-bar-top"}>
        <div className='navigation-title'> 
            wegscheiderhof
        </div>
        <div className='navigation-item' id="about_buttom" onClick={scrollCallback}> 
            über uns
        </div>
        <div className='navigation-item' id="forest_buttom"  onClick={scrollCallback}> 
            wald
        </div>
        <div className='navigation-item' id="field_buttom"  onClick={scrollCallback}> 
            wiesen 
        </div>
        <div className='navigation-item' id="cows_buttom"  onClick={scrollCallback}> 
            kühe
        </div>
        <div className='navigation-item' id="horses_buttom"  onClick={scrollCallback}> 
            haflinger
        </div>
    </div>
    )
}


export default NavigationBarTop