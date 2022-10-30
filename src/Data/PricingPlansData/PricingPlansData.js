import { ND, IMG } from '../../Components/Container/Sections/compo/ComponentIndex'
import { FaCheck } from 'react-icons/fa'
import PricingPlan01 from "../../assets/images/hos/hosting-advanced.png";
import PricingPlan02 from "../../assets/images/hos/hosting-basic.png";
import PricingPlan03 from "../../assets/images/hos/hosting-professional.png";
const PricingPlanCardsData = [
    { id: 'PricingPlan02', type: 'Basic', img: PricingPlan02, price: '$15', ad1: '10GB HDD Space', ad2: '5 Email Addresses', ad3: '2 Subdomains', ad4: '4 Databases', ad5: 'Basic Support' },
    { id: 'PricingPlan01', type: 'Advanced', img: PricingPlan01, price: '$25', ad1: '20GB HDD Space', ad2: '10 Email Addresses', ad3: '5 Subdomains', ad4: '8 Databases', ad5: 'Advanced Support' },
    { id: 'PricingPlan03', type: 'professional', img: PricingPlan03, price: '$50', ad1: '100GB HDD Space', ad2: '15 Email Addresses', ad3: '20 Subdomains', ad4: '16 Databases', ad5: 'professional Support' },
]
const PricingPlanCards = PricingPlanCardsData.map(card => {
    return (
        <ND class='PricingPlan__card' key={card.id}>
            <ND class='PricingPlan__type'>
                <h2>{card.type}</h2>
            </ND>
            <ND class='PricingPlan__imgs'>
                <IMG i={card.img} a={card.id} c='PricingPlan__img' />
            </ND>
            <ND class='PricingPlan__price'>
                <h1>{card.price}</h1>
                <h3>Per Month</h3>
            </ND>
            <ND class='PricingPlan__info'>
                <li className="info"><FaCheck />{card.ad1}</li>
                <li className="info"><FaCheck />{card.ad2}</li>
                <li className="info"><FaCheck />{card.ad3}</li>
                <li className="info"><FaCheck />{card.ad4}</li>
                <li className="info"><FaCheck />{card.ad5}</li>
            </ND>
            <ND class='PricingPlan__btn'>
                <button className="btn">Choose Plan</button>
            </ND>
        </ND>
    )
})
export default PricingPlanCards