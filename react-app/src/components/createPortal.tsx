import React, { useState } from "react";
import { createPortal as CreatePortal } from "react-dom";

function UnderstandingPortal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <h4>
        ReactDOM.createPortal is for rendering content into a specific DOM node
        outside the main React tree
      </h4>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setShowModal(!showModal)}
      >
        Toggle Modal
      </button>
      {showModal &&
        CreatePortal(
          <>
            This is rendered using createPortal api of react-dom libraby which
            provideds DOM specific methods such as render, createPortal,
            hydrate.
            <p>
              Hydrate is similar to render function. Only difference is that it
              is used for server side rendering.
            </p>
          </>,
          document.getElementById("portal")
        )}
    </div>
  );
}

export default UnderstandingPortal;
