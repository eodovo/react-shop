import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import "./Event.css";

function Event({ fadeAni }) {
  const [fade, setFade] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, [fadeAni]);
  return (
    <div className={"row gx-0 fadeAni " + fade}>
      <h2 className="menuHeader">EVENT</h2>
      <p className="introSubtitle">Meet a variety of events!</p>
      <div className="eventBanner row">
        <Link className="event1 com-md-auto" to="/react/event/event1" />
        <Link className="event2 com-md-auto" to="/react/event/event2" />
        <Link className="event3 com-md-auto" to="/react/event/event3" />
      </div>

      <Outlet></Outlet>
    </div>
  );
}
export default Event;
