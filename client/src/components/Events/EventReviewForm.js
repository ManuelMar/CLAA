import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import eventFormFields from './eventFormFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const EventReviewForm = props => {
  const reviewEventFields = _.map(eventFormFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>
          {label}
        </label>
        <div>
          {props.formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div>
      <label>New Event:</label>
      {reviewEventFields}
      <button
        onClick={props.onBack}
        className=" white-text darken-2 btn-flat red"
      >
        Back
      </button>
      <button
        onClick={() => props.submitEvent(props.formValues, props.history)}
        className=" white-text darken-2 btn-flat blue"
      >
        <i className="material-icons">done</i>
        Submit
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.eventForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(EventReviewForm));
