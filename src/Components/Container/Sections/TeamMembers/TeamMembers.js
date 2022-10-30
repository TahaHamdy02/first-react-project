import './TeamMembers.css'
import MainTitle from '../compo/MainTitle/MainTitle'
import TeamMembersCard from '../../../../Data/TeamMembersData/TeamMembers'

import Carousel from '../../../../assets/Carousel/Carousel'
const TeamMembers = () => {
    return (
        <section className="team section" id="TeamMembers">
            <MainTitle>Our Team</MainTitle>
            <div className="team__container container">
                <Carousel>
                    {TeamMembersCard}
                </Carousel>
            </div>
        </section>
    )
}

export default TeamMembers