import React from "react";
import PropTypes from "prop-types";
import styles from "./Description.css";
const Description = ({ address, phone, url }) => (
  <div className={styles.description}>
    <div className={styles.descriptionMap}>
      <img
        className={styles.map}
        src="http://d31v1g4dpg9evw.cloudfront.net/map.jpg"
        alt="map"
      />
      <div className={`${styles.descriptionLinks} ${styles.address}`}>
        <span className={styles.icon}>
          <i className="fas fa-map-marker" />
        </span>
        {address[0]}
        {address[1]}
        {address[2]}
      </div>
    </div>
  </div>
);
Description.propTypes = {
  address: PropTypes.array.isRequired,
  phone: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Description;
