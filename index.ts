import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { RoleRoute } from './src/routes/role.route';

const app = express();

require('dotenv').config();

const PORT: any = process.env.PORT;
const DB_URI: any = process.env.DB_URI;

mongoose.connect(DB_URI);
mongoose.Promise = global.Promise;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use('/api', RoleRoute());

app.listen(PORT, () => {
    console.log(`Server berjalan ${PORT}`);
});