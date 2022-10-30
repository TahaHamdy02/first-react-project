import './NavLink.css'
import { Link } from 'react-router-dom'
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
    document.querySelector('#drop__container').classList.remove('show-drop')
    document.getElementById('fa-chevron-left').classList.remove('i-downY')
    setTimeout(() => {
        document.querySelector('#nav__list').classList.remove('show-menu')
    }, 400);

}
navLink.forEach(l => l.addEventListener('click', linkAction));

const NavLink = (props) => {
    return (
        <Link to={props.link} onClick={linkAction} className="nav__link">
            {props.children}
        </Link>

    )
}


export default NavLink
