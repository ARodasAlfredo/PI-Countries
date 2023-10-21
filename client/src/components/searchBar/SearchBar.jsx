import { getCountriesByName } from "../../redux/countriesSlice";
import { useDispatch } from "react-redux";

const SearchBar = () => {
    const dispatch = useDispatch();
    const handleSearch = (event) => {
        const name = event.target.value;
        dispatch(getCountriesByName(name));
    }

    return (
        <>
            <div>
                <form><input placeholder="search country by name" onChange={handleSearch}/>
                    <button>Search</button>
                </form>  
            </div>
        </>
    )
}

export default SearchBar;