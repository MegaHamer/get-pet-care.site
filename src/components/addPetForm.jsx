const AddPetForm = () => {
    return (
        <div className="reg-window">
            <h2>Добавить объявление</h2>
            <form className="form-reg">
                <input className="form-control" type="text" placeholder="Имя" pattern="^[а-яА-Я -]{18}" required="" />
                <input className="form-control" type="tel" placeholder="Телефон" pattern="^(+)?[0-9]{11}$" required="" />
                <input className="form-control" type="email" placeholder="Почта" required="" />
                <details className="reg-add-pet">
                    <summary>
                        <strong>Регистрация</strong>
                    </summary>
                    <div className="form-reg">
                        <input className="form-control" type="password" placeholder="Пароль" pattern="^[a-zA-Z0-9!/.,*-+()#$@;:&amp;?]{2}$" required="" />
                        <input className="form-control" type="password" placeholder="Подтверждение пароля" pattern="^[a-zA-Z0-9!/.,*-+()#$@;:&amp;?]{2}$" required="" />
                    </div>
                </details>
                <div className="mb-3">
                    <label htmlFor="formFile1" className="form-label">Изображения</label>
                    <input className="form-control" type="file" id="formFile1" required="" />
                </div>
                <div className="mb-3">
                    <input className="form-control" type="file" id="formFile2" />
                </div>
                <div className="mb-3">
                    <input className="form-control" type="file" id="formFile3" />
                </div>
                <input className="form-control" type="text" placeholder="Клеймо" />
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Описание</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div>
                    <input type="checkbox" id="sogl" required="" />
                    <label htmlFor="sogl">Согласие на обработку персональных данных</label>
                </div>
                <button className="btn primary-color2 btn-primary" type="submit">Регистрация</button>
            </form>
        </div>
    );
}

export default AddPetForm;