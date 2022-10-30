import './Testimonials.css'
import MainTitle from '../compo/MainTitle/MainTitle'
import TestimonialsCard from '../../../../Data/TestimonialsData/TestimonialsData'
const Testimonials = () => {
    return (
        <section className="testimonials section" id="Testimonials">
            <MainTitle>Testimonial</MainTitle>
            <div className="testimonial__container container grid">
                {TestimonialsCard}
            </div>
        </section>
    )
}

export default Testimonials