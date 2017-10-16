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

  // TODO handle form submit create action + reducer
  // Import and persist form to db

  // TODO figure out images

  render() {
    return (
      <div>
        <form onSubmit={console.log('form submitted')}>
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

export default reduxForm({
  form: 'surveyForm',
  destroyOnUnmount: false
})(EventForm);
