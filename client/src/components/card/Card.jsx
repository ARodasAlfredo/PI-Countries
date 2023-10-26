import { Link } from "react-router-dom";
import './Card.css';

const Card = ({id, flag, continent, name}) => {
 
    return (
       <div className="card-container"> 
         <Link to={`/detail/${id}`}>
            <img className="card-img" src={flag} alt="flag"/> 
         </Link>
            <h3 className="name">{name}</h3>
            <p>{continent}</p>
       </div>
    );
 }
 
 export default Card;
 