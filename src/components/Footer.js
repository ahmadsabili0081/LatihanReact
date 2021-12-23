import '../components/css/style.css'
import Logo from '../components/images/Logo.svg'
const Footer  = () => {
    return (
        <footer>
            <div className='container__footer'>
                <div className='row__footer'>
                    <div className='box__footer'>
                        <img src={Logo} alt='logo__footer'/>
                        <span>With IndieBrew, get personal feeds from
                            resources all around the web, including
                            Reddit, Hackernews, and much more.</span>
                    </div>
                    <div className='box__list__footer'>
                        <h3>Sitemap</h3>
                        <ul>
                            <li><a href={'#'}>Homepage</a></li>
                            <li><a href={'#'}>Pricing</a></li>
                        </ul>
                    </div>
                    <div className='box__list__footer'>
                        <h3>Resources</h3>
                        <ul>
                            <li><a href={'#'}>Support</a></li>
                            <li><a href={'#'}>Contact</a></li>
                            <li><a href={'#'}>FAQ</a></li>
                        </ul>
                    </div>
                    <div className='box__list__footer'>
                        <h3>Company</h3>
                        <ul>
                            <li><a href={'#'}>About</a></li>
                            <li><a href={'#'}>Customers</a></li>
                            <li><a href={'#'}>Blog</a></li>
                        </ul>
                    </div>
                    <div className='box__list__footer'>
                        <h3>Portofolios</h3>
                        <ul>
                            <li><a href={'#'}>HackerNews</a></li>
                            <li><a href={'#'}>Reddit</a></li>
                            <li><a href={'#'}>Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;