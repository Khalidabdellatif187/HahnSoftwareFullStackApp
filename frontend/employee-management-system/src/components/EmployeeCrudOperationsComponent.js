import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const EmployeeCrudOperationsComponent = () => {
  const navigate = useNavigate();
  const [first_name, setFirstName] = useState('');
  const [second_name, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const { id } = useParams();
  const [errors, setErrors] = useState({
    first_name: '',
    second_name: '',
    email: '',
    role: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    const employee = { first_name, second_name, email, role };
    const newErrors = { ...errors };

    // Validate first_name field
    if (!first_name) {
      newErrors.first_name = 'First Name is required';
    } else if (first_name.length < 2) {
      newErrors.first_name = 'First Name should be at least 2 characters long';
    } else {
      newErrors.first_name = '';
    }

    // Validate second_name field
    if (!second_name) {
      newErrors.second_name = 'Second Name is required';
    } else if (second_name.length < 2) {
      newErrors.second_name = 'Second Name should be at least 2 characters long';
    } else {
      newErrors.second_name = '';
    }

    // Validate email field
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Invalid email format';
    } else {
      newErrors.email = '';
    }

    // Validate role field
    if (!role) {
      newErrors.role = 'Role is required';
    } else if (role.length < 2) {
      newErrors.role = 'Role should be at least 2 characters long';
    } else {
      newErrors.role = '';
    }

    // Set the updated errors state
    setErrors(newErrors);

    // If there are no validation errors, proceed with saving/updating the employee
    if (
      !newErrors.first_name &&
      !newErrors.second_name &&
      !newErrors.email &&
      !newErrors.role
    ) {
      if (id) {
        EmployeeService.updateEmployee(id, employee)
          .then((response) => {
            navigate('/employees');
          })
          .catch((error) => {
            setErrorMessage('Same name or email already exists');

            console.log(error);
          });
      } else {
        EmployeeService.createEmployee(employee)
          .then((response) => {
            console.log(response.data);
            navigate('/employees');
          })
          .catch((error) => {
            if (error.response && error.response.status === 400) {
              setErrorMessage('Same name or email already exists');
            } else {
              console.log(error);
            }
          });
      }
    }
  };

  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then((response) => {
        setFirstName(response.data.first_name);
        setSecondName(response.data.second_name);
        setEmail(response.data.email);
        setRole(response.data.role);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (id) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}
            <div className="card-body">
              {errorMessage && (
                <div className="text-danger" style={{ color: 'red' }}>
                  {errorMessage}
                </div>
              )}
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">First Name: </label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    name="first_name"
                    className="form-control"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {errors.first_name && (
                    <div className="text-danger" style={{ color: 'red' }}>
                      {errors.first_name}
                    </div>
                  )}
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Second Name: </label>
                  <input
                    type="text"
                    placeholder="Enter Second Name"
                    name="second_name"
                    className="form-control"
                    value={second_name}
                    onChange={(e) => setSecondName(e.target.value)}
                  />
                  {errors.second_name && (
                    <div className="text-danger" style={{ color: 'red' }}>
                      {errors.second_name}
                    </div>
                  )}
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Email: </label>
                  <input
                    type="text"
                    placeholder="example@gmail.com"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <div className="text-danger" style={{ color: 'red' }}>
                      {errors.email}
                    </div>
                  )}
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Role: </label>
                  <input
                    type="text"
                    placeholder="Enter Role"
                    name="role"
                    className="form-control"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  {errors.role && (
                    <div className="text-danger" style={{ color: 'red' }}>
                      {errors.role}
                    </div>
                  )}
                </div>
                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateEmployee(e)}
                >
                  Submit
                </button>
                <Link
                  to="/employees"
                  className="btn btn-danger"
                  style={{ marginLeft: '10px' }}
                >
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCrudOperationsComponent;
