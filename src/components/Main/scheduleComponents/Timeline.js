import React from "react";
import { SCHEDULE_EVENTS } from "../../Content";

const timeline = () => {
  const events = SCHEDULE_EVENTS.map((event, index) => (
    <div className="event" key={event.id}>
      <div className="hour">{event.hour}</div>
      <div className="dot"></div>
      <div className="event-informations">
        <ul>
          {event.description.trim().length > 0 ? (
            <li>
              <h3>{event.description}</h3>
            </li>
          ) : (
            ""
          )}
          {event.list.map((elem) => (
            <li>{elem}</li>
          ))}
        </ul>
      </div>
    </div>
  ));

  return (
    <div className="timeline">
      <div className="line"></div>
      <div className="events">{events}</div>
    </div>
  );
};

export default timeline;
