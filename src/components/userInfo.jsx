import { useEffect, useState } from 'react';
import pen from "../img/pen.png";
import ModalWin from './modalWindow';
import { useNavigate } from 'react-router-dom';
import Modal from 'bootstrap/js/dist/modal';

const UserInfo = (props) => {

    const navigate = useNavigate();

    var timeDiff = Math.abs(new Date().getTime() - new Date(props.data.registrationDate).getTime());
    var days = Math.floor(timeDiff / (1000 * 3600 * 24));

    const [modalHeader, setModalHeader] = useState("");
    const [modalType, setModalType] = useState("txt");
    const [modalText, setModalText] = useState("");
    const [field, serField] = useState("");
    const [inpValue, setInpValue] = useState("");

    function changeInfo(field, text, head) {
        setModalHeader(head);
        setModalType("input");
        setModalText(text);
        serField(field);
        setInpValue(props.data[field]);
        showModal(true);
        console.log(props.data[field])
        setTimeout(() => {
            document.getElementById("modalInput").value=props.data[field];
            document.getElementById("changeForm").classList.remove("was-validated");
        }, 1);
    }

    let clearToken = (() => {
        localStorage.setItem("token", "");
        console.log("clear");
        //window.location.reload();
        navigate("/login");
    })

    const [myModal, setMyModal] = useState();
    function showModal(show) {
        if (myModal._isShown) {
            myModal.hide();
        }
        else {
            myModal.show();
            
        }
    }

    useEffect(() => { setMyModal(new Modal(document.getElementById("Modal")));
    /*let myModall = document.getElementById("Modal");
    myModall.addEventListener('shown.bs.modal', function (event) {
        //setInpValue(props.data[field]);
        console.log(props.data[field]);
        console.log(document.getElementById("email"));
    })*/ }, [])

    
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
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "0.5rem" }}>

                <button onClick={() => clearToken()} className="btn btn-primary primary-color2" style={{ "alignSelf": "flex-end" }}>Выйти</button>
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
                                <img onClick={() => { changeInfo("email", "Почта", "Меняем почту") }} className='imgPen' src={pen} />
                            </div>
                        </div>
                        <hr />
                        <div className="row" style={{ "align-items": "center" }}>
                            <div className="col-sm-4">
                                <p className="mb-0">Телефон</p>
                            </div>
                            <div className="col-sm-8 rowUser">
                                <p className="text-muted mb-0  text-break">{props.data.phone}</p>
                                <img onClick={() => changeInfo("phone", "Телефон", "Меняем телефон")} data-bs-target="#Modal" className='imgPen' src={pen} />
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
            <ModalWin header={modalHeader} inpvalue={inpValue} type={modalType} text_body={modalText} idd={field} update={props.update} show={showModal} />
        </div>
    );
}

export default UserInfo;