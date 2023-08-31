import "./header.css";

const header = () => {
  const content = document.querySelector("#content");

  const header = document.createElement("header");
  // const swWrapper = document.createElement("div");
  const sw = document.createElement("select");
  const project = document.createElement("option");
  const notes = document.createElement("option");
  const swImg = document.createElement("img");
  const projectName = document.createElement("select");
  const defaultProject = document.createElement("option");
  const addProject = document.createElement("button");

  content.appendChild(header);
  header.appendChild(sw);
  // header.appendChild(swWrapper);
  // swWrapper.appendChild(sw);
  // swWrapper.appendChild(swImg);
  sw.appendChild(project);
  sw.appendChild(notes);
  header.appendChild(projectName);
  projectName.appendChild(defaultProject);

  header.appendChild(addProject);

  project.value = "project";
  project.innerText = "Project";
  notes.value = "notes";
  notes.innerText = "Notes";
  defaultProject.value = "today";
  defaultProject.innerText = "Today";

  addProject.innerText = "Add Project";

  header.classList.add();
};

export default header;
