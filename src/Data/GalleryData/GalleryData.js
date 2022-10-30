import gallery01 from '../../assets/images/gall/gallery-01.png'
import gallery02 from '../../assets/images/gall/gallery-02.png'
import gallery03 from '../../assets/images/gall/gallery-03.jpg'
import gallery04 from '../../assets/images/gall/gallery-04.png'
import gallery05 from '../../assets/images/gall/gallery-05.jpg'
import gallery06 from '../../assets/images/gall/gallery-06.png'
const GalleryCardData = [
    { id: 'gallery01', img: gallery01 },
    { id: 'gallery02', img: gallery02 },
    { id: 'gallery03', img: gallery03 },
    { id: 'gallery04', img: gallery04 },
    { id: 'gallery05', img: gallery05 },
    { id: 'gallery06', img: gallery06 }
]

const GalleryCard = GalleryCardData.map(card => {
    return (
        <div className="gallery__card" key={card.id}>
            <div className="gallery__card-img">
                <img src={card.img} alt={card.id} className="gallery__img" />
            </div>
        </div>
    )

})


export default GalleryCard