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
    const user = req.body;
    constavatar = user.body.avatar;

    users.push(user);
    res.send("OK")
});

/* Post Tweets */

app.post("/tweets", (req, res) => {
    const tweet = {
        username: req.body.username,
        tweet: req.body.tweet,
        avatar: login.find((user) => user.username === req.body.username).avatar,
    }

    if (tweet.tweet === "") {
        return res.status(400).send("Escreva algo para postar");
    }

    tweets.push(tweet);
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

    res.send(tweetsPage);
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
    }   
);
