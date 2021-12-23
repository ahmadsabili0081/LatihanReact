import '../components/css/style.css'
import Heroo from '../components/images/SocialMediaIcons.png'
const Hero = () => {
    return(
        <div className='hero__IndieBrew'>
           <div className='container__hero__IndieBrew'>
               <div className='row__hero__IndieBrew'>
                    <div className='box__hero__IndieBrew'>
                        <h1>Curate your feed from dozens of resources.</h1>
                        <span>We cover all major platforms where one could want to 
                              curate their feed from. Reddit, ProductHunt, IndieHackers, and so much more.</span>
                        <a href={'#'}>See full list of resources</a>
                    </div>
                    <div className='box__hero__img'>
                        <img src={Heroo} alt='Sosial media Icons'/>
                    </div>
               </div>
           </div>
        </div>
    )
}
export default Hero;
