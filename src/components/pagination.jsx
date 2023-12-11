const Pagination = () => {
    return (
        <div className="row-center">
            <ul className="pagination">
                <li className="page-item">
                    <p className="page-link" href="#" aria-label="Предыдущая">
                        <span aria-hidden="true">«</span>
                    </p>
                </li>
                <li className="page-item active"><p className="page-link" href="#">1</p></li>
                <li className="page-item"><p className="page-link" href="#">2</p></li>
                <li className="page-item"><p className="page-link" href="#">3</p></li>
                <li className="page-item">
                    <p className="page-link" href="#" aria-label="Следующая">
                        <span aria-hidden="true">»</span>
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;