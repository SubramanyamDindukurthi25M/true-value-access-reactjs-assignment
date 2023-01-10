import { DisplayUsersData } from "./Components/DisplayUsersData"
import { SearchBox } from "./Components/SearchBox"

export const App = () => {
    return (
        <section className="py-5 mx-5">
            <h1 className="text-capitalize">
                users
            </h1>
            <SearchBox/>
            <DisplayUsersData/>
        </section>
    )
}