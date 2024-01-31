//import { useState } from "react";

const SearchBar = ({handleSearchChange}) => {
    //const [searchTerm, setSearchTerm] = useState("");
    //const onSearchHandler = (e) => {
    //    e.preventDefault();
    //};

    return (
    <>
    <div className="busqueda2">
    <form className="d-flex" role="search">
        <input
            className="form-control me-2"
            type="search"
            placeholder="Looking for something to watch?"
            aria-label="Search"
            onChange={handleSearchChange}
            //value={searchTerm}
            //onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-outline-warning" type="submit">Search</button>
        {/*<button className="btn btn-outline-warning" type="submit" onClick={onSearchHandler}>Search</button>*/}
    </form>
    </div>
    </>
    )
}

export default SearchBar