import express from 'express';
import cors from 'cors';
import service from './service';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

const users = [];
const tweets = [];


app.post("/sing-up", (req, res) => {
    const user = req.body;

    if (user.username === "" || user.avatar === "") {
        return res.status(400).send("Todos os campos são obrigatórios");
    }

    users.push(user);
    res.status(201).send(user);
    }
)

app.post("/tweets", (req, res) => {
    const tweet = req.body;
    
    }
)

app.get("/tweets", (req, res) => {
    res.send(tweets);
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
    }   
);
