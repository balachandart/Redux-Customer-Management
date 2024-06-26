import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCustomer as addCustomerActions } from './slice/customerSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomerAdd.css'; 

const CustomerAdd = () => {
  const [inp, setInp] = useState("");
  const dispatch = useDispatch();
  // const [customer, setCustomer] = useState([]);

  function handleClick() {
    if (inp) {
      dispatch(addCustomerActions(inp));
      setInp("");
    }
  }

  return (
    <div className="card bg-light">
      <div className="card-body">
        <h3 className="card-title text-primary">Add New Customer</h3>
        <form onSubmit={(e) => { e.preventDefault(); handleClick(); }}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control input-no-outline" 
              placeholder="Add Customer"
              value={inp}
              onChange={(e) => setInp(e.target.value)}
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-primary ml-2"> 
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CustomerAdd;
