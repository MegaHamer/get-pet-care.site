const Sub = () => {
    return (
        <div className="sub">
            <h2 className="text-center text-white primary-color">Подсписка на рассылку</h2>
            <form className="sub-form">
                <p>Введите адрес электронной почты</p>
                <input className="form-control me-2" type="search" placeholder="Почта" aria-label="Search" />
                <button className="btn btn-primary primary-color2" type="submit">Подписаться</button>
            </form>
        </div>
    );
}

export default Sub;