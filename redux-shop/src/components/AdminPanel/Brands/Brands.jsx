import React from "react";
import { useState } from "react";
import AdminModal from "../AdminModal/AdminModal";
import "./Brand.scss";
import { Button, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  createBrand,
  deleteBrand,
  updateBrand,
  updateStatus,
} from "../../../redux/reduxAction/action.js";
import swal from "sweetalert";

// show hide conditional modal edit & create
const Brands = () => {


   // get data from redux store
   const { brands } = useSelector((state) => state.shop);

   // create modal type
  const [brandModal, setBrandModal] = useState({
    show: false,
    type: "create",
    dataId: null,
  });

  //when edit brand value
  const [edit, setEdit] = useState({
    name: "",
    photo: "",
  });

console.log(edit.name, edit.photo)
  // declear useState for
  const [input, setInput] = useState("");
  const [logo, setLogo] = useState(null);
  const [editLogo, setEditLogo] = useState(null);
 


  //declear redux function
  const dispatch = useDispatch();

  // handle show modal
  const handleShowModal = () => {
    setBrandModal((prevState) => ({
      ...prevState,
      show: true,
      type: "create",
    }));
  };

  // upload image or logo
  const handleUploadLogo = (e) => {
    if (brandModal.type === "create") {
      setLogo(e.target.files[0]);
    } else if (brandModal.type === "edit") {
      setEditLogo(e.target.files[0]);
    }
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

  // handle status update
  const handleStatusUpdate = (id, status) => {
    dispatch(updateStatus({ id, status: !status }));
  };

  // edit brand modal

  // const [editBrands, setEditBrands] = useState(false);
  // handle edit brand
  const handleEditBrand = (id) => {
    setBrandModal((prevState) => ({
      ...prevState,
      show: true,
      type: "edit",
      dataId: id,
    }));
  
    const editData = brands.find((data) => data._id === id);
    setEdit(editData);
  };

  // instant logo updater
  const handleUpadteBrandLogo = () => {
    setBrandModal({ show: false });
    setEditLogo(null);
  };

  // handle submit form
  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (brandModal.type === "create") {
      // create from data
      const form_data = new FormData();

      form_data.append("name", input);
      form_data.append("brand-photo", logo);

      dispatch(
        createBrand({ data: form_data, setBrandModal, setLogo, setInput })
      );
    
      e.target.reset();
    } else if (brandModal.type === "edit") {
      // edit brand photo data
      dispatch(
        updateBrand({
          id: brandModal.dataId,
          name: edit?.name,
          photo: editLogo,
        })
      );
      e.target.reset();
    }
  };
  return (
    <div className="admin-brands">
      <div className="admin-brands-page">
        <div className="admin-brands-wrapper">
          <AdminModal
            show={brandModal.show}
            onHide={() => handleUpadteBrandLogo()}
            title={
              brandModal.type === "create" ? "Create new Brand" : "Edit brands"
            }
            type={brandModal.type}
            dataId={brandModal.dataId}
          >
            <Form onSubmit={handleSubmitForm}>
              <Form.Group className="mb-3">
                <Form.Label>Brand name</Form.Label>
                <Form.Control
                  value={brandModal.type === "create" ? input : edit.name}
                  onChange={
                    brandModal.type === "create"
                      ? (e) => setInput(e.target.value)
                      : (e) =>
                          setEdit((prevState) => ({
                            ...prevState,
                            name: e.target.value,
                          }))
                  }
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Brand logo</Form.Label>
                <Form.Control onChange={handleUploadLogo} type="file" />
              </Form.Group>
              <hr />
              {brandModal.type === "create"
                ? logo && (
                    <img
                      style={{
                        width: "100%",
                        marginBottom: "10px",
                        height: "250px",
                        objectFit: "contain",
                      }}
                      src={URL.createObjectURL(logo)}
                      alt=""
                    />
                  )
                : edit?.photo && (
                    <img
                      style={{
                        width: "100%",
                        marginBottom: "10px",
                        height: "250px",
                        objectFit: "contain",
                      }}
                      src={
                        editLogo
                          ? URL.createObjectURL(editLogo)
                          : `http://localhost:5050/brand/${edit.photo}`
                      }
                      alt=""
                    />
                  )}
              {brandModal.type === "create" ? (
                <Button variant="primary" type="submit">
                  Add brand
                </Button>
              ) : (
                <Button variant="primary" type="submit">
                  Edit Brand
                </Button>
              )}
            </Form>
          </AdminModal>
          {/* <EditModal
            show={editBrands}
            onHide={setEditBrands}
            edit={edit}
            setEdit={setEdit}
            logo={logo}
            brandModal={brandModal}
          /> */}
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
                        onChange={() => handleStatusUpdate(_id, status)}
                      />
                    </Form>
                  </td>
                  <td>
                    <button
                      className="btn btn-info btn-sm"
                      onClick={() => handleEditBrand(_id)}
                    >
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
