import React from 'react';
import css from './style.jsx';
const MapBox = (props) => {
  return (
    <css.rest_subheader.mapImage src={props.map}>
    </css.rest_subheader.mapImage>
  );
}
export default MapBox;