import React from 'react'
import banner from '../utils/assets/banner_APropos.jpg'
import '../utils/style/banner.css'
import CollapseLarge from '../components/Collapse large'

function APropos() {

    return (

        <div >

            <div className='banner_container'>

            <img className='banner_picture' src={banner} alt='banner à propos' />
            
            </div>
           
           <CollapseLarge />

        </div>

    )

}

export default APropos