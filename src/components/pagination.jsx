import { useNavigate, useParams } from "react-router-dom";

const Pagination = (props) => {
    //props[countCards,paginCount,activePage,query,navigate]
 

    let pages = [];

    const navigate = useNavigate();

    let countPages = Math.ceil(Number(props.countCards)/Number(props.paginCount));
    if (countPages==0){
        countPages++;
    }
    let actPage = props.activePage;
    let query=""
    if (props.query){
        query="/"+props.query;
    };
    let path = props.navigate;

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
            console.log()
        }
        else
        {
            endPos = Number(actPage)+Number(pagesAround)
            console.log()
        }
        if (endPos>countPages){
            endPos=countPages;
            console.log()
        }
        
    }


    for (let j=startPos;(j<endPos+1) ;j++){
        pages.push(<li className={"page-item"+(props.activePage == j ? " active ":"")}><p className="page-link" onClick={()=>navigate(path+j+query)}>{j}</p></li>)
    }
    return (
        <div className="row-center">
            <ul className="pagination">
                <li className="page-item">
                    <p className={"page-link"+(props.activePage<=1?" disabled ":"")} onClick={()=>{ navigate(path+(1)+query)}} aria-label="Предыдущая">
                        <span aria-hidden="true">«</span>
                    </p>
                </li>
                <li className="page-item">
                    <p className={"page-link"+(props.activePage<=1?" disabled ":"")} onClick={()=>{ navigate(path+(props.activePage-1)+query)}} aria-label="Предыдущая">
                        <span aria-hidden="true">&#8249;</span>
                    </p>
                </li>
                {pages}
                <li className="page-item">
                    <p className={"page-link"+(actPage>=(countPages)?" disabled ":"")} onClick={()=>{ navigate(path+(Number(props.activePage)+1)+query)}} aria-label="Следующая">
                        <span aria-hidden="true">&#8250;</span>
                    </p>
                </li>
                <li className="page-item">
                    <p className={"page-link"+(actPage>=(countPages)?" disabled ":"")} onClick={()=>{ navigate(path+(countPages)+query)}} aria-label="Следующая">
                        <span aria-hidden="true">»</span>
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;