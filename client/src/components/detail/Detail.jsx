import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const details = () => {
    const countries = useSelector((state) => state.countries.countries);
    const {id} = useParams();
    const details = countries.find((country) => country.id === id)
    return (
        <div>
            <img src={details?.flag} alt="flag"/>
            <h1>{details?.name}</h1>
            <h3>{details?.continent}</h3>
            <h4>{details?.capital}</h4>
            <h4>{details?.subregion}</h4>
            <h4>{details?.area}</h4>
            <h4>{details?.population}</h4>
        </div>
    )
}

export default details;