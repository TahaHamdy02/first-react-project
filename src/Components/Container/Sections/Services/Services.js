import './Services.css'
import MainTitle from '../compo/MainTitle/MainTitle'
import ServicesData from '../../../../Data/ServicesData/ServicesData'
const Services = () => {
    return (
        <section className="Services section" id="Services">
            <MainTitle> Services</MainTitle>
            <div className="services__container container grid">
                {ServicesData}
            </div>
        </section>
    )
}

export default Services