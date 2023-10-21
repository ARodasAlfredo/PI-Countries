import { Link } from "react-router-dom";

const Card = ({id, flag, continent, name}) => {
 
    return (
       <div> 
         <Link to={`/detail/${id}`}>
            <img src={flag} alt="flag"/> 
         </Link>
            <h3>{name}</h3>
            <h4>{continent}</h4>
       </div>
    );
 }
 
 export default Card;
 