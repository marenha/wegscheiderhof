import './HorseCard.css'
import { Image } from 'semantic-ui-react'
import elsa from "../assets/elsa.jpg"

const HorseCard = (() => {
    return (
        <div className="horse-card">
            <div className="horse-card-inner">
                <div className="horse-card-front">
                <img 
                    className='image-fit'
                    src={elsa}
                />
                </div>
                <div className="horse-card-back">
                <h1>Elsa, die</h1>
                <p>ist kein Pferd</p>
                <p>schläft gerne</p>
                <p>hat draußen Angst</p>
                </div>
            </div>
        </div>
    )
})

export default HorseCard;