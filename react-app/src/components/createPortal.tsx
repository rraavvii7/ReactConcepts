import React, { useState } from "react";
import { createPortal as CreatePortal } from "react-dom";

function UnderstandingPortal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setShowModal(!showModal)}
      >
        Toggle Modal
      </button>
      {showModal &&
        CreatePortal(
          <div>
            This is rendered using createPortal api of react-dom libraby which
            provideds DOM specific methods such as render, createPortal,
            hydrate.
            <p>
              Hydrate is similar to render function. Only difference is that it
              is used for server side rendering.
            </p>
          </div>,
          document.body
        )}
    </div>
  );
}

export default UnderstandingPortal;
