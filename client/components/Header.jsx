import React from "react";
import { Component } from "react";
import $ from "jquery";
import axios from "axios";

import styles from "./Header.css";
import Navigation from "./Navigation.jsx";
import Title from "./Title.jsx";
import Description from "./Description.jsx";

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
        console.log(data);
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
    // const address = this.state.address.join(" ");
    // console.log(address);
    return (
      <div>
        <Navigation />
        <Title
          name={this.state.name}
          categories={this.state.categories.join(" ")}
        />
        <div className={styles.main}>
          <Description
            address={this.state.address}
            phone={this.state.phone}
            url={this.state.url}
          />
        </div>
      </div> // main div components
    );
  }
}

export default Header;
