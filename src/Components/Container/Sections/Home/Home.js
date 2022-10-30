import './Home.css'
import Landing from '../../../../assets/images/landing-image.png'
import { FaAngleDoubleDown } from 'react-icons/fa'
function Home() {
    return (
        <section className="home section" id="Home">
            <div className="home__container container flex">
                <div className="right">
                    <img src={Landing} alt="" />
                </div>
                <div className="left flex">
                    <div className="text">
                        <h1>Welcome, To My World</h1>
                        <h3>Here Iam gonna share everything about my life. Books Iam reading, Games Iam Playing, Stories and Events</h3>
                    </div>
                </div>
            </div>
            <div className="arrow__down"><a href="#articles"><FaAngleDoubleDown /></a> </div>
        </section>
    )
}

export default Home