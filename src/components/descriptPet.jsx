import '../mysite.css';

const PetDescription = (props) => {
    console.log(props)
    return (
        <div className="card-body">
            <h5 className="card-title">{props.data.kind}</h5>
            <p className="card-text">{props.data.description}</p>
            <div className="contact-info">
                <p>Нашел: {props.data.name}<br/>Тел.: {props.data.phone}<br/>Почта: {props.data.email}<br/>Место нахождения: {props.data.district}<br/>Клеймо: {props.data.mark}</p>
            </div>
        </div>
    );
}

export default PetDescription;