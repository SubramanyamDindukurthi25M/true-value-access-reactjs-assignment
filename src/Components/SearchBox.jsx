import {FaSearch} from "react-icons/fa";

export const SearchBox = () => {
    return (
        <form autoComplete="off">
            <div className="form-group mb-2 searchIcon">
                <input 
                    type="text" 
                    className="form-control form-control-md" 
                    placeholder="Search by first or last name"
                />
                <span
                    // onClick={handleTogglePasswordIcon}
                    className='icon'
                >
                    <FaSearch/>
                </span>
            </div>
        </form>
    )
}