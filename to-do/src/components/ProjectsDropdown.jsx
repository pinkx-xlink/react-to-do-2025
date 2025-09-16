import React, { useState } from "react";

export default function ProjectsDropdown() {
  const [cities, setCities] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const projects = {
    France: ["Paris", "Marseille", "Lille", "Lyon"],
    Usa: ["New York", "San Francisco", "Austin", "Dallas"],
    Brazil: ["São Paulo", "Rio de Janeiro", "Salvador"]
  };

  const projectList = Object.keys(projects).map(key => ({
    name: key
  }));

  function handleProjectSelect(e) {
    console.log("Selected project", e.target.value);
    const projectSel = e.target.value;
    const citiesSel = projectSel !== "" ? projects[projectSel] : [];
    setSelectedProject(projectSel);
    setCities(citiesSel);
    setSelectedCity("");
  }

  function handleCitySelect(e) {
    console.log("Selected city", e.target.value);
    const citiesSel = e.target.value;
    setSelectedCity(citiesSel);
  }

  return (
    <div className="project-dropdown">
      <div className="project-dropdown__container">
        <select
          name="Projects"
          onChange={e => handleProjectSelect(e)}
          value={selectedProject}
        >
          <option value="">Select the project</option>
          {projectList.map((project, key) => (
            <option key={key} value={project.name}>
              {project.name}
            </option>
          ))}
        </select>

        <select
          name="Cities"
          onChange={e => handleCitySelect(e)}
          value={selectedCity}
        >
          <option value="">Select the city</option>
          {cities.map((city, key) => (
            <option key={key} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
