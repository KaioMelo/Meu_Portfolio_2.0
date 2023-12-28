import { useState, useEffect } from "react";
import axios from "axios";
import "./Projetos.css";

function Projetos() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:3001/api/projects";
    axios
      .get(apiUrl)
      .then((response) => setProjects(response.data))
      .catch((error) => console.error("Erro ao buscar projetos:", error));
  }, []);
  return (
    <section className="container">
      <h2 className="titulo">Projetos</h2>
      <div className="projetos">
        {projects.map((project) => (
          <div className="cards" key={project.name}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;
