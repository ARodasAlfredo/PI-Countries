import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Create.css'
import { postActivity } from '../../redux/countriesSlice';
import { CreateValidations } from './CreateValidations.jsx';
import axios from 'axios';

const CreateActivity = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const allCountries = useSelector((state) => state.countries.allCountries);
    const [activity, setActivity] = useState({
        "name": "",
        "difficulty": 0,
        "duration": 0,
        "season": "",
        "countries": []
    });

    const handleChange = ({target}) => {
        setActivity({
            ...activity,
            [target.name]: target.value
        });
        const fieldErrors = CreateValidations({
            ...activity,
            [target.name]: target.value
        });
        setErrors({
            ...errors,
            [target.name]: fieldErrors[target.name]
        })
    }

    const handleCountries = (event) => {
        const { value } = event.target;
        if (!activity.countries.includes(value)) {
            setActivity({
                ...activity,
                countries: [...activity.countries, value]  
            })
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/activity', activity);
            
            if (response) {
                dispatch(postActivity(activity));
                console.log(response.data);
                alert('Activity created successfully');
                navigate('/home');
            }
        } catch (error) {
            console.log(error.response.data);
            alert('Activity could not be created');
        }
    }



    return (
       <div> 
            <form onSubmit={handleSubmit}>
                <label htmlFor="Name">Name:</label>
                <input type="text" name="name" onChange={handleChange}/>
                {errors.name && <p>{errors.name}</p>}

                <label htmlFor="difficulty">Difficulty:</label>
                <input type="number" name="difficulty" onChange={handleChange}/>
                {errors.difficulty && <p>{errors.difficulty}</p>}
                
                <label htmlFor="duration">Duration:</label>
                <input type="number" name="duration" onChange={handleChange}/>
                {errors.duration && <p>{errors.duration}</p>}

                <label htmlFor="season">Season:</label>
                <select name="season" id="" onChange={handleChange}>
                    <option value="Invierno">Invierno</option>
                    <option value="Verano">Verano</option>
                    <option value="Otoño">Otoño</option>
                    <option value="Primavera">Primavera</option>
                </select>
                {errors.season && <p>{errors.season}</p>}

                <label htmlFor="countries">Add countries:</label>
                <select name="countries" id="" onChange={handleCountries}>
                    {
                        allCountries.map((country, index) => {
                            return (
                                <option value={country.id} key={index}>{country.name}</option>
                            )
                        })
                    }
                </select>
                {errors.countries && <p>{errors.countries}</p>}

                <button disabled={errors.name || errors.countries || errors.season || errors.difficulty || errors.duration || activity.name === undefined || activity.difficulty <= 0 || activity.duration === 0 || activity.countries.length === 0 }>Create</button>
            </form>
       </div>
    );
 }
 
 export default CreateActivity;