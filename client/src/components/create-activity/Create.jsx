import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
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
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [activity, setActivity] = useState({
        "name": "",
        "difficulty": 0,
        "duration": 0,
        "season": "",
        "countries": selectedCountries
    });

    const handleChange = ({target}) => {
        setActivity({
            ...activity,
            [target.name]: target.value.trim()
        });
        const fieldErrors = CreateValidations({
            ...activity,
            [target.name]: target.value.trim()
        });
        setErrors({
            ...errors,
            [target.name]: fieldErrors[target.name]
        })
    }

    const handleCountries = (event) => {
        const countryId = event.target.value;
        if (countryId !== "") {
            const country = allCountries.find((country) => country.id === countryId);
            if (selectedCountries.some((country) => country.id === countryId)) {
            setSelectedCountries(selectedCountries.filter((country) => country.id !== countryId));
            setActivity({
                ...activity,
                countries: activity.countries.filter((country) => country !== countryId)
            });
            } else {
            setSelectedCountries([...selectedCountries, country]);
            setActivity({ ...activity, countries: [...activity.countries, countryId] });
            }
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/activity', activity);

            const activityRedux = {
                name: activity.name,
                difficulty: activity.difficulty,
                duration: activity.duration,
                season: activity.season,
                countries: selectedCountries
            }
            if (response) {
                alert('Activity created successfully');
                navigate('/home');
                dispatch(postActivity(activityRedux));
            }
        } catch (error) {
            console.log(error.response.data);
            alert('Activity could not be created');
        }
    };

    useEffect(() => {
        console.log(selectedCountries);
    }, [selectedCountries])

    return (
       <div> 
            <div className='create-container'>
            <form onSubmit={handleSubmit}>
                <div className='input-container'>
                <label htmlFor="Name">Name:</label>
                <input type="text" name="name" onChange={handleChange}/>
                {errors.name && <p>{errors.name}</p>}
                </div>

                <div className='input-container'>
                <label htmlFor="difficulty">Difficulty:</label>
                <input type="number" name="difficulty" onChange={handleChange}/>
                {errors.difficulty && <p>{errors.difficulty}</p>}
                </div>
                
                <div className='input-container'>
                <label htmlFor="duration">Duration:</label>
                <input type="number" name="duration" onChange={handleChange}/>
                {errors.duration && <p>{errors.duration}</p>}
                </div>

                <label htmlFor="season">Season:</label>
                <select name="season" id="" onChange={handleChange}>
                    <option value="">Select a season</option>
                    <option value="Invierno">Invierno</option>
                    <option value="Verano">Verano</option>
                    <option value="Otoño">Otoño</option>
                    <option value="Primavera">Primavera</option>
                </select>
                {errors.season && <p>{errors.season}</p>}

                <label htmlFor="countries">Add countries:</label>
                <select name="countries" id="" onChange={handleCountries}>
                    <option value="">Select a country</option>
                    {
                        allCountries.map((country, index) => {
                            return (
                                <option value={country?.id} key={index}>{country?.name}</option>
                            )
                        })
                    }
                </select>
                <ul>
                    {selectedCountries.map((country, index) => {
                    return <li key={index}>{country?.name}</li>;
                    })}
                </ul>
                {selectedCountries.length===0 && <p>{errors.countries}</p>}

                <button className='create-btn-form' disabled={errors.name || errors.countries || errors.season || errors.difficulty || errors.duration || activity.name === undefined || activity.difficulty <= 0 || activity.duration === 0 || activity.countries.length === 0 }>Create</button>
            </form>
            </div>
       </div>
    );
 }
 
 export default CreateActivity;