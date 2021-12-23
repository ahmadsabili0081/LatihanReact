import '../components/css/style.css'
import imgBanner from '../components/images/User Avatars.svg'
import imgHero from '../components/images/Feed Mockup.png'
const Banner = () => {
    return (
        <div className='banner__IndieBrew'>
            <div className='container__banner'>
                <div className='row__banner__IndieBrew'>
                    <div className='box__banner__IndieBrew'>
                        <h1 className='Title__banner'>Your weekly personal feed digest.</h1>
                        <span>With IndieBrew, get personal feeds from resources all around the web, 
                            including Reddit, HackerNews, IndieHackers, and much more.</span>
                            <button className='btn__banner'><a href={''}>Get Started - it's free</a></button>
                        <img src={imgBanner} alt='User avatars'/>
                       <p>Join <span className='inside'>32,642</span> IndieBrewers in curating their personal digest.</p>
                    </div>
                    <div className='box__banner__IndieBrew__img'>
                        <img src={imgHero} alt='Ini sebuah gambar hero'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;