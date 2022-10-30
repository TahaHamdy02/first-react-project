import './Gallery.css'
import MainTitle from '../compo/MainTitle/MainTitle'
import GalleryCard from '../../../../Data/GalleryData/GalleryData'
const Gallery = () => {
    return (
        <section className="gallery section" id="Gallery">
            <MainTitle>gallery</MainTitle>
            <div className="gallery__container container grid">
                {GalleryCard}
            </div>
        </section>
    )
}

export default Gallery