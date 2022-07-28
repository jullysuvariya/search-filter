import logo from './logo.svg';
import './App.css';
import JSONDATA from './MOCK_DATA.json';
import { useState } from 'react';

function SearchFilter() {
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }

  return (
    <div className="App">
        <input type="text" placeholder="Search..." onChange={handleSearch}/>
        {JSONDATA.filter((value) => {
            if(searchTerm == ""){
                return value;
            }
            else if (value.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
                return value;
            }
        }).map((value, key) => {
            return (
            <div className="user" key={key}>
                <p>{value.first_name}</p>
            </div>
            );
        })}
    </div>
  );
}

export default SearchFilter;
