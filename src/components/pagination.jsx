import { useNavigate, useParams } from "react-router-dom";

const Pagination = (props) => {
    //props[countCards,paginCount,activePage]
 

    let pages = [];

    const navigate = useNavigate();

    for (let j=1;j<props.countCards/props.paginCount+1;j++){
        pages.push(<li className={"page-item"+(props.activePage == j ? " active ":"")}><p className="page-link" onClick={()=>navigate('/catalog/'+j)}>{j}</p></li>)
    }

    return (
        <div className="row-center">
            <ul className="pagination">
                <li className="page-item">
                    <p className={"page-link"+(props.activePage==1?" disabled ":"")} onClick={()=>{ navigate('/catalog/'+(props.activePage-1))}} aria-label="Предыдущая">
                        <span aria-hidden="true">«</span>
                    </p>
                </li>
                {pages}
                <li className="page-item">
                    <p className={"page-link"+(props.activePage==pages.length?" disabled ":"")} onClick={()=>{ navigate('/catalog/'+props.activePage+1)}} aria-label="Следующая">
                        <span aria-hidden="true">»</span>
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;