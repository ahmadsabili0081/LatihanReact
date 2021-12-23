import '../components/css/style.css'
import HeroImg2 from '../components/images/Phone Mockup.png'
const Hero_2 = () => {
    return (
        <div className='Hero__IndieBrew__2'>
            <div className='container__Hero__IndieBrew__2'>
                <div className='row__Hero__IndieBrew__2'>
                    <div className='box__Hero__IndieBrew__2__img'>
                        <img src={HeroImg2} alt='Phone Mockup' />
                    </div>
                    <div className='box__Hero__IndieBrew__2__text'>
                        <h1>Access your feed from the comfort of your phone.</h1>
                        <span>With native apps for both iOS and Android, accessing your curated content has never been easier.</span>
                        <a href={'#'}>Sign up for the waitlsi</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero_2;