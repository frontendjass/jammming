import React from "react";
import styles from './AddedSongs.module.css';

export default function AddedSongs() {
    return (
        <div className={styles.addedSongsContainer}>
            <h2>Added Songs:</h2>
            <button>Sync to spotify</button>
        </div>
    )
}