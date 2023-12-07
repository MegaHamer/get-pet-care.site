const Pagination = () => {
    return (
        <div className="row-center">
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Предыдущая">
                        <span aria-hidden="true">«</span>
                    </a>
                </li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Следующая">
                        <span aria-hidden="true">»</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;