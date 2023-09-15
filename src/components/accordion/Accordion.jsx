import './accordion.scss'
import arrowUp from '/assets/arrow_up.png?url';
import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <>
      {title && content && (
        <div className={`accordion ${open ? 'is-open' : ''}`} aria-expanded={open}>
          <div className="accordion__title"
               onClick={() => toggle()}
          >
            <div className="h3">{title}</div>
            <img className="accordion__logo"
                 src={arrowUp} alt='arrow icon'
            />
          </div>
          <div className="accordion__content"
               aria-hidden={!open}>
            <p>{content}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Accordion;