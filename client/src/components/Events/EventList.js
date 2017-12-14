import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions';
import EventCard from './EventCard';

class EventList extends Component {
  componentDidMount() {
    this.props.fetchEvents();
    console.log(this.props.events);
  }

  renderEvents() {
    return this.props.events.reverse().map(event => {
      return (
        <div key={event._id}>
          <EventCard event={event} />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderEvents()}
      </div>
    );
  }
}

function mapStateToProps({ events }) {
  return {
    events
  };
}

export default connect(mapStateToProps, { fetchEvents })(EventList);

/*
<div className=" blue-grey card darken-1" key={event._id}>
  <div className="card-content white-text">
    <span className="card-title">
      {event.title}
    </span>
    <p>
      {event.description}
    </p>
    <p className="right">
      Posted On: {new Date(event.posted).toLocaleDateString()}
    </p>
  </div>
  <div className="card-action">
    <a>
      Yes: {event.yes}
    </a>
    <a>
      No: {event.no}
    </a>
  </div>
</div>
*/
