import { Link, Outlet } from "react-router-dom";
import "./Event.css";
function Event() {
  return (
    <div>
      <h2 className="menuHeader">EVENT</h2>
      <p>Meet a variety of events!</p>
      <div className="eventBanner">
        <Link className="event1" to="/event/event1"></Link>
        <Link className="event2" to="/event/event2"></Link>
        <Link className="event3" to="/event/event3"></Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
export default Event;
