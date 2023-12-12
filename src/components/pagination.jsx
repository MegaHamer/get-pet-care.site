import { useNavigate, useParams } from "react-router-dom";

const Pagination = (props) => {
    //props[countCards,paginCount,activePage,query]
 

    let pages = [];

    const navigate = useNavigate();

    let countPages = Math.ceil(Number(props.countCards)/Number(props.paginCount));
    let actPage = props.activePage;
    let query=""
    if (props.query){
        query="/"+props.query;
    }

    let startPos = 1;
    let endPos = countPages ;

    let pagesAround = 2;

    if (Number(startPos)<Number(actPage)-Number(pagesAround)){
        if (actPage<=endPos-pagesAround){
            startPos = Number(actPage)-Number(pagesAround)
        }
        else
        {
            startPos = Number(countPages)-Number(pagesAround)*2
        }
        if (startPos<1){
            startPos=1;
        }
    }
    if (Number(endPos)>Number(actPage)+Number(pagesAround)){
        if (actPage<=pagesAround){
            endPos = pagesAround*2+1;
        }
        else
        {
            endPos = Number(actPage)+Number(pagesAround)
        }
        if (endPos>countPages){
            endPos=countPages;
        }
        
    }



    for (let j=startPos;(j<endPos+1) ;j++){
        pages.push(<li className={"page-item"+(props.activePage == j ? " active ":"")}><p className="page-link" onClick={()=>navigate('/catalog/'+j+query)}>{j}</p></li>)
    }
    return (
        <div className="row-center">
            <ul className="pagination">
                <li className="page-item">
                    <p className={"page-link"+(props.activePage==1?" disabled ":"")} onClick={()=>{ navigate('/catalog/'+(1)+query)}} aria-label="Предыдущая">
                        <span aria-hidden="true">«</span>
                    </p>
                </li>
                <li className="page-item">
                    <p className={"page-link"+(props.activePage==1?" disabled ":"")} onClick={()=>{ navigate('/catalog/'+(props.activePage-1)+query)}} aria-label="Предыдущая">
                        <span aria-hidden="true">&#8249;</span>
                    </p>
                </li>
                {pages}
                <li className="page-item">
                    <p className={"page-link"+(actPage==(countPages)?" disabled ":"")} onClick={()=>{ navigate('/catalog/'+(Number(props.activePage)+1)+query)}} aria-label="Следующая">
                        <span aria-hidden="true">&#8250;</span>
                    </p>
                </li>
                <li className="page-item">
                    <p className={"page-link"+(actPage==(countPages)?" disabled ":"")} onClick={()=>{ navigate('/catalog/'+(countPages)+query)}} aria-label="Следующая">
                        <span aria-hidden="true">»</span>
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;