import { useSelector,useDispatch } from "react-redux"
import { useEffect,useState} from "react"
import {fetchUsersByUrl} from '../redux/features/usersSlice'
import {FaArrowUp,FaArrowDown} from "react-icons/fa"
import _ from "lodash"

export const DisplayUsersData = () => {
    const dataPerPage = 100;
    const[currentPage,setCurrentPage] = useState(1);
    
    // To read state within the component
    const getUsersData = useSelector((store) => {
        const sPe = store.usersList.usersData; 
        return sPe;
    })
    
    // Logic for Pagination
    const paginationButtonCount = getUsersData ? Math.ceil(getUsersData.length/dataPerPage) : 0;

    const pageNumbers = _.range(1,paginationButtonCount + 1);

    // Invoke useDispatch() hook
    const dispatch = useDispatch();

    // To run API call
    useEffect(() => {
        dispatch(fetchUsersByUrl());
    },[dispatch])

    // if pagination === 1 display null
    if(paginationButtonCount === 1) return null;

    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">
                            First Name <span> <FaArrowUp/> <FaArrowDown/> </span>
                        </th>
                        <th scope="col">
                            Last Name <span> <FaArrowUp/> <FaArrowDown/> </span>
                        </th>
                        <th scope="col">
                            Age <span> <FaArrowUp/> <FaArrowDown/> </span>
                        </th>
                        <th scope="col">
                            Email <span> <FaArrowUp/> <FaArrowDown/> </span>
                        </th>
                        <th scope="col">
                            Website <span> <FaArrowUp/> <FaArrowDown/> </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getUsersData.map((ele) => {
                            const {id,first_name,last_name,age,email,web} = ele;
                            return (
                                <tr key={id}>
                                    <td>
                                        {first_name}
                                    </td>
                                    <td>
                                        {last_name}
                                    </td>
                                    <td>
                                        {age}
                                    </td>
                                    <td>
                                        {email}
                                    </td>
                                    <td className="text-primary">
                                        {web}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <nav className="d-flex justify-content-end">
                <ul className="pagination">
                    {
                        pageNumbers.map((ele,i) => {
                            return (
                                <li 
                                    className= {ele === currentPage ? 'page-item active' : 'page-item'}
                                    key={i}
                                >
                                    <p className="page-link">{ele}</p> 
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </>
    )
}