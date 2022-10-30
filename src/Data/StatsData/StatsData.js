import { FaUser, FaCode, FaGlobeAfrica, FaRegMoneyBillAlt } from 'react-icons/fa'
import { ND } from '../../Components/Container/Sections/compo/ComponentIndex'


const StatsCardData = [
    { id: 'StatsCard01', icon: <FaUser />, Number: 150, status: 'Client' },
    { id: 'StatsCard02', icon: <FaCode />, Number: 190, status: 'Projects' },
    { id: 'StatsCard03', icon: <FaGlobeAfrica />, Number: 60, status: 'Countries' },
    { id: 'StatsCard04', icon: <FaRegMoneyBillAlt />, Number: 500, status: 'Money' },
]
const StatsCard = StatsCardData.map(card => {
    return (
        <div className='status__card' key={card.id}>
            <ND class='status__icons'>{card.icon}</ND>
            <div className='status__number' id={card.id} data-goal={card.Number}>0</div>
            <ND class='status__statu'>{card.status}</ND>
        </div>
    )
})
export default StatsCard;
