import React, {useState} from "react"
import apartments from '../../apartments.json'
import { useParams } from "react-router-dom"
import arrowPrev from '../../utils/assets/arrow_left.svg'
import arrowNext from '../../utils/assets/arrow_right.svg'
import '../../utils/style/slider.css'

 
function Slider(slides) {

    const { apartmentId } = useParams()
    const apartment = apartments.find((app) => app.id === apartmentId)

    const { pictures } = apartment

    const [current, setCurrent] = useState(0)

    const prevSlide = () => {

        setCurrent(current === 0 ? pictures.length - 1 : current - 1)
        
    }

    const nextSlide = () => {

        setCurrent(current === pictures.length - 1 ? 0 : current + 1)

    }

    return (

        <div key={slides} className='section_container'>
 
                <img src={arrowPrev} onClick={prevSlide} className='arrow_left'/>
                <img src={arrowNext} onClick={nextSlide} className='arrow_right'/>
            
        {pictures.map((slide, index) => {

            return (
                
                    
                <div key={slide} className={index === current ? 'slide_active' : 'slides'} >
                    
                    {index === current && (<img src={slide} alt='Apartment images' className='slides_pictures'/>)}
                    
                    <div className='slides_index'>{current + 1} / {pictures.length}</div>
                   
                </div>
               
            )

        })}

        </div>

    )

}

export default Slider