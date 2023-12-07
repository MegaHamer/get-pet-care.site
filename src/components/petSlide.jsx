const PetSlide = (props) => {
    return (
        <div className="carousel-inner">
            <div className={"carousel-item"+ (props.data.active? " active ": "") + "slider-pet"}>
                <img src={props.data.img} className="card-img-top1" alt={props.data.alt} />
            </div>
        </div>
    );
}

export default PetSlide;