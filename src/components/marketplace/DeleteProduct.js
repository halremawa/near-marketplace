import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";
import { utils } from "near-api-js";


const EditProduct = ( {productId, productName, deleteFunc} ) => {
  
  const [show, setShow] = useState(false);

  const handleCloseDelete = () => setShow(false);
  const handleShowDelete = () => setShow(true);


  return (
    <>
      {/* <Button
        onClick={handleShowDelete}
        variant="dark"
        className="rounded-pill px-0"
        style={{ width: "38px" }}
      >
        <i class="bi bi-plus"></i>
      </Button> */}
      <Button
            variant="outline-dark"
            onClick={handleShowDelete}
            className="w-100 py-3"
          >
            Delete
          </Button>
      <Modal show={show} onHide={handleCloseDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <div>
          Are you sure you want to delete product "{productName}"?
        </div>
        <Modal.Footer>
        <Button
            variant="dark"
            onClick={() => {
              deleteFunc(productId);
              handleCloseDelete();
            }}
          >
            Yes
          </Button>
          <Button variant="outline-secondary" onClick={handleCloseDelete}>
            No
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
};

// AddProduct.propTypes = {
//   save: PropTypes.func.isRequired,
// };

export default EditProduct;