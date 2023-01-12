export const Pagination = ({
        usersDataPerPage,
        totalUsers,
        handlePaginate,
        currentPage
    }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersDataPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <>
            <nav className="d-flex justify-content-end">
                <ul className="pagination">
                    {
                        pageNumbers.map((num) => {
                            return (
                                <li 
                                    key={num} 
                                    className={num === currentPage ? 'page-item active' : 'page-item'}
                                >
                                    <a 
                                        href="#"
                                        onClick={() => handlePaginate(num)}
                                        className= 'page-link'
                                    >
                                        {num}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </>
    )
}