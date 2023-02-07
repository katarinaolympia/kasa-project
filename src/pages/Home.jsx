import homePicture from '../utils/assets/banner_home.jpg'
import '../utils/style/banner.css'
import Cards from '../components/Cards'


function Home(banner) {
    return (
        <div key={banner}>

            <div className='banner_container'>
                <img className='banner_picture' src={homePicture} alt='banner page d/accueil' />
                <h1 className='title'>Chez vous, partout et ailleurs</h1>
            </div>

            <Cards />
            
        </div>

    )
}


export default Home