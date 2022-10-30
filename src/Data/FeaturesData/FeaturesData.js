import Feature01 from '../../assets/images/features/features-01.jpg'
import Feature02 from '../../assets/images/features/features-02.jpg'
import Feature03 from '../../assets/images/features/features-03.jpg'
const FeaturesCardData = [
    { id: 'Feature01', img: Feature01, title: 'Quality', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima' },
    { id: 'Feature02', img: Feature02, title: 'Time', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima' },
    { id: 'Feature03', img: Feature03, title: 'Passion', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima' },
]

const FeaturesCard = FeaturesCardData.map(card => {
    return (
        <div className="feature__card" id={card.id} key={card.id}>
            <div className="feature__img">
                <img src={card.img} alt={card.id} />
            </div>

            <div className="feature__title">
                <h1>{card.title}</h1>
            </div>
            <div className="feature__details">
                <p>{card.text}</p>
            </div>
            <div className="feature__btn flex">
                <a href="/#">More</a>
            </div>
        </div>
    )
});

export default FeaturesCard