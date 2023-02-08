import React from "react"
import apartments from '../../apartments.json'
import '../../utils/style/cards.css'
import { Link } from "react-router-dom"


function Cards(cards) {

    return (

        <section key={cards} className='cards_container'>

            {apartments.map((card, index) => {

                return (

                    <div key={`${card}-${index}`} className='flex_container'>

                    <Link to={`/apartments/${card.id}`} className='card_link'>
                
                    <img src={card.cover} alt={card.title} className='cards'/>

                    <div className='cards_title'>{card.title}</div>

                    </Link>

                    </div>
                )

            })}

        </section>
    )
}

export default Cards
