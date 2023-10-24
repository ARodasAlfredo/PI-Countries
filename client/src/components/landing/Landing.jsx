import { useNavigate } from "react-router-dom";
import './Landing.css';

const Landing = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home');
    }
    return (
        <>
            <div className="background">
                <button onClick={handleClick}> Home </button>
            </div>
        </>
    )
}

export default Landing;