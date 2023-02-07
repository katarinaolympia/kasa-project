import React, { useState } from "react"
import { useParams } from "react-router-dom"
import apartments from '../../apartments.json'
import arrow from '../../utils/assets/arrow_collapse.svg'
import '../../utils/style/collapse.css'


function Collapse(collapse) {

    const { apartmentId } = useParams()
    const apartment = apartments.find((app) => app.id === apartmentId)

    const { description, equipments } = apartment

    const [ isOpenOne, setIsOpenOne ] = useState(false)

    const [ isOpenTwo, setIsOpenTwo ] = useState(false)

    return (

        <div key={collapse} className='collapse_container'>

        <details>

            <summary className='summary' onClick={() => setIsOpenOne(!isOpenOne)}>

                <div className='collapse_title'> Description</div> 
                <img src={arrow} className={isOpenOne ? 'arrow_close' : 'arrow_open'}/>
            
            </summary>

            <div className='collapse_content'>{description}</div>

        </details>
        

        <details>

             <summary className='summary' onClick={() => setIsOpenTwo(!isOpenTwo)}>

                <div className='collapse_title'>Équipements</div>  
                <img src={arrow} className={isOpenTwo ? 'arrow_close' : 'arrow_open'}/> 

            </summary>


            <div key={equipments} className='list_content'>

             {equipments.map((equipment, index) => {

                return (

                    <li key={index}>{equipment}</li>

                )

             })}

            </div>

        </details>
    
    </div>
    )

}

export default Collapse