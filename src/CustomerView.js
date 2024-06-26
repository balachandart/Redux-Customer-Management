import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCustomer, editCustomer } from './slice/customerSlice';
import { BsTrash, BsPencil } from 'react-icons/bs'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomerView = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers);
  const [editIndex, setEditIndex] = useState(-1);
  const [newName, setNewName] = useState("");

  function handleDelete(index) {
    dispatch(deleteCustomer(index));
  }

  function handleEdit(index) {
    dispatch(editCustomer({ index, newName }));
    setEditIndex(-1); 
  }

  return (
    <div className="card bg-light">
      <div className="card-body">
      <h3 className="card-title text-primary mb-4 ml-3">you have {customers.length} {customers.length===0?"customer":"customers"}</h3>
        {customers.length === 0 ? (
          <p className="text-center">Your list is empty.</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-bordered text-center">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((cus, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      {editIndex === index ? (
                        <input
                          type="text"
                          className="form-control"
                          value={newName}
                          onChange={(e) => setNewName(e.target.value)}
                        />
                      ) : (
                        cus
                      )}
                    </td>
                    <td>
                      {editIndex === index ? (
                        <button
                          className="btn btn-success btn-sm mr-2"
                          onClick={() => handleEdit(index)}
                        >
                          <BsPencil />
                        </button>
                      ) : (
                        <>
                          <button
                            className="btn btn-primary btn-sm mr-2"
                            onClick={() => setEditIndex(index)}
                          >
                            <BsPencil />
                          </button>
                          <button
                            className="btn btn-danger btn-sm ms-3"
                            onClick={() => handleDelete(index)}
                          >
                            <BsTrash />
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomerView;
