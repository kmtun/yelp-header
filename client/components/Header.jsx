import React from "react";
import { Component } from "react";
import css from "./style.jsx";
import $ from "jquery";
import axios from "axios";
import styles from "./Header.css";
import Navigation from "./Navigation.jsx";
import Mapdetails from "./mapDetails.jsx";
import MapBox from "./mapBox.jsx";
import Photos from "./photos.jsx";
import ResHeader from "./restHeader.jsx";

const dbURL = "http://localhost:3000";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      static_nav_links: ["Restaurants", "Nightlife", "Home Services"],
      static_nav_links_2: ["Write a review", "Events", "Talk", "Collections"],
      name: "",
      address: [],
      phone: "",
      url: "",
      google_map: "",
      categories: [],
      actions: ["Add Photo", "Share", "Save"]
    };
  }

  componentWillMount() {
    this.getRestaurant(4);
  }

  getRestaurant(id) {
    // axios.get(dbURL + '/api/fetchRestaurant/' + id)
    axios
      .get(dbURL + "/api/fetchRestaurant/" + id)
      .then(({ data }) => {
        // const data = res.data;
        // console.log(data);
        this.setState({
          name: data.name,
          address: data.address,
          phone: data.phone_number,
          url: data.url,
          google_map: data.google_map,
          categories: data.categories
        });
      })
      .catch(err => {
        console.log("Err in getRestaurant: ", err);
      });
  }
  render() {
    const nav_bar_icons = [
      "fas fa-utensils",
      "fas fa-glass-martini",
      "fas fa-screwdriver"
    ];
    const action_icons = [
      "fas fa-camera",
      "far fa-share-square",
      "fas fa-bookmark"
    ];
    return (
      <div>
        <Navigation />

        {/* Container for restaurant header */}
        <css.rest_details.h>
          <css.rest_details.rest_header>
            <css.rest_details.left_h>
              {/* Container to hold title and claim status */}
              <css.rest_details.title_claim_div>
                <h1
                  style={{
                    fontSize: "38px",
                    fontWeight: "bold",
                    display: "inline",
                    paddingRight: "10px"
                  }}
                >
                  {this.state.name}
                </h1>

                <div style={{ display: "inline-block" }}>
                  <span
                    style={{
                      width: "18px",
                      height: "18px",
                      paddingRight: "10px"
                    }}
                  >
                    <i className="far fa-check-circle" />
                  </span>
                  Claimed
                </div>
              </css.rest_details.title_claim_div>

              {/* Container to hold stars and reviews count */}
              <css.rest_details.ratings_div>
                <css.rest_details.rating_stars
                  style={{ backgroundPosition: "0 -192px" }}
                />
                <span style={{ color: "#666" }}> 46 Reviews </span>
              </css.rest_details.ratings_div>

              <css.rest_details.category_div>
                <span style={{ letterSpacing: "1px" }}> $$ &#183; </span>
                {this.state.categories.map((value, index) => (
                  <css.rest_details.category href="/" key={index}>
                    {" "}
                    {value}{" "}
                  </css.rest_details.category>
                ))}
              </css.rest_details.category_div>
            </css.rest_details.left_h>

            <css.rest_details.right_h>
              <css.rest_details.divForReviewButton>
                <css.rest_details.review_button href="/">
                  <i className="fas fa-star" /> Write a review
                </css.rest_details.review_button>
              </css.rest_details.divForReviewButton>

              <css.rest_details.spanTagForAction>
                {this.state.actions.map((value, index) => (
                  <css.rest_details.action_button key={index} href="/">
                    <i className={action_icons[index]} /> {value}
                  </css.rest_details.action_button>
                ))}
              </css.rest_details.spanTagForAction>
            </css.rest_details.right_h>
          </css.rest_details.rest_header>

          {/* Container for mapbox and photos */}
          <css.rest_subheader.subH>
            {/* Container for mapBox and directions and details */}
            <css.rest_subheader.mapBox>
              <MapBox map={this.state.google_map} />

              {/* Map details */}
              <Mapdetails
                address={this.state.address}
                phone={this.state.phone}
                url={this.state.url}
              />
            </css.rest_subheader.mapBox>

            {/* photos */}
            <Photos />
          </css.rest_subheader.subH>
        </css.rest_details.h>
      </div> // main div components
    );
  }
}

export default Header;
