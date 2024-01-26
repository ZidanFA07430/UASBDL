import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
    <div className="row">
    <div className="col-md-12 mt-6">
    <h1 className="text-center">DAFTAR PEMBELI OBAT </h1>
      <div className="col-md-12 is-half">
        <Link to="add" className="button is-success">
          Add New
        </Link>
        <div className="col-md-12">
        <table className="table table-bordered table-primary is-striped is-fullwidth mt-1">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>harga obat</th>
              <th>nama obat</th>
              <th>Tanggal Beli</th>
              <th>Alamat</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.hargaObat}</td>
                <td>{user.namaObat}</td>
                <td>{user.tanggalBeli}</td>
                <td>{user.alamat}</td>
                <td className="text-center">
                  
                  <Link
                    to={`edit/${user._id}`}
                    className="button is-info is-small mr-3 pr-4 pl-4"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="button is-danger is-small "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default UserList;
