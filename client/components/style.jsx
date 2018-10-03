import React from 'react';
import styled from 'styled-components';

const headerDiv = styled.div`
  vertical-align: baseline;
`;

const header_padding = headerDiv.extend`
  margin-left: -18px;
  margin-right: -18px;
  border-collapse: separate;
  border-spacing: 18px 0px;
`;

//create spacing between logo and seach bar
const header_spacing = header_padding.extend`
margin-left: 9px;
margin-right: 9px;
vertical-algin: middle;
display: table-cell;
`;

const signup_login = styled.a`
border: none;
text-decoration: none;
&:hover{
  background: rgba(51,51,51,0.3);
}
`;
const default_div = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  display: block;
`;

const header = {
  // yelp header background
  h: styled.div`
    margin: 0;
    padding: 12px 0;
    background: #D3231C url(https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_styleguide/15ee41b0c3b2/assets/img/structural/header_stars@2x.png) no-repeat center;
    background-size: 1135px auto, 100%;
  `,

  //wrapper for logo and search boxes
  h_content: styled.div`
    vertical-align: baseline;
    // width: 960px;
    margin: 0 auto;
    padding: 0 15px;

    display: table;
    table-layout: auto;
  `,
  logo: styled.div`
    background-image: url(https://s3-media1.fl.yelpcdn.com/assets/srv0/yelp_design_web/48792dd29811/assets/img/logos_desktop/default.png);
    background-size: 80px 40px;
    width: 80px;
    height: 40px; 
    display: table-cell;
  `,
  search: styled.input`
    display: table-cell;
    width: 285px;
    height: 36px;
    padding: 0 30px;
    line-height: 20px;
    border: none;
    border-radius: 4px;
    vertical-align: middle;
  `,

  search_button: styled.button`
    display: table-cell;  
    width: 54px;
    height: 36px;
    border: none;
    border-radius: 4px;
    vertical-align: middle;
    background: #bd1f1f;
    line-height: 36px;
    font-size:100%;
    color: #fff;
  `,

  divForSignup: styled.div`
    display: inline-block;
    vertical-align: middle;
    height: 36px;
    width: 104px;
    margin: 0 15px 0;
    border: none;
    border-radius: 4px;
    
    text-align: center;
    background: #bd1f1f;
  `,
  signup_button: signup_login.extend`
    color: #fff;
    font-weight: bold;
    line-height: 35px;
  `,

  // STYLING FOR NAV BAR

  //wrapper for whole nav bar
  nav: styled.div` 
    background: #bd1f1f;
    min-width: 1080px;
  `,

  //Need this in order to allign with yelp logo
  nav_content_header: styled.div`
    display: table;
    width: 920px;
    margin: 0 auto;
    padding: 0 15px;
  `,

  //nav bar to hold all a href links
  nav_contents: styled.nav`
    margin-left: -12px; 
    // whitespace: nowrap !important;
  `,

  nav_link_div: styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    display: table-cell;
  `,

  nav_link: styled.a`
    color: #fff;
    display: inline;
    padding: 3px 15px;
    // font-family: monospace;
    font-size: 15px;
    font-weight: bold;
    line-height: 21px;
    border-radius: 3px;
    text-decoration: none;
    &:hover{
      background: rgba(51,51,51,0.3);
      }
  `,

  nav_login_div: styled.div`
    // box-sizing: border-box;
    display: table-cell;
    // vertical-align: top;
    text-align: center;
  `,

  nav_login: signup_login.extend`
    color: #fff;
    // display: inline;
    padding: 0 12px 0;
    font-size: 15px;
    font-weight: bold;
    line-height: 21px;
  `,
}

