import { getCountriesByName } from "../../redux/countriesSlice";
import { useDispatch } from "react-redux";
import './SearchBar.css'

const SearchBar = () => {
    const dispatch = useDispatch();
    const handleSearch = (event) => {
        const name = event.target.value;
        dispatch(getCountriesByName(name));
    }

    return (
        <>
            <div className="searchBar-container">
                <input className="searchBar-input" placeholder="Country Search" onChange={handleSearch}/>
                <div className="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256.001 256.001" id="MagnifyingGlassSearchingGlass"><rect width="256" height="256" fill="none"></rect><circle cx="115.997" cy="116" r="84" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" class="colorStroke000000 svgStroke"></circle><line x1="175.391" x2="223.991" y1="175.4" y2="224.001" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" class="colorStroke000000 svgStroke"></line></svg>
                </div>
            </div>
        </>
    )
}

export default SearchBar;