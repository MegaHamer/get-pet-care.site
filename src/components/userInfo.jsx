import ava3 from '../img/ava3.webp'

const UserInfo = (props) => {
    return (
        <div className="row">
            <div className="col-lg-4">
                <div className="card mb-4" style={{ "height": "94%" }}>
                    <div className="card-body text-center">
                        <img src={ava3} alt="avatar" className="rounded-circle img-fluid" style={{ "width": "150px" }} />
                        <h5 className="my-3">{props.data.userName}</h5>
                        <a class="btn btn-primary primary-color2 change-user">Изменить</a>
                    </div>
                </div>

            </div>
            <div className="col-lg-8">
                <div className="card mb-4" style={{ "height": "94%" }}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-4">
                                <p className="mb-0">Имя пользователя</p>
                            </div>
                            <div className="col-sm-8">
                                <p className="text-muted mb-0">{props.data.name}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-4">
                                <p className="mb-0">Почта</p>
                            </div>
                            <div className="col-sm-8">
                                <p className="text-muted mb-0">{props.data.mail}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-4">
                                <p className="mb-0">Телефон</p>
                            </div>
                            <div className="col-sm-8">
                                <p className="text-muted mb-0">{props.data.tel}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-4">
                                <p className="mb-0">Адрес</p>
                            </div>
                            <div className="col-sm-8">
                                <p className="text-muted mb-0">{props.data.adress}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-4">
                                <p className="mb-0">Дней с нами</p>
                            </div>
                            <div className="col-sm-8">
                                <p className="text-muted mb-0">{props.data.days}</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
            
        </div>
    );
}

export default UserInfo;