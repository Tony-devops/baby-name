//import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import BabyNames from './BabyNames';
import BabyNamesData from './BabyNameData.json';
import Heading from './Heading';
import SearchInput from './SearchInput';

function App() {
  const [names, setNames]= useState(BabyNamesData);

function search(searchVal){
  const searchValue= searchVal.toLowerCase();
  const filteredNames=BabyNamesData.filter((eachName)=>{ return eachName.name.toLowerCase().includes(searchValue);})

  setNames(filteredNames);
 
}

  return (
    <div >
      <Heading/>
      <SearchInput search = {search} />
      <BabyNames names ={names} />
    </div>
  );
}

export default App;
