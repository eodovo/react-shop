import event1 from "../images/event1.gif";
import "./Event.css";
function Event1() {
  return (
    <div>
      <div className="eventBox">
        <img className="eventImage" src={event1} alt="event1" />
      </div>
    </div>
  );
}
export default Event1;
