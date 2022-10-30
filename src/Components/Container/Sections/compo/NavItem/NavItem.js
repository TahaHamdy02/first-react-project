import './NavItem.css'
// import '../Header/HScript'
const NavItem = (props) => {
    return (
        <li className='nav__item'>
            {props.children}
        </li>
    )
}

export default NavItem

