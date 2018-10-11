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

      <div className={styles.descriptionLinks}>
        <span className={styles.icon}>
          <i className="fas fa-map-marker" />
        </span>
        <strong className={styles.address}>
          {address[0]} <br />
          {/* {address[1]}, {address[2]} */}
        </strong>
      </div>

      <div className={styles.descriptionLinks}>
        <span className={styles.icon}>
          <i className="fas fa-map-signs" />
        </span>
        <a className={styles.text} href="/">
          Get Directions
        </a>
      </div>

      <div className={styles.descriptionLinks}>
        <span className={styles.icon}>
          <i className="fas fa-phone" />
        </span>
        {phone}
      </div>

      <div className={styles.descriptionLinks}>
        <span className={styles.icon}>
          <i className="fas fa-external-link-alt" />
        </span>
        <a className={styles.text} href="/">
          {url}
        </a>
      </div>

      <div className={styles.descriptionLinks}>
        <span className={styles.icon}>
          <i className="fas fa-mobile-alt" />
        </span>
        <a className={styles.text} href="/">
          Send to your Phone
        </a>
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
