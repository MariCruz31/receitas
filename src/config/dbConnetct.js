
import mongoose from "mongoose";

mongoose.connect(
     "mongodb+srv://cruzmariene124:verde@cluster0.6djwvq1.mongodb.net/receitas"  
);
let db = mongoose.connection;

export default db;