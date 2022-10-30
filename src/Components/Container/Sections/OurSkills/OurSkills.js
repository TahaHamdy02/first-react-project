import './OurSkills.css'
import skills01 from '../../../../assets/images/skill/skills.png'
import OurSkillsData from '../../../../Data/OurSkillsData/OurSkillsData'
import { MT, MS, ND, SC, IMG } from '../compo/ComponentIndex'


const OurSkills = () => {
    return (
        <MS class='OurSkills' Uniq='OurSkills'>
            <MT>Our Skills </MT>
            <SC CCS='ourskills__container container grid'>
                <ND class='left'>
                    <ND class="ourskills__imgs">
                        <IMG i={skills01} a='skills' c='ourskill__img' />
                    </ND>
                </ND>
                <ND class='right'>{OurSkillsData}</ND>
            </SC>
        </MS>
    )
}

export default OurSkills
