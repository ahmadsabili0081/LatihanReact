import Nav from './Navbar';
import Banner from './Banner';
import Hero from './Hero';
import Hero_2 from './Hero__2';
import Footer from './Footer';
import '../components/css/style.css'
const IndieBrew = () => {
    return (
        <div className="container">
            <Nav></Nav>
            <Banner/>
            <Hero/>
            <Hero_2/>
            <Footer/>
        </div>
    )
}
export default IndieBrew;