import express from "express";
import axios from "axios";
import { promises as fsPromises } from 'fs';

const app = express();
const PORT = 3001;

app.get("/api/projetos", async (req, res) => {
  try {
    const repositoriesRaw = fsPromises.readFileSync("./RepositoriosApi.json");
    const repositories = JSON.parse(repositoriesRaw);

    const githubApiUrl = "https://api.github.com/repos";

    const promises = repositories.map(async (repo) => {
      const response = await axios.get(`${githubApiUrl}/${repo}`);
      return {
        name: response.data.name,
        description: response.data.description,
      };
    });

    const projects = await Promise.all(promises);
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar projetos." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
