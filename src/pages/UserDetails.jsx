import { useParams,Link } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux";
import {FaArrowLeft} from 'react-icons/fa'
import { useEffect} from "react";
import { fetchUsersByUrl } from "../redux/features/usersSlice"
import { HeaderFiveTag } from "../Components/HeaderFiveTag"

export const UserDetails = () => {
    // Logic to collect user-id
    const {
        id
    } = useParams();

    const getUniqueUserData = useSelector((store) => {
        return store.usersList.usersData;
    })

    // Invoke useDispatch() hook
    const dispatch = useDispatch();

    // To run API call
    useEffect(() => {
        dispatch(fetchUsersByUrl());
    }, [dispatch]);

    const getUserData = getUniqueUserData.find((ele) => Number(ele.id) === Number(id));
    // console.log(getUserData);

    const {
        first_name,
        last_name,
        company_name,
        city,
        state,
        zip,
        web,
        email,
        age
    } = getUserData;

    return (
        <>
            <div className="d-flex">
                <div className="mr-2">
                    <Link
                        to='/users'
                    >
                        <FaArrowLeft/> 
                    </Link> 
                </div>
                <h5 className="font-weight-bold">
                    Details : {getUserData && first_name} {getUserData && last_name}
                </h5>
            </div>
            <section className="mt-3">
                <HeaderFiveTag
                    text = 'First Name'
                    name = {first_name}
                />
                <HeaderFiveTag
                    text = 'Last Name'
                    name = {last_name}
                />
                <HeaderFiveTag
                    text = 'Company_name'
                    name = {company_name}
                />
                <HeaderFiveTag
                    text = 'City'
                    name = {city}
                />
                <HeaderFiveTag
                    text = 'State'
                    name = {state}
                />
                <HeaderFiveTag
                    text = 'Zip'
                    name = {zip}
                />
                <HeaderFiveTag
                    text = 'Email'
                    name = {email}
                />
                <HeaderFiveTag
                    text = 'Web'
                    name = {web}
                />
                <HeaderFiveTag
                    text = 'Age'
                    name = {age}
                />
            </section>
        </>
    )
}