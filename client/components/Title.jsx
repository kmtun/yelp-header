import React from "react";
import propTypes from "prop-types";
import styles from "./Title.css";

const Title = ({ name, categories }) => (
  <div className={styles.title}>
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

    <div className={styles.actions}>
      <div className={styles.actionReviews}>
        <i className="fas fa-star" />
        {` Write a review`}
      </div>
      <div className={styles.actionButton}>
        <i className="fas fa-camera" />
        {` Add Photo`}
      </div>
      <div className={styles.actionButton}>
        <i className="far fa-share-square" />
        {` Share`}
      </div>
      <div className={styles.actionButton}>
        <i className="fas fa-bookmark" />
        {` Save`}
      </div>
    </div>
  </div>
);

Title.propTypes = {
  name: propTypes.string.isRequired
  // categories: propTypes.string.isRequired
};

export default Title;
