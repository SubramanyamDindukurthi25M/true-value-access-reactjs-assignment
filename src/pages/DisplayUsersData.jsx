import { useEffect,useState} from "react"
import {useNavigate} from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux"
import {fetchUsersByUrl} from '../redux/features/usersSlice'
import { Pagination } from "../Components/Pagination"

export const DisplayUsersData = ({inputValue}) => {
    // Logic for Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [usersDataPerPage] = useState(50);

    // To read state within the component
    const getUsersData = useSelector((store) => {
        return store.usersList.usersData;
    })

    // Invoke useDispatch() hook
    const dispatch = useDispatch();

    // To run API call
    useEffect(() => {
        dispatch(fetchUsersByUrl());
    }, [dispatch])

    // Get current posts
    const indexOfLastPost = currentPage * usersDataPerPage;
    const indexOfFirstPost = indexOfLastPost - usersDataPerPage;
    const currentPosts = getUsersData.slice(indexOfFirstPost, indexOfLastPost);
    const totalUsers = getUsersData.length;

    const handlePaginate = (num) => {
        setCurrentPage(num);
    }

    // Logic To filter Data for search...functionality
    const filterData = currentPosts.filter((ele) => {
        const {
            first_name,
            last_name
        } = ele;

        return first_name.toLowerCase().includes(inputValue) || last_name.toLowerCase().includes(inputValue);
    })

    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`${id}`);
    }

    return (
        <>
            <table className="table table-hover mt-3">
                <thead>
                    <tr>
                        <th scope="col">
                            First Name
                        </th>
                        <th scope="col">
                            Last Name
                        </th>
                        <th scope="col">
                            Age
                        </th>
                        <th scope="col">
                            Email
                        </th>
                        <th scope="col">
                            Website
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filterData.map((ele) => {
                            const {
                                id,
                                first_name,
                                last_name,
                                age,
                                web,
                                email
                            } = ele;
                            return (
                                <tr key={id} onClick={() => handleClick(id)}>
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
                                    <td>
                                        <a 
                                            href={web}
                                            target='_blank'
                                        >
                                            {web}
                                        </a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>    
            </table>
            <Pagination
                usersDataPerPage = {usersDataPerPage}
                totalUsers = {totalUsers}
                handlePaginate = {handlePaginate}
                currentPage = {currentPage}
            />
        </>
    )
}