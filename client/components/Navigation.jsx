import React from "react";
import styles from "./Navigation.css";

const Navigation = () => (
  <div>
    <div className={styles.topNav}>
      <div className={styles.top}>
        <div className={styles.logo} />

        {/* Search box container, using flex box to keep thing consistent */}
        <div className={styles.search}>
          <span className={styles.inputHeading}> Find </span>
          <input
            className={styles.input}
            type="text"
            placeholder="tacos, cheap dinner, Max"
          />
        </div>
        <div className={`${styles.search} ${styles.place}`}>
          <span className={`${styles.inputHeading} ${styles.divider}`}>
            {" "}
            Near{" "}
          </span>
          <input
            className={styles.input}
            type="text"
            placeholder="Los Angeles, CA"
          />
        </div>

        {/* Search button container */}
        <div className={styles.searchButton}>
          <i className="fas fa-search" />
        </div>

        {/* Login Button container */}
        <button className={styles.loginButton}>Log in</button>

        {/* Sign up button container */}
        <button className={styles.signUpButton}>Sign up</button>
      </div>
    </div>

    {/* Bottom nav container */}
    <div className={styles.bottomNav}>
      <div className={styles.bottom}>
        <div className={styles.categories}> Home services </div>
        <div className={styles.categories}> Restaurants </div>
        <div className={styles.categories}> Auto services </div>
      </div>
    </div>
  </div>
);

export default Navigation;
