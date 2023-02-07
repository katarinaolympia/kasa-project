import React from "react"
import logo from '../../utils/assets/footer.svg'
import baseline from '../../utils/assets/footer_baseline.svg'
import '../../utils/style/footer.css'


function Footer(footer) {

    return (

        <div key={footer}>

            <div className='footer_container'>

                <div className='footer_elements'>

                <img src={logo} alt='Logo Kasa' className='footer_logo'/>

                <img src={baseline} alt='' className='footer_baseline'/>

                </div>
                
            
            </div>

        </div>
    )

}

export default Footer