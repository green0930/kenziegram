import React from "react";
import { Modal, Button } from "react-bootstrap";

import { BCard } from "../card/BCard";
import "./BModal.css";

export const BModal = (props) => {
  console.log(props)
  return (
    <>
      <Modal show={props.show} onHide={() => props.handleClose()}>
        <div className="modalClass">
          <BCard src={props.pic} imgSize={props.imgSize} />
        </div>

        <div className="cardClass">
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};
export default BModal;
