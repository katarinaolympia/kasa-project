import React from "react"
import { useParams } from "react-router-dom"
import apartments from '../apartments.json'
import '../utils/style/apartmentCard.css'

// Components
import Slider from '../components/Slider'
import Tags from '../components/Tags'
import StarRating from "../components/Star rating"
import Collapse from '../components/Collapse'
import PageNotFound from "../components/Page Not Found"

 
function ApartmentCard(card) {

    const { apartmentId } = useParams()
    const apartment = apartments.find((app) => app.id === apartmentId)

    if(apartment === undefined) {

        return document.location.href='/*'

    }

    const { title, pictures, location, description, host, equipments } = apartment

    return (

        <div key={card} className='card_container'>

            <Slider />

            <div className='title_container'>
                <h2 className='card_title'>{title}</h2>
                <div className='card_location'>{location}</div>
            </div>

            <Tags />

            <div className="host_container">
                <div className="host_profile">
                <div className='host_name'>{host.name}</div>
                <img src={host.picture} alt='' className='host_picture'/>
                </div>
                <StarRating />
            </div>

            

            <Collapse />

        </div>
    )
}

export default ApartmentCard