const rest_details = {
  h: default_div.extend`
    height: 443px;
    width: 960px;
    padding: 3px;
    margin: 0 233px 0;
    z-index: 1;
  `,
  rest_header: default_div.extend`
    width: 960px;
    height: 112px;
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 13px;
  `,

  left_h: default_div.extend`
    width: 545px;
    height: 112px;
    padding-right: 30px;
    display: inline;
  `,
  title_claim_div: default_div.extend`
    margin-top: 6px !important;
    width: 525px;
    height: 42px;
  `,
  ratings_div: default_div.extend`
    margin-top: 15px !important;
    width: 525px;
    height: 24px;
  `,
  rating_stars: default_div.extend`
    background: url(https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_design_web/9b34e39ccbeb/assets/img/stars/stars.png);
    background-size: 132px 560px;
    display: inline-block;
    vertical-align-middle;
    width: 132px;
    height: 24px;
    float: left;
    margin: -4px 6px 0 0;
  `,
  category_div: default_div.extend`
    display: inline-block;
    vertical-align-middle;
    margin-top: 10px !important;
    width: 360px;
    height: 22px;
  `,
  category: styled.a`
    color: #0073bb;
    text-decoration: none;
    font-size: 19px;
  `,
  right_h: default_div.extend`
    width: 405px;
    height: 36px;
    display: inline;
    position: relative !important;
  `,
  divForReviewButton: default_div.extend`
    display: inline-block;
    vertical-align: middle;
    height: 36px;
    width: 158px;
    border-color: #8d0005;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.3);
    background: linear-gradient(#d90007, #c91400);
    margin-right: 12px;
    text-align: center;
  `,
  review_button: styled.a`
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
    line-height: 35px;
    &:hover{
      background: rgba(51,51,51,0.3);
    }
  `,
  spanTagForAction: styled.span`
    width: 224px;
    height: 30px;
    vertical-align: baseline;
    float: right;
    margin-top: 4px;
  `,
  action_button: styled.a`
    padding: 5px 8px;
    height: 17px;
    width: 62px;
    vertical-align: middle;
    background: linear-gradient(#fff, #f7f7f7);
    background-color: #f7f7f7;
    border: 1px solid;
    border-color: #ccc;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    color: #666;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    line-height: 27px;
  `
}


const map_details = styled.li`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
`;

const default_span = styled.span`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
`
const rest_subheader = {
  subH: default_div.extend`
    margin-top: 20px;
    width: 960px;
    height: 318px;
    display: table;
  `,
  mapBox: default_div.extend`
    width: 288px;
    height: 306px;
    padding: 5px;
    background: #fff;
    border: 1px solid #ccc;
    display: table-cell;
    vertical-align: middle;
  `,
  mapImage: styled.img`
    width: 286px;
    height: 135px;
    vertical-align: middle;
  `,
  mapText: default_div.extend`
    width: 288px;
    height: 159px;
  `,
  mapDetails: map_details.extend`
    margin-bottom: 3px;
    position: relative !important;
  `,
  map_icon_spacing: styled.div`
    line-height: 18px;
    margin-left: 24px !important;
    font-size: 100%;
    display: inline-block;
  `,
  icons: default_span.extend`
    width: 18px;
    height: 18px;
    top: 0 !important;
    position: absolute !important;
    display: inline-block;
    vertical-align: middle;
    fill: #666;
  `
}
const defaultPhoto = default_div.extend`
  z-index: 1000;
  position: absolute;
  margin: -15px;
  width: 250px;
  height: 250px;
  box-shadow: none;
  left: 0;
  transform: scale(.88) translateZ(0);
  &:hover{ 
    -webkit-transition: all 0.2s ease-out;
    -webkit-transition-property: transform, box-shadow;
    -webkit-transform: scale(1);
  }
`;

const photos = {
  h: default_div.extend`
    width: 660px;
    height: 318px;
    display: table-cell;
    vertical-align: middle;
  `,
  sub_h: default_div.extend`
    width: 660px;
    height: 220px;
    position: relative;
    transform-style: preserve-3d;
  `,
  left_photo: defaultPhoto.extend`
  `,

  middle_photo: defaultPhoto.extend`
    left: 220px;
    z-index: 1001;
    box-shadow: 0 0 25px -3px rgba(0,0,0,0.5);
    transform: translateZ(1px);
    &:hover{ 
      -webkit-transform: translateZ(5px) !important;
    }
  `,
  right_photo: defaultPhoto.extend`
    left: 440px;
    z-index: 1000;
  `,
}
module.exports = {
  header, rest_details, rest_subheader, photos, header_spacing
};