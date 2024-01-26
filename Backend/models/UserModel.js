import mongoose from "mongoose";

const User = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    hargaObat:{
        type: String,
        required: true
    },
    namaObat:{
        type: String,
        required: true
    },
    tanggalBeli:{
        type: Date,
        required: true
    },
    alamat:{
        type: String,
        required: true
    },
});

export default mongoose.model('Users', User);