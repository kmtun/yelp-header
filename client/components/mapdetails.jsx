import React from 'react';
import css from './style.jsx';
const Mapdetails = (props) => {
  return (
    <css.rest_subheader.mapText>
      <ul style={{ margin: '5px', listStyle: 'none', padding: '0', width: '278px', height: '159px' }}>
        {/* li tag for address */}
        <css.rest_subheader.mapDetails>
          {/* span container for icon */}
          <css.rest_subheader.icons>
            <i className="fas fa-map-marker"></i>
          </css.rest_subheader.icons>

          {/* div container to create spacing between icon and details */}
          <css.rest_subheader.map_icon_spacing>
            <strong style={{ fontWeight: 'bold' }}>
              {props.address[0]}  <br /> {props.address[1]}, {props.address[2]}
                      </strong>
            {/* <span> <br /> {props.address[1]} </span> */}
          </css.rest_subheader.map_icon_spacing>
        </css.rest_subheader.mapDetails>

        {/* static */}
        <css.rest_subheader.mapDetails>
          <css.rest_subheader.icons>
            <i className="fas fa-map-signs"></i>
          </css.rest_subheader.icons>
          <css.rest_subheader.map_icon_spacing>
            <a href="/" style={{ color: '#0073bb', textDecoration: 'none' }}> Get Directions </a>
          </css.rest_subheader.map_icon_spacing>
        </css.rest_subheader.mapDetails>

        {/* props.phoneNumber */}
        <css.rest_subheader.mapDetails>
          <css.rest_subheader.icons>
            <i className="fas fa-phone"></i>
          </css.rest_subheader.icons>
          <css.rest_subheader.map_icon_spacing>
            {props.phone}
        </css.rest_subheader.map_icon_spacing>
        </css.rest_subheader.mapDetails>

        {/* props.website */}
        <css.rest_subheader.mapDetails>
          <css.rest_subheader.icons>
            <i className="fas fa-external-link-alt"></i>
          </css.rest_subheader.icons>
          <css.rest_subheader.map_icon_spacing>
            <a href="/" style={{ color: '#0073bb', textDecoration: 'none' }}> {props.url} </a>
          </css.rest_subheader.map_icon_spacing>
        </css.rest_subheader.mapDetails>

        {/* static */}
        <css.rest_subheader.mapDetails>
          <css.rest_subheader.icons>
            <i className="fas fa-comment-alt"></i>
          </css.rest_subheader.icons>
          <css.rest_subheader.map_icon_spacing>
            <a href="/" style={{ color: '#0073bb', textDecoration: 'none' }}> Message the business </a>
          </css.rest_subheader.map_icon_spacing>
        </css.rest_subheader.mapDetails>

        {/* static */}
        <css.rest_subheader.mapDetails>
          <css.rest_subheader.icons>
            <i className="fas fa-mobile-alt"></i>
          </css.rest_subheader.icons>
          <css.rest_subheader.map_icon_spacing>
            <a href="/" style={{ color: '#0073bb', textDecoration: 'none' }}> Send to your Phone </a>
          </css.rest_subheader.map_icon_spacing>
        </css.rest_subheader.mapDetails>

      </ul>
    </css.rest_subheader.mapText>
  );
}
export default Mapdetails;