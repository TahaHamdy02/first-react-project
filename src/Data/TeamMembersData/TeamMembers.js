
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import TeamMember01 from '../../assets/images/team/team-01.jpg'
import TeamMember02 from '../../assets/images/team/team-02.jpg'
import TeamMember03 from '../../assets/images/team/team-03.jpg'
import TeamMember04 from '../../assets/images/team/team-04.jpg'
import TeamMember05 from '../../assets/images/team/team-05.png'
import TeamMember06 from '../../assets/images/team/team-06.png'
import TeamMember07 from '../../assets/images/team/team-07.jpg'
import TeamMember08 from '../../assets/images/team/team-08.jpg'

const TeamMembersCardData = [
    { id: 'TeamMember01', name: 'Name', text: 'Simple Short Description', img: TeamMember01 },
    { id: 'TeamMember02', name: 'Name', text: 'Simple Short Description', img: TeamMember02 },
    { id: 'TeamMember03', name: 'Name', text: 'Simple Short Description', img: TeamMember03 },
    { id: 'TeamMember04', name: 'Name', text: 'Simple Short Description', img: TeamMember04 },
    { id: 'TeamMember05', name: 'Name', text: 'Simple Short Description', img: TeamMember05 },
    { id: 'TeamMember06', name: 'Name', text: 'Simple Short Description', img: TeamMember06 },
    { id: 'TeamMember07', name: 'Name', text: 'Simple Short Description', img: TeamMember07 },
    { id: 'TeamMember08', name: 'Name', text: 'Simple Short Description', img: TeamMember08 },
]

const TeamMembersLink = (props) => {
    return (
        <a href="/#">
            {props.children}
        </a>
    )
}

// export { TeamMembersLink }

const TeamMembersCard = TeamMembersCardData.map(card => {
    return (

        <div className="team__card" key={card.id}>
            <div className="team__imgs flex">
                <div> <img src={card.img} alt={card.id} className="team__img" /></div>
                <div className="team__socail flex">
                    <TeamMembersLink><FaFacebookF /></TeamMembersLink>
                    <TeamMembersLink><FaTwitter /></TeamMembersLink>
                    <TeamMembersLink> <FaLinkedinIn /></TeamMembersLink>
                    <TeamMembersLink> <FaYoutube /></TeamMembersLink>
                </div>
            </div>
            <div className="team__title">
                <h2>{card.name}</h2>
            </div>
            <div className="team__desc">
                <p>{card.text}</p>
            </div>
        </div>

    )
})

export default TeamMembersCard
