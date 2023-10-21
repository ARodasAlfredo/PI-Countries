import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home');
    }
    return (
        <>
            <div>
                <button onClick={handleClick}> Home </button>
            </div>
        </>
    )
}

export default Landing;