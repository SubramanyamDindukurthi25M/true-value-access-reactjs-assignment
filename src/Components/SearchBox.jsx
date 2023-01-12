import { useState } from "react";
import { Routes,Route } from "react-router-dom";
import {FaSearch} from "react-icons/fa";
import { DisplayUsersData } from "../pages/DisplayUsersData"
import { UserDetails } from "../pages/UserDetails";

export const SearchBox = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchValueTwo, setSearchValueTwo] = useState('');

    // Event Handler as callback function - 1
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            setSearchValueTwo(searchValue);
            setSearchValue('');
        }
    }

    // Event Handler as callback function - 2
    const handleSearch = () => {
        // Invoke State function
        setSearchValueTwo(searchValue);
        setSearchValue('');
    }

    return (
        <>
            <form autoComplete="off">
                <div className="form-group mb-2 searchIcon">
                    <input 
                        type="text" 
                        className="form-control form-control-md" 
                        placeholder="Search by first or last name"
                        value={searchValue}
                        onChange = {
                            (e) => setSearchValue(e.target.value)
                        }
                        onKeyDown={handleEnter}
                    />
                    <span
                        className='icon'
                        onClick={handleSearch}
                    >
                        <FaSearch/>
                    </span>
                </div>
            </form>
            <Routes>
                <Route 
                    path="/users"
                    element={<DisplayUsersData
                        inputValue = {searchValueTwo}
                    />}
                />
                <Route
                    path='/users/:id'
                    element={<UserDetails/>}
                />
            </Routes>
        </>
    )
}