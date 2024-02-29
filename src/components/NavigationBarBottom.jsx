import './NavigationBar.css'
import { useState } from 'react'
import { Link } from "react-router-dom";

const NavigationBarBottom = (() => {
    return (
    <div className="navigation-bar-bottom">
        <div className='navigation-item'> 
            <Link to='credits'> credits </Link>
        </div>
        <div className='navigation-item'> 
            <Link to='impressum'> impressum </Link>
        </div>
    </div>
    )
})


export default NavigationBarBottom