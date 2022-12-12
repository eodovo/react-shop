import { Link, Outlet } from "react-router-dom";
import "./Event.css";
function Event() {
  return (
    <div className="row gx-0">
      <h2 className="menuHeader">EVENT</h2>
      <p>Meet a variety of events!</p>
      <div className="eventBanner row">
        <Link className="event1 com-md-auto" to="/event/event1"></Link>
        <Link className="event2 com-md-auto" to="/event/event2"></Link>
        <Link className="event3 com-md-auto" to="/event/event3"></Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
export default Event;
