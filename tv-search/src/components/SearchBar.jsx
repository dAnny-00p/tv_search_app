import { useState } from "react";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const onSearchHandler = (e) => {
        e.preventDefault();
    };

    return (
    <>
    {/*<div className="searchbar">
        <form className="searchbar__form">
            <input type="text" placeholder="Ingresa tu busqueda" value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="button" className="btn btn-outline-warning" onClick={onSearchHandler}>
                Warning
            </button>
        </form>
    </div>*/}

    <div className="busqueda2">
    <form className="d-flex" role="search">
        <input
            className="form-control me-2"
            type="search"
            placeholder="Looking for something?"
            aria-label="Search"
            value={searchTerm}
        />
        <button className="btn btn-outline-warning" type="submit" onClick={onSearchHandler}>Search</button>
    </form>
    </div>
    </>
    )
}

export default SearchBar