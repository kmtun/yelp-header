import React from "react";
import styles from "./Navigation.css";

const Navigation = () => (
  <div className={styles.navigation}>
    <div className={styles.top}>
      <div className={styles.logo} />
      <form className={styles.search}>
        Search
        <input type="text" />
      </form>
    </div>
  </div>
);

export default Navigation;
