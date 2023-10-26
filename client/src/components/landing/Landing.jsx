import { useNavigate } from "react-router-dom";
import './Landing.css';

const Landing = () => {
    const navigate = useNavigate();

    function handleClick() {
        const button = document.querySelector('.background button');
        button.classList.add('pressed');
        setTimeout(function() {
          navigate('/home');
        }, 500); 
      }

    return (
            <div className="background">
                <button onClick={handleClick}>
                <span class="default-text">Explore</span>
                <span class="hover-text">The World!</span>
                </button>
            </div>
    )
}

export default Landing;