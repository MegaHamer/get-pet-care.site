const PetSlide = (props) => {
    return (
        props.data &&
        (<div className={"carousel-item slider-pet " + (props.active ? "active " : "") }>
            <img src={"https://pets.сделай.site" + props.data} className="card-img-top1" alt={props.alt}/>
        </div>)
    );
}

export default PetSlide;