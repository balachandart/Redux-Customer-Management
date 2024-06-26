import React from 'react';
import CustomerAdd from './CustomerAdd';
import CustomerView from './CustomerView';
import { Provider } from 'react-redux';
import { store } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Customer Management</h1>
        
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <CustomerAdd />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-lg-6 mx-auto">
            <CustomerView />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
