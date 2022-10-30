
const OurSkillsCardData = [
    { id: 'skills01', skill: 'HTML', percent: '90%', NClass: 'progress__number eight', barValue: 'bar__progress-value' },
    { id: 'skills02', skill: 'CSS', percent: '85%', NClass: 'progress__number twelve', barValue: 'bar__progress-value' },
    { id: 'skills03', skill: 'Java Script', percent: '70%', NClass: 'progress__number twintytwo', barValue: 'bar__progress-value' },
    { id: 'skills04', skill: 'React', percent: '70%', NClass: 'progress__number twintytwo', barValue: 'bar__progress-value' },
]

const OurSkillsData = OurSkillsCardData.map(card => {
    return (
        <div className="bar" key={card.id}>
            <div className="bar__info">
                <span>{card.skill}</span>
                <span className={card.NClass}>{card.percent}</span>
            </div>
            <div className="bar__progress">
                <div className='bar__progress-value' style={{ width: '0%' }} data-width={card.percent}></div>
            </div>
        </div>
    )
}
)
export default OurSkillsData
