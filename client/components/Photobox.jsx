import React from "react";
import styles from "./Photobox.css";

const Photobox = () => (
  <div className={styles.photos}>
    <div className={styles.left}>
      <a href="/">
        <img
          className={styles.large}
          src="http://d31v1g4dpg9evw.cloudfront.net/yelp1.jpg"
          alt="left"
        />
      </a>
    </div>
    <div className={styles.right}>
      <a href="/">
        <img
          className={styles.small}
          src="http://d31v1g4dpg9evw.cloudfront.net/yelp3.jpg"
          alt="small1"
        />
      </a>
      <a href="/">
        <img
          className={styles.small}
          src="http://d31v1g4dpg9evw.cloudfront.net/yelp4.jpg"
          alt="small2"
        />
      </a>
      <a href="/">
        <img
          className={styles.small}
          src="http://d31v1g4dpg9evw.cloudfront.net/yelp5.jpg"
          alt="small3"
        />
      </a>
      <a href="/">
        <img
          className={styles.small}
          src="http://d31v1g4dpg9evw.cloudfront.net/yelp6.jpg"
          alt="small4"
        />
      </a>
    </div>
    <div className={styles.middle}>
      <a href="/">
        <img
          className={styles.large}
          src="http://d31v1g4dpg9evw.cloudfront.net/yelp2.jpg"
          alt="middle"
        />
      </a>
    </div>
  </div>
);

export default Photobox;
