import React,{ useState, useEffect, createContext, useContext } from 'react';
import { getLocation } from '../services/geoLocation.service';
import { getWeather } from '../services/fetchWeather.service';

const context = createContext();

export default function ContextProvider({ children }) {
  // searched state
  const [ searched, setSearched ] = useState('');
  // cities state
  const [ cities, setCities ] = useState([]);
  // coords state
  const [ selected, setSelected ] = useState('');
  // weather state
  const [ weather, setWeather ] = useState({});

  // get different cities that has the same name
  useEffect(() => {
    searched === '' ? null : (getLocation(searched, setCities))
  },[searched])
  // get weather data of the selected city
  useEffect(() => {
    selected === '' ? null : (getWeather(selected, setWeather))
  },[selected])

  return (
    <context.Provider value={{ searched, setSearched, cities, setSelected, weather }}>
      { children }
    </context.Provider>
  )
}

export const weatherContext = () => {
  return useContext(context);
}

