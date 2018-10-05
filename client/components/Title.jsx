import React from "react";
import propTypes from "prop-types";
import styles from "./Title.css";

const Title = ({ name, categories }) => (
  <div className={styles.title}>
    {console.log(categories)}
    <div>
      <span className={styles.name}> {name} </span>
      <span className={styles.claimed}>
        <i className="far fa-check-circle" />
        {` Claimed`}
      </span>
      <div className={styles.reviewsContainer}>
        <div className={styles.stars} />
        <span className={styles.reviews}>46 Reviews</span>
      </div>
      <div className={styles.categories}>
        <span className={styles.dollar}>$$ &#183;</span>
        <a className={styles.category} href="/">{` ${categories} `}</a>
      </div>
    </div>
  </div>
);

Title.propTypes = {
  name: propTypes.string.isRequired
  // categories: propTypes.string.isRequired
};

export default Title;
