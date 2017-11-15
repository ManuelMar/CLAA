import React, { Component } from 'react';
import EventForm from './EventForm';
import EventReviewForm from './EventReviewForm';
import { reduxForm } from 'redux-form';

// TODO handle form submit create action + reducer
// Import and persist form to db

// TODO Form validation

// TODO Display Form values in Review form

// TODO figure out images

class EventNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: true
    };
  }

  renderPage() {
    if (this.state.showForm) {
      return (
        <EventForm onEventReview={() => this.setState({ showForm: false })} />
      );
    }
    return (
      <EventReviewForm
        onBack={() => {
          this.setState({ showForm: true });
        }}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderPage()}
      </div>
    );
  }
}
export default reduxForm({ form: 'eventForm' })(EventNew);
