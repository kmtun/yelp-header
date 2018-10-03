import React from 'react';
import { Component } from 'react';
import css from './style.jsx';

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftPhoto: [],
      middlePhoto: [],
      rightPhoto: [],
    }
  }
  render() {
    return (
      <css.photos.h>
        <css.photos.sub_h>

          <css.photos.left_photo>
            <a href="/">
              <img height="250" src="https://s3-us-west-1.amazonaws.com/photo-header/Images/yelp1.jpg" width="250" />
            </a>
          </css.photos.left_photo>

          <css.photos.middle_photo>
            <a href="/">
              <img height="250" src="https://s3-us-west-1.amazonaws.com/photo-header/Images/yelp2.jpg" width="250" />
            </a>
          </css.photos.middle_photo>

          <css.photos.right_photo>
            <a href="/">
              <img height="125" style={{ float: 'left' }} src="https://s3-us-west-1.amazonaws.com/photo-header/Images/yelp3.jpg" width="125" />
            </a>
            <a href="/">
              <img height="125" style={{ float: 'left' }} src="https://s3-us-west-1.amazonaws.com/photo-header/Images/yelp4.jpg" width="125" />
            </a>
            <a href="/">
              <img height="125" style={{ float: 'left' }} src="https://s3-us-west-1.amazonaws.com/photo-header/Images/yelp5.jpg" width="125" />
            </a>
            <a href="/">
              <img height="125" style={{ float: 'left' }} src="https://s3-us-west-1.amazonaws.com/photo-header/Images/yelp6.jpg" width="125" />
            </a>
          </css.photos.right_photo>
        </css.photos.sub_h>
      </css.photos.h>
    )
  }
}

export default Photos;