import { useSelector } from "react-redux";
import { setFilter, setOrder, setCurrentPage } from "../../redux/countriesSlice";
import { useDispatch } from "react-redux";
import Card from "../card/Card";
import './Home.css'

const Home = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries.countries);
    const activities = useSelector((state) => state.countries.activities);
    const currentPage = useSelector((state) => state.countries.currentPage);
    const countriesPerPage = useSelector((state) => state.countries.countriesPerPage);

    const handleFilter = ({target}) => {
        const {value} = target;
        dispatch(setFilter(value));
        dispatch(setCurrentPage(1));
    };
    const handleOrder = ({target}) => {
        const {value} = target;
        dispatch(setOrder(value));
        dispatch(setCurrentPage(1));
    }
    const handleCurrentPage = (page) => {
        dispatch(setCurrentPage(page));
    }

    const startIndex = (currentPage - 1) * countriesPerPage;
    const endIndex = startIndex + countriesPerPage;
    const totalPages = Math.ceil(countries.length / countriesPerPage);
    
    return (
        <div>
            <div className="select-container">
            <select onChange={handleFilter} id="">
                <option value="">Filter by continent</option>
                <option value="all">All</option>
                <option value="africa">Africa</option>
                <option value="south america">South America</option>
                <option value="north america">North America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
                <option value="antarctica">Antarctica</option>
            </select>
            <select onChange={handleFilter} id="">
                <option value="">Filter by activity</option>
                <option value="all">All</option>
                <option value="countries with activities">All countries with activities</option>
                <option value="countries without activities">All countries without activities</option>
                {activities.map((activity, index) => {
                    return (
                        <option key={index} value={`activity: ${activity.name}`}>{activity.name}</option>
                    )
                })}
            </select>
            <select onChange={handleOrder} id="">
                <option value="all">Order by</option>
                <option value="a-z">a-z</option>
                <option value="z-a">z-a</option>
                <option value="population: high-low">population: high-low</option>
                <option value="population: low-high">population: low-high</option>
                <option value="area: high-low">area: high-low</option>
                <option value="area: low-high">area: low-high</option>
            </select>
            </div>
            <div >
                <div className="page-container">
                <button className="page-btn"
                    onClick={() => handleCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    {"<<"}
                </button> 
                <div className="page-number">
                    <p > {currentPage} of {totalPages} </p>
                </div>
                 <button className="page-btn"
                    onClick={() => handleCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    {">>"}
                </button>
                </div>
                <div className="cards-display">
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
        </div>
    )
}

export default Home;