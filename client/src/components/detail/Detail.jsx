import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import './Detail.css';

const details = () => {
    const countries = useSelector((state) => state.countries.countries);
    const {id} = useParams();
    const details = countries.find((country) => country.id === id)
    return (
        <div className="detail-container">
            <img className="detail-img" src={details?.flag} alt="flag"/>
            <h1 className="detail-name">{details?.name}</h1>
            <h4 className="detail-info">{details?.continent}</h4>
            <h4 className="detail-info">{details?.capital}</h4>
            <h4 className="detail-info">{details?.subregion}</h4>
            <h4 className="detail-info">Area: {details?.area}</h4>
            <h4 className="detail-info">Population: {details?.population}</h4>
        </div>
    )
}

export default details;