import {Routes, Route, useLocation} from 'react-router-dom';
import Landing from './components/landing/Landing';
import Home from './components/home/Home';
import Detail from './components/detail/Detail';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCountries } from './redux/countriesSlice';
import NavBar from './components/navbar/NavBar';
import CreateActivity from './components/create-activity/Create';
import './App.css'


function App() {

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      const response = await axios('http://localhost:3001/countries/');
      dispatch(setCountries(response.data));
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
        </Routes>
      </div>
    </>
  )
}

export default App
