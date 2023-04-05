import React, {useRef} from 'react';
import { Button, Input } from './styled-components/form-elements';
import {  weatherContext } from '../../context/weatherContext';

export default function Header(){
  // ref const
  const inputRef = useRef(null);
  // context
  const { setSelected, cities, setSearched } = weatherContext();
  // send the coordinates of the selected city to the context and reset the input value
  function querySubmit(e){
    e.preventDefault();
    setSelected(inputRef.current.value)
    inputRef.current.value = '';
  }
  // send the city name to the context and fetch diferent cities
  function handleSearch(e){
    setSearched(e.target.value)
  }

  return (
    <header className='w-screen h-40 p-3  flex-wrap justify-center absolute top-0 left-0'>
      <form className="w-full h-full flex flex-wrap justify-center items-center min-[320px]:justify-evenly " onSubmit={querySubmit}>

        <Input placeholder='City name...' onChange={handleSearch}  list='cities' ref={inputRef} />
        <Button> Search City </Button>

        <datalist id='cities'>
          {cities?.map( city => <option key={`${city.lat,city.lon}`} value={`${city.name}, ${city.country}, ${city.state}`}/>)}
        </datalist>

      </form>
    </header>
  )
}
