import React, { useState } from "react";

export default function ProjectsDropdown() {
  const [tags, setTags] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const projects = {
    Chores: ["Kitchen", "Bathroom", "Daily", "Weekly"],
    Shopping: ["Groceries", "Personal", "Pets", "Misc"],
    Personal: ["Learning", "Social", "Self-Care", "Goals"]
  };

  const projectList = Object.keys(projects).map(key => ({
    name: key
  }));

  function handleProjectSelect(e) {
    console.log("Selected project", e.target.value);
    const projectSel = e.target.value;
    const tagsSel = projectSel !== "" ? projects[projectSel] : [];
    setSelectedProject(projectSel);
    setTags(tagsSel);
    setSelectedTag("");
  }

  function handleTagSelect(e) {
    console.log("Selected tag", e.target.value);
    const tagsSel = e.target.value;
    setSelectedTag(tagsSel);
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
          name="Tags"
          onChange={e => handleTagSelect(e)}
          value={selectedTag}
        >
          <option value="">Select the tag</option>
          {tags.map((tag, key) => (
            <option key={key} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
