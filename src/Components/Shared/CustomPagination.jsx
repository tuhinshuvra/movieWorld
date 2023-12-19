import { renderPageNumbers } from "./renderPageNumbers";
const CustomPagination = ({ currentPage, setCurrentPage, totalPages }) => {

    const handlePageClick = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div>
            <div className="d-flex justify-content-center mb-0">
                <nav aria-label="...">
                    <ul className="pagination responsivePagination">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <a className="page-link fw-bold" onClick={() => handlePageClick(currentPage - 1)}>{"<<"}</a>
                        </li>
                        {renderPageNumbers({ handlePageClick, currentPage, totalPages })}

                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                            <a className="page-link fw-bold" onClick={() => handlePageClick(currentPage + 1)}>{">>"}</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default CustomPagination;