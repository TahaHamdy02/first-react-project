import HowItWorksteps01 from '../../assets/images/work/work-steps-1.png'
import HowItWorksteps02 from '../../assets/images/work/work-steps-2.png'
import HowItWorksteps03 from '../../assets/images/work/work-steps-3.png'
import { IMG, ND } from '../../Components/Container/Sections/compo/ComponentIndex'
const HowItWorksData = [
    { id: "HowItWorksteps01", img: HowItWorksteps01, class: 'howitworkstep__imgs', title: "Business Analysis", Text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel' },
    { id: "HowItWorksteps02", img: HowItWorksteps02, class: 'howitworkstep__imgs', title: "Architecture", Text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel' },
    { id: "HowItWorksteps03", img: HowItWorksteps03, class: 'howitworkstep__imgs', title: "Developement", Text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel' },
]

const HowItWorkStepsCards = HowItWorksData.map(card => {
    return (
        <ND class='howitworkstepcard' key={card.id}>
            <ND class='howitworkstep__imgs'>
                <IMG i={card.img} a={card.id} c={card.class} />
            </ND>
            <ND class='howitworkstep__info'>
                <h2 className='howitworkstep__title'>{card.title}</h2>
                <p className='howitworkstep__text'>{card.Text}</p>
            </ND>
        </ND>
    )
})

export default HowItWorkStepsCards