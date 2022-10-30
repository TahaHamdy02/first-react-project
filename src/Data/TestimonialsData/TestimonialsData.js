import Testimonial01 from '../../assets/images/avatar/avatar-01.png'
import Testimonial02 from '../../assets/images/avatar/avatar-02.png'
import Testimonial03 from '../../assets/images/avatar/avatar-03.png'
import Testimonial04 from '../../assets/images/avatar/avatar-04.png'
import Testimonial05 from '../../assets/images/avatar/avatar-05.png'
import Testimonial06 from '../../assets/images/avatar/avatar-06.png'
import { FaStar } from 'react-icons/fa';
const TestimonialsCardData = [
    { id: 'Testimonial01', name: 'Mohamed Farag', img: Testimonial01, job: 'Full Stack Developer', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus', rate: '9.5' },
    { id: 'Testimonial02', name: 'Mohamed Farag', img: Testimonial02, job: 'Full Stack Developer', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus', rate: '9.5' },
    { id: 'Testimonial03', name: 'Mohamed Farag', img: Testimonial03, job: 'Full Stack Developer', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus', rate: '9.5' },
    { id: 'Testimonial04', name: 'Mohamed Farag', img: Testimonial04, job: 'Full Stack Developer', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus', rate: '9.5' },
    { id: 'Testimonial05', name: 'Mohamed Farag', img: Testimonial05, job: 'Full Stack Developer', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus', rate: '9.5' },
    { id: 'Testimonial06', name: 'Mohamed Farag', img: Testimonial06, job: 'Full Stack Developer', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus', rate: '9.5' },
]

const TestimonialsCard = TestimonialsCardData.map(card => {
    return (
        <div className="testimonial__card" key={card.id}>
            <div className="testimonial__imgs">
                <img src={card.img} alt={card.id} className="testimonial__img" />
            </div>
            <div className="testimonial__title">
                <h3>{card.name}</h3>
            </div>
            <div className="testimonial__job">
                <p>{card.job}</p>
            </div>
            <div className="testimonial__rate flex">
                <h3 className='rate'>{card.rate}</h3><h4> /10</h4> <FaStar />
            </div>
            <div className="testimonial__desc">
                <p>{card.text}</p>
            </div>
        </div>
    )
})



export default TestimonialsCard