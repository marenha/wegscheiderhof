import './NavigationBar.css'
import { useState } from 'react'
import { Link } from "react-router-dom";

const NavigationBarBottom = (() => {
    return (
    <div className="navigation-bar-bottom">
        <div className='navigation-item'> 
            <a href="/licenses.html"> Open source </a>
        </div>
        <div className='navigation-item'> 
            <Link to='impressum'> Impressum </Link>
        </div>
    </div>
    )
})


export default NavigationBarBottom