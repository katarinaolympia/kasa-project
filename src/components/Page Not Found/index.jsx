import React from "react"
import { Link } from "react-router-dom"
import logo404 from '../../utils/assets/logo_404.jpg'
import '../../utils/style/page_404.css'


function PageNotFound(error) {


    return (

        <div key={error} className='error_container'>

            <img src={logo404} alt='Page introuvable' className='error_logo' />

            <div className='error_text'>Oups! La page que vous demandez n'existe pas.</div>

            <Link to='/' className='error_link'>Retourner sur la page d'accueil</Link>
        
        </div>
    )
}

export default PageNotFound