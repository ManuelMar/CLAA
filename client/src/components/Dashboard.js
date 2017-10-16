import React from 'react';
import { Link } from 'react-router-dom';
import EventList from './Events/EventList';

const Dashboard = () => {
  return (
    <div>
      <EventList />
      <div className="fixed-action-btn">
        <Link to="/events/new" className="btn-floating btn-large red">
          <i className="large material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
