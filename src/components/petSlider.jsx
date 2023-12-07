import '../mysite.css';

import img1 from '../img/animals/puppy.png';
import PetSlide from './petSlide';
const PetSlider = () => {
    const slide4={
        img:img1,
        alt:'dog',
        active: true
    }
    
    return (
        <div id="carouselExample" className="carousel slide secondary-color carousel-pet p-3">
            <PetSlide data={slide4}/>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Предыдущий</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Следующий</span>
            </button>
        </div>
    );
}

export default PetSlider;