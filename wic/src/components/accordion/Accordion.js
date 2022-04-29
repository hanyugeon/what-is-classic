import { useState } from "react";
import "./accordion.scss";

const Accordion = (props) => {
  const [active, setActive] = useState(true);

  return (
    <div className={`accordion ${active ? "active" : ""}`}>
      <div className="accordion_title" onClick={() => setActive(!active)}>
        <div className="accordion">{props.title}</div>
      </div>
      <div className="accordion_content">{props.content}</div>
    </div>
  );
};

export default Accordion;
