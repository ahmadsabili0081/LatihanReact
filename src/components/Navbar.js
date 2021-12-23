import '../components/css/style.css'
import Logo from '../components/images/Logo.svg'
const Nav = () =>{
    return (
        <header>
           <div className='container__header'>
                <div className="logo">
                    <a href={'#'}><img src={Logo} alt='Ini adalah sebuah logo' /></a>
                </div>

                <nav className="navbar">
                    <ul className="list__item">
                        <li className="list__item__list"><a href="#">Pricing</a></li>
                        <li className="list__item__list"><a href="#">Support</a></li>
                    </ul>
                    <button className='btn__header'>Get Started - it's free</button>
                </nav>
           </div>
        </header>
    )
}
export default Nav;