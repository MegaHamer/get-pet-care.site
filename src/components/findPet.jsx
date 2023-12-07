const FindPet = () => {
    return (
        <div className="row">
            <h2>Поиск по объявлениям</h2>
            <form className="form-reg">
                <input className="form-control" type="text" placeholder="Отличительные особенности питомца" />
                <button className="btn primary-color2 btn-primary m-auto" type="submit">Поиск</button>
            </form>
        </div>
    );
}

export default FindPet
