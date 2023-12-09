const ModalWin = (props) => {



    let bodys = props.type == "input" ? <form> <input className="form-control" id={props.idd} type="text" name="" placeholder={props.text_body}/></form> : props.type == "txt" ? props.text_body : "";
    
    let buttons = <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
        {props.type=='input' ? <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Сохранить изменения</button> :""}
    </div>;

    return (
        <div>
            {
                /*<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal">
                Запустите демо модального окна
            </button>*/
            }


            <div className="modal fade" id="Modal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="ModalLabel">{props.header}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                        </div>
                        <div className="modal-body text-wrap text-break">
                            {bodys}
                        </div>
                        {buttons}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ModalWin;