import React from "react";
import { useState } from "react";
import AdminModal from "../AdminModal/AdminModal";
import "./Brand.scss";
import { Button, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  createBrand,
  deleteBrand,

} from "../../../redux/reduxAction/action.js";
import swal from "sweetalert";

const Brands = () => {
  const [brandModal, setBrandModal] = useState(false);
  const [input, setInput] = useState("");
  const [logo, setLogo] = useState(null);

  // get data from redux store
  const { brands } = useSelector((state) => state.shop);

  //declear redux function
  const dispatch = useDispatch();


  // handle show modal
  const handleShowModal = () => {
    setBrandModal(true);
  };

  // upload image or logo
  const handleUploadLogo = (e) => {
    setLogo(e.target.files[0]);
  };

  // handle submit form
  const handleSubmitForm = async (e) => {
    e.preventDefault();

    // create from data
    const form_data = new FormData();

    form_data.append("name", input);
    form_data.append("brand-photo", logo);

    dispatch(
      createBrand({ data: form_data, setBrandModal, setLogo, setInput })
    );

    e.target.reset();
  };

  // handle delete brands

  const handleDeleteBrands = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteBrand(id));
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

 

  return (
    <div className="admin-brands">
      <div className="admin-brands-page">
        <div className="admin-brands-wrapper">
          <AdminModal
            show={brandModal}
            onHide={() => setBrandModal(false)}
            title="Create New Brand"
          >
            <Form onSubmit={handleSubmitForm}>
              <Form.Group className="mb-3">
                <Form.Label>Brand name</Form.Label>
                <Form.Control
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Brand logo</Form.Label>
                <Form.Control onChange={handleUploadLogo} type="file" />
              </Form.Group>
              <hr />
              {logo && (
                <img
                  style={{ maxWidth: "100%", marginBottom: "10px" }}
                  src={URL.createObjectURL(logo)}
                  alt=""
                />
              )}
              <Button variant="primary" type="submit">
                Add brand
              </Button>
            </Form>
          </AdminModal>
          <div className="brands-title">
            <h2>Brands</h2>
          </div>
          <div className="brands-content">
            <button onClick={handleShowModal}>
              <i class="bx bx-plus"></i>Create brands{" "}
            </button>
          </div>
        </div>
        <Table className="my-5">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Slug</th>
              <th>Logo</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="align-middle">
            {brands.map(({ name, slug, photo, _id, status }, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{slug}</td>
                  <td>
                    <img
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                      }}
                      src={`http://localhost:5050/brand/${photo}`}
                      alt=""
                    />
                  </td>
                  <td>
                    <Form>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        label=""
                        checked={status}
                      />
                    </Form>
                  </td>
                  <td>
                    <button className="btn btn-info btn-sm">
                      <i class="bx bxs-edit"></i>
                    </button>
                    &nbsp;
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeleteBrands(_id)}
                    >
                      <i class="bx bxs-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Brands;
