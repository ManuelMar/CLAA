import _ from 'lodash';
import React from 'react';

const EventReviewForm = props => {
  return (
    <div>
      <label>form info blah</label>
      <button
        onClick={props.onBack}
        className=" white-text darken-2 btn-flat red"
      >
        Back
      </button>
      <button
        onClick={console.log('submit event: invoke action submitEvent')}
        className=" white-text darken-2 btn-flat blue"
      >
        <i className="material-icons">done</i>
        Submit
      </button>
    </div>
  );
};

export default EventReviewForm;
