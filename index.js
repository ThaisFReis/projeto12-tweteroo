import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

const users = [];
const tweets = [];

/* Post Sing Up */

app.post("/sing-up", (req, res) => {
    const {username, avatar} = req.body;

    if (!username || !avatar) {
        res.status(400).send("Todos os campos são obrigatórios");
        return;
    }

    users.push({username, avatar});
    res.status(200).send("OK");
});

/* Post Tweets */

app.post("/tweets", (req, res) => {
        const {username} = req.body.username;
        const {tweet}  = req.body.tweet;
        const {avatar} = login.find((user) => user.username === req.body.username).avatar

    if (tweet.tweet === "") {
        return res.status(400).send("Escreva algo para postar");
    }

    tweets.push({username, tweet, avatar});
    res.status(201).send(tweet);
    }
)

/* Get Tweets */

app.get("/tweets", (req, res) => {
    if (!req.query.page || parseInt(req.query.page) < 1) {
        return res.status(400).send("Página inválida");
    }

    const page = parseInt(req.query.page);
    const limit = 10;
    const offset = (page - 1) * limit;

    const tweetsPage = tweets.slice(offset, offset + limit);

    res.send(tweetsPage).reverse();
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
    }   
);
