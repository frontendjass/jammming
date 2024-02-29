import React from "react";
import styles from './SearchBar.module.css';

export default function SearchBar() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search bar</label>
            <input 
                type="text"
                className={styles.searchBar}
                id="search"
                placeholder="Search a song..."
                required
                />
            <button className={styles.searchButton} type="submit">Search Song</button>
        </form>
    )
}