import React from "react";
import styles from './SearchResults.module.css';
import Track from "../Track/Track";

export default function SearchResults() {
    return (
        <div className={styles.results}>
            <h2>Search Results</h2>
            <div>
                <Track />
            </div>
            
        </div>
    )
}