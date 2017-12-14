import React from 'react';

const EventCard = props => {
  return (
    <div>
      <div className=" blue-grey card medium darken-1" key={props.event._id}>
        <div className="card-content white-text">
          <span className="card-title">
            {props.event.title}
          </span>
          <p>
            {props.event.description}
          </p>
          <p className="right">
            Posted On: {new Date(props.event.posted).toLocaleDateString()}
          </p>
        </div>
        <div className="card-image">
          <img src={props.event.image} />
        </div>
        <div className="card-action">
          <a>
            Attending: {props.event.yes}
          </a>
          <a>
            No: {props.event.no}
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
