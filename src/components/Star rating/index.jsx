import React, { useState } from "react"
import apartments from '../../apartments.json'
import { useParams } from "react-router-dom"
import '../../utils/style/apartmentCard.css'
import activeStar from '../../utils/assets/star_active.svg'
import inactiveStar from '../../utils/assets/star_inactive.svg'



function StarRating (stars) {

    const { apartmentId } = useParams()
    const apartment = apartments.find((app) => app.id === apartmentId)

    const { rating } = apartment

    const [isActive, setIsActive] = useState([1,2,3,4,5])

    return (

        <div key={stars} className='stars_container'>

            {isActive.map((star, index) => {

                return (

                    <div key={star}>

                    {rating > index ? <img src={activeStar} className='stars'/> : <img src={inactiveStar} className='stars'/> }

                    </div>

                )

            })}

        </div>
    )

}

export default StarRating