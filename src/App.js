import React from "react";
import AppTitle from "./components/AppTitle/AppTitle";
import styles from './App.module.css'
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.backgroundBlur}></div>
      <AppTitle />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
