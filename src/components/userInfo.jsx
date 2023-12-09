import { useState } from 'react';
import ava3 from '../img/ava3.webp'
import pen from "../img/pen.png"
import ModalWin from './modalWindow';

const UserInfo = (props) => {

    var timeDiff = Math.abs(new Date().getTime() - new Date(props.data.registrationDate).getTime());
    var days = Math.floor(timeDiff / (1000 * 3600 * 24));

    const [modalHeader, setModalHeader] = useState("");
    const [modalType, setModalType] = useState("txt");
    const [modalText, setModalText] = useState("");
    const [field, serField] = useState("")

    function changeInfo (field,text,head){
        setModalHeader(head);
        setModalType("input");
        setModalText(text);
        serField(field)
    }
    

    return (
        <div className="row">
            {/*<div className="col-lg-4">
                <div className="card mb-4" style={{ "height": "94%","minHeight":"250px" }}>
                    <div className="card-body text-center">
                        <img src={ava3} alt="avatar" className="rounded-circle img-fluid" style={{ "width": "150px" }} />
                        <button type='button' className="btn btn-primary primary-color2 change-user">Изменить</button>
                    </div>
                </div>

            </div>*/}
            <div >
                <div className="card mb-4" style={{ "height": "94%" }}>
                    <div className="card-body">
                        <div className="row" style={{ "align-items": "center" }}>
                            <div className="col-sm-4">
                                <p className="mb-0">Имя пользователя</p>
                            </div>
                            <div className="col-sm-8 rowUser">
                                <p className="text-muted mb-0  text-break">{props.data.name}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="row" style={{ "align-items": "center" }}>
                            <div className="col-sm-4">
                                <p className="mb-0">Почта</p>
                            </div>
                            <div className="col-sm-8 rowUser">
                                <p className="text-muted mb-0  text-break">{props.data.email}</p>
                                <img data-bs-toggle="modal" onClick={()=>changeInfo("email","Почта","Меняем почту")} data-bs-target="#Modal" className='imgPen' src={pen} />
                            </div>
                        </div>
                        <hr />
                        <div className="row" style={{ "align-items": "center" }}>
                            <div className="col-sm-4">
                                <p className="mb-0">Телефон</p>
                            </div>
                            <div className="col-sm-8 rowUser">
                                <p className="text-muted mb-0  text-break">{props.data.phone}</p>
                                <img data-bs-toggle="modal" onClick={()=>changeInfo("phone","Телефон","Меняем телефон")} data-bs-target="#Modal" className='imgPen' src={pen} />
                            </div>
                        </div>
                        <hr />
                        <div className="row" style={{ "align-items": "center" }}>
                            <div className="col-sm-4">
                                <p className="mb-0">Дней с нами</p>
                            </div>
                            <div className="col-sm-8 rowUser">
                                <p className="text-muted mb-0  text-break">{days}</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <ModalWin header={modalHeader} type={modalType} text_body={modalText} idd={field} />
        </div>
    );
}

export default UserInfo;