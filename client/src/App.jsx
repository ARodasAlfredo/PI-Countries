import {Routes, Route, useLocation} from 'react-router-dom';
import Landing from './components/landing/Landing';
import Home from './components/home/Home';
import Detail from './components/detail/Detail';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCountries, setActivitiesList } from './redux/countriesSlice';
import NavBar from './components/navbar/NavBar';
import CreateActivity from './components/create-activity/Create';
import NotFound from './components/not-found/NotFound';
import './App.css'


function App() {

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      const response = await axios('http://localhost:3001/countries/');
      dispatch(setCountries(response.data));
      const responseActivities = await axios('http://localhost:3001/activity/')
      dispatch(setActivitiesList(responseActivities.data))
    }
    fetchData();
  }, []);
  return (
    <>
      <div>
        {
          location.pathname !== '/' && <NavBar/>
        }
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="/create" element={<CreateActivity/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
