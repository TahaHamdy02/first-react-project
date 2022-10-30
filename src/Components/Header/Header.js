import './Header.css';
import { Link } from 'react-router-dom';
import NavItem from '../Container/Sections/compo/NavItem/NavItem';
import NavLink from '../Container/Sections/compo/NavLink/NavLink';
import logo from '../../assets/images/logo.png'
import MenuHeaderPhoto from '../../assets/images/megamenu.png'
import Menu from '../../assets/images/header/times.png'
import Bars from '../../assets/images/header/bars.png'
import { FaPercent, FaChevronLeft, FaUser, FaBuilding, FaCheckCircle, FaClipboard, FaCalendar, FaServer, FaPlayCircle, FaChartBar } from 'react-icons/fa';

const navToggle = () => {
    document.querySelector('#nav__list').classList.add('show-menu')
}
const navClose = () => {
    document.querySelector('#nav__list').classList.remove('show-menu')
}
const ShowHideDropMenu = () => {

    document.querySelector('#drop__container').classList.toggle('show-drop')
    document.getElementById('fa-chevron-left').classList.toggle('i-downY')
};

const Header = (props) => {
    return (
        <header className="header" id="header">
            <nav className="nav container">
                <Link to="/Home" className="nav__logo flex">
                    <img src={logo} alt="" />
                </Link>
                <div className="nav__menu">
                    <ul className="nav__list flex flex__direction" id='nav__list'>
                        <NavItem><NavLink link='/Articles'>Articles </NavLink></NavItem>
                        <NavItem><NavLink link='/Gallery'>Gallery </NavLink></NavItem>
                        <NavItem><NavLink link='/Features'>Features </NavLink> </NavItem>
                        <NavItem>
                            <span onClick={ShowHideDropMenu} className="other__link" id='down-list'>
                                Other Links  <span><FaChevronLeft className='i-down' id='fa-chevron-left' /></span>
                            </span>
                            <div className="nav__drop">
                                <div className="drop__container flex" id='drop__container'>
                                    <div className="left">
                                        <img src={MenuHeaderPhoto} alt="" />
                                    </div>
                                    <ul className="right flex">
                                        <div className="five one flex flex__direction">
                                            <NavItem><NavLink link='/Testimonials'><FaPercent /> Testimonials </NavLink></NavItem>
                                            <NavItem><NavLink link='/TeamMembers'><FaUser /> Team Members </NavLink></NavItem>
                                            <NavItem><NavLink link='/Services'><FaBuilding /> Services </NavLink></NavItem>
                                            <NavItem><NavLink link='/OurSkills'><FaCheckCircle /> Our Skills</NavLink></NavItem>
                                            <NavItem><NavLink link='/Works'><FaClipboard /> How It Works</NavLink></NavItem>
                                        </div>
                                        <div className="five two flex flex__direction">
                                            <NavItem><NavLink link='/LatestEvents'><FaCalendar /> Events</NavLink></NavItem>
                                            <NavItem><NavLink link='/PricingPlans'><FaServer /> Pricing Plans</NavLink></NavItem>
                                            <NavItem><NavLink link='/TopVideos'><FaPlayCircle /> Top Videos</NavLink></NavItem>
                                            <NavItem><NavLink link='/Stats'><FaChartBar /> Status</NavLink></NavItem>
                                            <NavItem><NavLink link='/Discount'><FaPercent /> Request Discount</NavLink></NavItem>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </NavItem>
                        <div className="nav__close" id='nav__close' onClick={navClose}><img src={Menu} alt="." /></div>
                    </ul>
                    <div className="nav__toggle" id='nav__toggle' onClick={navToggle}> <img src={Bars} alt="." /></div>
                </div>
            </nav>
        </header>

    )
}

export default Header

