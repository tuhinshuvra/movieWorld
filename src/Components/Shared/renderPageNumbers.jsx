
export const renderPageNumbers = ({ handlePageClick, currentPage, totalPages }) => {
    const pageNumbers = [];
    const range = 2; // Number of page numbers to show on each side of the current page
    const ellipsis = <li key="ellipsis" className="page-item disabled"><span className="page-link">...</span></li>;

    // Helper function to add page number to the array
    const addPageNumber = (pageNumber) => {
        pageNumbers.push(
            <li key={pageNumber} className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}>
                <a className="page-link" onClick={() => handlePageClick(pageNumber)}>
                    {pageNumber}
                </a>
            </li>
        );
    };

    // Helper function to add ellipsis
    const addEllipsis = () => pageNumbers.push(ellipsis);

    // Add the first page number
    if (currentPage > range + 1) {
        addPageNumber(1);
        if (currentPage !== range + 2) {
            addEllipsis();
        }
    }

    // Add the range of page numbers
    for (let i = Math.max(1, currentPage - range); i <= Math.min(totalPages, currentPage + range); i++) {
        addPageNumber(i);
    }

    // Add the last page number
    if (currentPage < totalPages - range) {
        if (currentPage !== totalPages - range - 1) {
            addEllipsis();
        }
        addPageNumber(totalPages);
    }

    return pageNumbers;
};



