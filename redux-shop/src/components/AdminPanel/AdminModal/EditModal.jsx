import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateBrand } from "../../../redux/reduxAction/action";

const EditModal = ({
  show,
  onHide,
  dataId,
  edit,
  setEdit,
  logo,
  brandModal,
}) => {
  const { brands } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  // handle change logo

  const [editLogo, setEditLogo] = useState(null);

  // handleChange logo
  const handleChangeLogo = (e) => {
    setEditLogo(e.target.files[0]);
  };
  // handlesubmit edit Button
  console.log(brandModal.dataId);
  const handleSubmitEdit = (e) => {
    e.preventDefault();
    const edit_data = new FormData();
    edit_data.append("name", edit.name);
    edit_data.append("photo", editLogo ? editLogo : edit.photo);
    edit_data.append("brand-photo", logo);

    dispatch(
      updateBrand({
        data: edit_data,
        id: brandModal.dataId,
        onHide,
        setEdit,
      })
    );
    e.target.reset();
  };
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Brands</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmitEdit}>
          <Form.Group className="mb-3">
            <Form.Label>Edit brand name</Form.Label>
            <Form.Control
              value={edit.name}
              onChange={(e) =>
                setEdit((prevState) => ({ ...prevState, name: e.target.value }))
              }
              type="text"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Change brand logo</Form.Label>
            <Form.Control onChange={handleChangeLogo} type="file" />
          </Form.Group>
          <hr />
          { logo && <img
            style={{
              width: "100%",
              marginBottom: "10px",
              height: "250px",
              objectFit: "contain",
            }}
            src={
              `http://localhost:5050/brand/${edit.photo}`
                ? `http://localhost:5050/brand/${edit.photo}`
                : URL.createObjectURL(editLogo)
            }
            alt=""
          />}
          

          {
            <Button variant="primary" type="submit">
              Edit Brand
            </Button>
          }
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditModal;

{
  /* <EditModal
            show={editBrands}
            onHide={setEditBrands}
            edit={edit}
            setEdit={setEdit}
            logo={logo}
            brandModal={brandModal}
          /> */
}
