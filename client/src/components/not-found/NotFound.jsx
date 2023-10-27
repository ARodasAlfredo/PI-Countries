import './NotFound.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home');
    }

    return (
        <>
            <div className="overlay">
                <h1 className="text"> 404 </h1>
                <img className="plane" src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/25190/1540864026-clipart-md.png" alt="plane" />
                <button className='home-btn' onClick={handleClick}>Emergency Landing Home</button>
            </div>
        </>
    )
}

export default NotFound;