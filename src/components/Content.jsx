
import './Content.css'
import Wald from './Forest'
import Horses from './Horses'
import Cows from './Cows'
import Field from './Field'
import AboutUs from './AboutUs'


const Content = ({  horsesRef, cowsRef, fieldRef, forestRef, aboutRef }) => {
    return (
        <div>
            <div ref={horsesRef}>
                <Horses />
            </div>

            <div ref={cowsRef}>
                <Cows />
            </div>
            
            <div ref={fieldRef}>
                <Field />
            </div>

            <div ref={forestRef}>
                <Wald />
            </div>

            <div ref={aboutRef}>
                <AboutUs />
            </div>
        </div>
    )
}

export default Content;