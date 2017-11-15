import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import EventField from './EventField';
import eventFormFields from './eventFormFields';
import { Link } from 'react-router-dom';

class EventForm extends Component {
  renderFields() {
    return _.map(eventFormFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          name={name}
          component={EventField}
          type="text"
          label={label}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onEventReview)}>
          {this.renderFields()}
          <Link to="/events">Cancel</Link>
          <button type="submit" className="right white-text teal btn-flat ">
            Review
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(eventFormFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'eventForm',
  destroyOnUnmount: false
})(EventForm);
