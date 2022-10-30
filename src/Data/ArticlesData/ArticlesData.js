import cat01 from '../../assets/images/cat/cat-01.jpg'
import cat02 from '../../assets/images/cat/cat-02.jpg'
import cat03 from '../../assets/images/cat/cat-03.jpg'
import cat04 from '../../assets/images/cat/cat-04.jpg'
import cat05 from '../../assets/images/cat/cat-05.jpg'
import cat06 from '../../assets/images/cat/cat-06.jpg'
import cat07 from '../../assets/images/cat/cat-07.jpg'
import cat08 from '../../assets/images/cat/cat-08.jpg'
import { FaLongArrowAltRight } from 'react-icons/fa';
const ArticlesCardsData = [
    { id: 'Article-Card-1', img: cat01, title: 'Test Title', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit', link: 'Read More' },
    { id: 'Article-Card-2', img: cat02, title: 'Test Title', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit', link: 'Read More' },
    { id: 'Article-Card-3', img: cat03, title: 'Test Title', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit', link: 'Read More' },
    { id: 'Article-Card-4', img: cat04, title: 'Test Title', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit', link: 'Read More' },
    { id: 'Article-Card-5', img: cat05, title: 'Test Title', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit', link: 'Read More' },
    { id: 'Article-Card-6', img: cat06, title: 'Test Title', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit', link: 'Read More' },
    { id: 'Article-Card-7', img: cat07, title: 'Test Title', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit', link: 'Read More' },
    { id: 'Article-Card-8', img: cat08, title: 'Test Title', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit', link: 'Read More' },
]


const ArticlesCard = ArticlesCardsData.map(card => {
    return (
        <div className="article__card" key={card.id}>
            <img src={card.img} alt={card.id} className="article__img" />
            <div className="article__content">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
            </div>
            <div className="article__info flex">
                <a href="/#">{card.link}</a>
                <FaLongArrowAltRight />
            </div>
        </div>
    )
})

export default ArticlesCard

// export default ArticlesCard