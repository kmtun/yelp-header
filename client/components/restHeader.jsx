import React from 'react';
import css from './style.jsx';
const RestHeader = (props) => {
  return (
    <css.rest_details.rest_header>
      <css.rest_details.left_h>

        {/* Container to hold title and claim status */}
        <css.rest_details.title_claim_div>
          <h1 style={{ fontSize: '38px', fontWeight: 'bold', display: 'inline', paddingRight: '10px' }}>
            Urbane Cafe
              </h1>

          <div style={{ display: 'inline-block' }}>
            <span style={{ width: '18px', height: '18px', paddingRight: '10px' }}>
              <i className="far fa-check-circle"></i>
            </span>
            Claimed
              </div>
        </css.rest_details.title_claim_div>

        {/* Container to hold stars and reviews count */}
        <css.rest_details.ratings_div>
          <css.rest_details.rating_stars style={{ backgroundPosition: '0 -192px' }}>
          </css.rest_details.rating_stars>
          <span style={{ color: '#666' }}> 46 Reviews </span>
        </css.rest_details.ratings_div>

        <css.rest_details.category_div>
          <span style={{ letterSpacing: '1px' }}> $$   &#183; </span>
          {this.state.categories.map((value, index) => (
            <css.rest_details.category href="/" key={index}> {value} </css.rest_details.category>
          ))}
        </css.rest_details.category_div>

      </css.rest_details.left_h>

      <css.rest_details.right_h>

        <css.rest_details.divForReviewButton>
          <css.rest_details.review_button href="/">
            <i className="fas fa-star"></i> Write a review
                </css.rest_details.review_button>

        </css.rest_details.divForReviewButton>

        <css.rest_details.spanTagForAction>
          {this.state.actions.map((value, index) => (
            <css.rest_details.action_button key={index} href="/">
              <i className={action_icons[index]}></i> {value}
            </css.rest_details.action_button>
          ))}
        </css.rest_details.spanTagForAction>


      </css.rest_details.right_h>

    </css.rest_details.rest_header>
  );
}
export default RestHeader;