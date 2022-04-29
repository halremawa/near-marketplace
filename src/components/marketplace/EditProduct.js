import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";
import { utils } from "near-api-js";


const EditProduct = ( prop ) => {
  const [name, setName] = useState(prop.product.name);
  const [image, setImage] = useState(prop.product.image);
  const [description, setDescription] = useState(prop.product.description);
  const [location, setLocation] = useState(prop.product.location);
  const [price, setPrice] = useState(utils.format.formatNearAmount(prop.product.price));
  const id=prop.product.id;
  const sold=prop.product.sold;
  const isFormFilled = () => name && image && description && location && price;

  const [show, setShow] = useState(false);

  const handleCloseEdit = () => setShow(false);
  const handleShowEdit = () => setShow(true);

  const triggerEdit = () => {
    prop.save({
      id,
      name,
      image,
      description,
      location,
      price,
    });
  };

  return (
    <>
      {/* <Button
        onClick={handleShowEdit}
        variant="dark"
        className="rounded-pill px-0"
        style={{ width: "38px" }}
      >
        <i class="bi bi-plus"></i>
      </Button> */}
      <Button
            variant="outline-dark"
            onClick={handleShowEdit}
            className="w-100 py-3"
          >
            Edit
          </Button>
      <Modal show={show} onHide={handleCloseEdit} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <FloatingLabel
              controlId="inputName"
              label={"Product name"}
              className="mb-3"
            >
              <Form.Control
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                //placeholder={name}
                placeholder="Name of product"
                value={name}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputUrl"
              label="Image URL"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Image URL"
                onChange={(e) => {
                  setImage(e.target.value);
                }}
                // placeholder={imageurl}
                value={image}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputDescription"
              label="Description"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="description"
                style={{ height: "80px" }}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                // placeholder={description}
                value={description}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputLocation"
              label="Location"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Location"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                // placeholder={location}
                value={location}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputPrice"
              label="Price"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                // placeholder={price}
                value={price}
              />
            </FloatingLabel>
          </Modal.Body>
        </Form>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button
            variant="dark"
            disabled={!isFormFilled()}
            onClick={() => {
              prop.save({
                id,
                name,
                image,
                description,
                location,
                price,
                sold,
              });
              handleCloseEdit();
            }}
          >
            Update product
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