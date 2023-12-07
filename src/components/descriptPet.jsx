import '../mysite.css';

const PetDescription = () => {
    return (
        <div className="card-body">
            <h5 className="card-title">Найдена собака: Щелково, Кармолино</h5>
            <p className="card-text">МО, Щелковский р-он, деревня Кармолино, замечен щенок в ошейнике, месяца 4 на вид. Для связи : +923-234-2345, Юлия</p>
            <div className="contact-info">
                <p>Нашел: Юлия, Тел.: +923-234-2345 Почта: pochta@mail.ru</p>
            </div>
        </div>
    );
}

export default PetDescription;