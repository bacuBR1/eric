const express = require("express");
const path = require("path");
const server = express();
server.use(express.json());

const videos = [
  {
    id: 1,
    title: "Dança na Praça",
    creator: "Luma Dance",
    description: "Coreografia rápida para aprender em casa.",
    views: 12500,
    likes: 860,
    hashtag: "#dance",
    url: "https://www.example.com/video/1",
    thumbnail: "https://via.placeholder.com/320x180?text=Thumbnail+1"
  },
  {
    id: 2,
    title: "Receita Express",
    creator: "Chef Rafa",
    description: "Sobremesa fácil com poucos ingredientes.",
    views: 8700,
    likes: 540,
    hashtag: "#receitas",
    url: "https://www.example.com/video/2",
    thumbnail: "https://via.placeholder.com/320x180?text=Thumbnail+2"
  }
];

server.use(express.static(path.join(__dirname, "../frontend/dist")));

server.get("/api/videos", (req, res) => {
  res.json(videos);
});

server.post("/api/videos", (req, res) => {
  const { title, creator, description, views, likes, hashtag, url, thumbnail } = req.body;

  if (!title || !creator || !description || views == null || likes == null || !hashtag || !url || !thumbnail) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  const newVideo = {
    id: videos.length + 1,
    title,
    creator,
    description,
    views: Number(views),
    likes: Number(likes),
    hashtag,
    url,
    thumbnail
  };

  videos.push(newVideo);
  res.status(201).json(newVideo);
});

server.get(["/", "/videos", "/videos/cadastrar"], (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

server.get("*", (req, res) => {
  if (req.originalUrl.startsWith("/api/")) {
    return res.status(404).json({ error: "Rota da API não encontrada." });
  }
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

server.listen(3002, () => {
  console.log("Servidor rodando em http://localhost:3002");
});