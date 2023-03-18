import React, {useState} from "react";

function SearchInput(props) {
    const [searchInput, setSearchInput] = useState('');

    function handleSearchInput(event) {
        setSearchInput(event.target.value);
        props.search(event.target.value);
        
    }
    return (
        <input placeholder="Enter a name" className="searchInput" value={searchInput} onChange={handleSearchInput}/>
    )
}
export default SearchInput;