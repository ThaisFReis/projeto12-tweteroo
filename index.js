import express from 'express';
import cors from 'cors';
import service from './service';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
    }   
);
