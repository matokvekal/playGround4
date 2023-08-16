import React from 'react'
import  "./Modal.css"
import { useStore } from "zustand";
import useDataStore from "../../states/zustand";


const Modal = () => {
  const { toggleModal ,modalState} = useStore(useDataStore);


  return (
      <>
          {modalState && (
              <div className="modal-overlay modal-active"></div>
          )}
          <div className={`modal ${modalState ? 'modal-active' : ''}`}>
              <button className="modal-close" onClick={toggleModal}>&times;</button>
              <div className="modal-header">
                    Climate Awareness
                </div>
                <div className="modal-body">
                    Our planet's climate is changing at an unprecedented rate, driven by human activities such as deforestation, and the burning of fossil fuels. Understanding and addressing these changes is crucial for the well-being of all living creatures. Join us in spreading awareness and making a change for a sustainable future.
                </div>
                <div className="modal-footer">
                    <button className="modal-close" onClick={toggleModal}>Close</button>
                </div>
          </div>
      </>
  );
}






export default Modal