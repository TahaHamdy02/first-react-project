import './ServicesData.css'
import { FaUserShield, FaTools, FaMapMarkedAlt, FaLaptopCode, FaPallet, FaBullhorn } from 'react-icons/fa'
const ServicesCardData = [
    { id: 'servicecard01', icon: <FaUserShield />, title: 'Security' },
    { id: 'servicecard02', icon: <FaTools />, title: 'Fixing Issues' },
    { id: 'servicecard03', icon: <FaMapMarkedAlt />, title: 'Location' },
    { id: 'servicecard04', icon: <FaLaptopCode />, title: 'Coding' },
    { id: 'servicecard05', icon: <FaPallet />, title: 'Design System' },
    { id: 'servicecard06', icon: <FaBullhorn />, title: 'Marketing' },
]

const ServicesData = ServicesCardData.map(card => {
    return (
        <div className="service__card" key={card.id} id={card.id}>
            <div className="service__icon">{card.icon}</div>
            <div className="service__title"><h3>{card.title}</h3></div>
            <div className="service__info"><a href="/#">Details</a></div>
        </div>
    )
})

export default ServicesData