import React from "react";

function timeline() {
  return (
    <div className="timeline">
      <div className="line"></div>
      <div className="events">
        <div className="event hour-on-left-event">
          <div className="hour">10:00</div>
          <div className="dot"></div>
          <div className="event-informations">
            <ul>
              <li>
                <h3>Przyjazd gości</h3>
              </li>
              <li>Otwarcie eventu</li>
              <li>Prelekcja 'O studiowaniu na WiiT'</li>
              <li>Rozpoczęcie wycieczek</li>
            </ul>
          </div>
        </div>
        <div className="schedule__gradient-line right" />
        <div className="event hour-on-right-event">
          <div className="event-informations">
            <ul>
              <li>Prelekcja 'Języki Programowania'</li>
              <li>Prelekcja 'Nasz robot'</li>
              <li>Rozpoczęcie wyścigów Line Followerów</li>
            </ul>
          </div>
          <div className="dot"></div>
          <div className="hour">11:00</div>
        </div>
        <div className="schedule__gradient-line left" />
        <div className="event hour-on-left-event">
          <div className="hour">12:00</div>
          <div className="dot"></div>
          <div className="event-informations">
            <ul>
              <li>Prelekcje przygotowane przez studentów</li>
              <li>Konkursy drużynowe i indywidualne</li>
            </ul>
          </div>
        </div>
        <div className="schedule__gradient-line right" />
        <div className="event hour-on-right-event">
          <div className="event-informations">
            <ul>
              <li>Zakończenie wyścigów Line Followerów</li>
              <li>Ogłoszenie wyników oraz rozdanie nagrów</li>
            </ul>
          </div>
          <div className="dot"></div>
          <div className="hour">13:00</div>
        </div>
        <div className="schedule__gradient-line left" />

        <div className="event hour-on-left-event">
          <div className="hour">14:00</div>
          <div className="dot"></div>
          <div className="event-informations">
            <ul>
              <li>
                <h3>Zakończenie RoboDay2023</h3>
              </li>
            </ul>
          </div>
        </div>

        <div className="schedule__gradient-line right" />
      </div>
    </div>
  );
}

export default timeline;
