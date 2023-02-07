import React from "react"
import apartments from '../../apartments.json'
import { useParams } from "react-router-dom"
import '../../utils/style/apartmentCard.css'


function Tags(tag) {

    const { apartmentId } = useParams()
    const apartment = apartments.find((app) => app.id === apartmentId)

    const { tags } = apartment

    return (

        <div key={tag} className='tags_container'>

        {tags.map((index) => {

            return (

                <li key={index} className='tags'>{index}</li>
            )

        })}

        </div>
    )
}

export default Tags