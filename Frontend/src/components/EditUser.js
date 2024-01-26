import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [namaObat, setnamaObat] = useState("");
  const [hargaObat, sethargaObat] = useState("");
  const [tanggalBeli, settanggalBeli] = useState("");
  const [alamat, setalamat] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.name);
    sethargaObat(response.data.sethargaObat);
    setnamaObat(response.data.namaObat);
    settanggalBeli(response.data.settanggalBeli);
    setalamat(response.data.alamat);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
        hargaObat,
        namaObat,
        tanggalBeli,
        alamat
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns columns mt-4 justify-content-center">
      <div className="column is-half">
      <h2 className="text-center" >UPDATE PEMBELI</h2>
        <form onSubmit={updateUser}>
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
                placeholder="harga"
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
            <label className="label">tanggal beli</label>
            <div className="control">
              <input
                type="date"
                className="input"
                value={tanggalBeli}
                onChange={(e) => settanggalBeli(e.target.value)}
                placeholder="tanggal"
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
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
