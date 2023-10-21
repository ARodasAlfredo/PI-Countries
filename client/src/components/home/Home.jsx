import { useSelector } from "react-redux";
import { setFilter, setOrder, setCurrentPage } from "../../redux/countriesSlice";
import { useDispatch } from "react-redux";
import Card from "../card/Card";

const Home = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries.countries);
    const activities = useSelector((state) => state.countries.activities);
    const currentPage = useSelector((state) => state.countries.currentPage);
    const countriesPerPage = useSelector((state) => state.countries.countriesPerPage);

    const handleFilter = ({target}) => {
        const {value} = target;
        dispatch(setFilter(value));
    };
    const handleOrder = ({target}) => {
        const {value} = target;
        dispatch(setOrder(value));
    }
    const handleCurrentPage = (page) => {
            dispatch(setCurrentPage(page));
    }

    const startIndex = (currentPage - 1) * countriesPerPage;
    const endIndex = startIndex + countriesPerPage;
    const totalPages = Math.ceil(countries.length / countriesPerPage);
    
    return (
        <div>
            <select onChange={handleFilter} id="">
                <option value="all">Filter by continent</option>
                <option value="africa">Africa</option>
                <option value="south america">South America</option>
                <option value="north america">North America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
                <option value="antarctica">Antarctica</option>
            </select>
            <select onChange={handleFilter} id="">
                <option value="all">Filter by activity</option>
                <option value="countries with activities">All countries with activities</option>
                <option value="countries without activities">All countries without activities</option>
                {activities.map((activity, index) => {
                    return (
                        <option key={index} value={activity.name}>{activity.name}</option>
                    )
                })}
            </select>
            <select onChange={handleOrder} id="">
                <option value="a-z">a-z</option>
                <option value="z-a">z-a</option>
                <option value="population: high-low">population: high-low</option>
                <option value="population: low-high">population: low-high</option>
                <option value="area: high-low">area: high-low</option>
                <option value="area: low-high">area: low-high</option>
            </select>
            <div>
                <button
                    onClick={() => handleCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    {"<<"}
                </button>
                {
                    Array.from({length: totalPages}, (_, index) => {
                        const pageNumber = index + 1;
                        return (
                            <button
                                key={index}
                                onClick={() => handleCurrentPage(pageNumber)}
                            >
                                {pageNumber}
                            </button>
                        )
                    })
                }
                 <button
                    onClick={() => handleCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    {">>"}
                </button>
                {countries.slice(startIndex, endIndex).map((country, index) => {
                    return (
                        <Card 
                            key={index}
                            id={country.id}
                            name={country.name}
                            flag={country.flag}
                            continent={country.continent}
                    />
                    )
                })}
            </div>
        </div>
    )
}

export default Home;