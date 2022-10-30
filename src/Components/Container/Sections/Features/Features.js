import './Features.css'
import MainTitle from '../compo/MainTitle/MainTitle'
import FeaturesCard from '../../../../Data/FeaturesData/FeaturesData'

const Features = () => {
    return (
        <section className="features section" id="Features">
            <MainTitle>Features</MainTitle>
            <div className="features__container container grid">
                {FeaturesCard}
            </div>
        </section>
    )
}

export default Features