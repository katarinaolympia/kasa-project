import React, { useState } from "react"
import arrow from '../../utils/assets/arrow_collapse.svg'
import '../../utils/style/collapse_large.css'


function CollapseLarge(collapseLarge) {

    const [ isOpenOne, setIsOpenOne ] = useState(false)

    const [ isOpenTwo, setIsOpenTwo ] = useState(false)

    const [ isOpenThree, setIsOpenThree ] = useState(false)

    const [ isOpenFour, setIsOpenFour ] = useState(false)


    return (

        <div key={collapseLarge} className='large_collapse_container'>

            <details>

                <summary className='large_summary' onClick={() => setIsOpenOne(!isOpenOne)}>

                    <div className='large_collapse_title'>Fiabilité</div> 
                    <img src={arrow} className={isOpenOne ? 'arrow_close' : 'arrow_open'}/>

                </summary>

                <div className='large_collapse_content'>Les annonces postées sur Kasa garantissent
                une fiabilité totale. Les photos sont conformes aux logements, et toutes les
                informations sont régulièrement vérifiées  par nos équipes.</div>

            </details>


            <details>

                <summary className='large_summary' onClick={() => setIsOpenTwo(!isOpenTwo)}>

                    <div className='large_collapse_title'>Respect</div> 
                    <img src={arrow} className={isOpenTwo ? 'arrow_close' : 'arrow_open'}/>

                </summary>

                <div className='large_collapse_content'>La bienveillance fait partie des valeurs
                 fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du
                  voisinage entraînera une exclusion de notre plateforme.</div>

            </details>            


            <details>

                <summary className='large_summary' onClick={() => setIsOpenThree(!isOpenThree)}>

                    <div className='large_collapse_title'>Service</div> 
                    <img src={arrow} className={isOpenThree ? 'arrow_close' : 'arrow_open'}/>

                </summary>

                <div className='large_collapse_content'>Nos équipes se tiennent à votre disposition
                 pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous
                  avez la moindre question.</div>

            </details>      


            <details>

                <summary className='large_summary' onClick={() => setIsOpenFour(!isOpenFour)}>

                    <div className='large_collapse_title'>Sécurité</div> 
                    <img src={arrow} className={isOpenFour? 'arrow_close' : 'arrow_open'}/>

                </summary>

                <div className='large_collapse_content'>La sécurité est la priorité de Kasa. 
                Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond
                 aux critères de sécurité établis par nos services. En laissant une note aussi
                  bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
                   les standards sont bien respectés. Nous organisons également des ateliers
                    sur la sécurité domestique pour nos hôtes.</div>

            </details>   

        </div>

    )

}

export default CollapseLarge