import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";    

const NavBar = () => {

    return (
        <>
            <div>
                <SearchBar/>
                <Link to={`/create/`}>
                    <button>Create Activity</button>
                </Link>
            </div>
        </>
    )
}

export default NavBar;