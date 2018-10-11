import React from "react";
import { Component } from "react";
import $ from "jquery";
import axios from "axios";

import styles from "./Header.css";
import Navigation from "./Navigation.jsx";
import Title from "./Title.jsx";
import Description from "./Description.jsx";
import Photobox from "./Photobox.jsx";

const dbURL = "http://localhost:3000";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: [],
      phone: "",
      url: "",
      categories: []
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
          categories: data.categories
        });
      })
      .catch(err => {
        console.log("Err in getRestaurant: ", err);
      });
  }
  render() {
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
          <Photobox />
        </div>
      </div> // main div components
    );
  }
}

export default Header;
