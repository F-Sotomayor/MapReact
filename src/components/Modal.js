import React from "react";
import "../styles/modal.scss";
import "../styles/logout.scss";

class Modal extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="popModal">
          <div className="modalContainer">
            <div className="modalTitle">¿Que desea reportar?</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
