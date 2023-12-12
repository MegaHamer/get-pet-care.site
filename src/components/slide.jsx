const Slide = (props) => {
    return (
        <div id={"pet"+props.data.id} className={"carousel-item"+(props.active ? " active " :"")}>
            <div className="slider-returned-pets-img ">
                <img src={'https://pets.сделай.site'+props.data.image} className="d-block" alt={props.data.kind} style={{"width":"100%"}}/>
            </div>
            <div className="carousel-description-over d-none d-md-block">
                <h5>{props.data.kind}</h5>
                <p className="carousel-description">{props.data.description}</p>
            </div>
        </div>
    );
}

export default Slide;