import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [namaObat, setnamaObat] = useState("");
  const [hargaObat, sethargaObat] = useState("");
  const [tanggalBeli, settanggalBeli] = useState("");
  const [alamat, setalamat] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        hargaObat,
        namaObat,
        tanggalBeli,
        alamat,
      });
      navigate("/");
    } catch (error) {
      console.log("Error response from server:", error.response.data);
    }
  };

  return (
      <div className="columns mt-4 justify-content-center">
        <div className="column is-half">
        <h1 className="text-center">TAMBAH PEMBELI</h1>
          <form onSubmit={saveUser}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">harga obat</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={hargaObat}
                  onChange={(e) => sethargaObat(e.target.value)}
                  placeholder="obat"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">nama obat</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={namaObat}
                  onChange={(e) => setnamaObat(e.target.value)}
                  placeholder="obat"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Tanggal Beli</label>
              <div className="control">
                <input
                  type="date"
                  className="input"
                  value={tanggalBeli}
                  onChange={(e) => settanggalBeli(e.target.value)}
                  placeholder="obat"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Alamat</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={alamat}
                  onChange={(e) => setalamat(e.target.value)}
                  placeholder="Alamat"
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button type="submit" className="button is-success">
                  SAVE
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };
  

export default AddUser;
