import './Works.css'
import { MT, MS, ND, SC, IMG } from '../compo/ComponentIndex'
import HowItWorks01 from '../../../../assets/images/work/work-steps.png'
import HowItWorkStepsCards from '../../../../Data/WorksData/WorksData'
const Works = () => {
    return (
        <MS class='HowItWorks' Uniq='HowItWorks'>
            <MT>How It Works ?</MT>
            <SC CCS='HowItWorks__container container grid'>
                <ND class='left'>
                    <ND class='HowItWorks__imgs'>
                        <IMG i={HowItWorks01} a="HowItWorks" c="HowItWorks__img" />
                    </ND>
                </ND>
                <ND class='right'>
                    {HowItWorkStepsCards}
                </ND>
            </SC>
        </MS>
    )
}

export default Works