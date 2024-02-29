import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./CreatePlaylist.module.css";
import SearchResults from "../SearchResults/SearchResults";
import AddedSongs from "../AddedSongs/AddedSongs";

export default function CreatePlaylist() {
  const [isSongSearchOpen, setIsSongSearchOpen] = useState(false);

  const openSongSearch = () => {
    setIsSongSearchOpen(true);
    console.log(isSongSearchOpen);
  };

  const closeSongSearch = () => {
    setIsSongSearchOpen(false);
  };

  return (
    <div>
      {!isSongSearchOpen ? (
        <button onClick={openSongSearch}>
          Create Playlist
          <br />
          <span className={styles.plus}>+</span>
        </button>
      ) : (
        <>
          <div className={styles.createPlaylistContainer}>
            <SearchBar />
          <div className={styles.resultsFlexContainer}>
            <SearchResults />
            <AddedSongs />
          </div>
          <button className={styles.backButton} onClick={closeSongSearch}>Back</button>
          </div>
          
        </>
      )}
    </div>
  );
}
