import "./header.css";

const header = () => {
  const content = document.querySelector("#content");

  const header = document.createElement("header");
  const swWrapper = document.createElement("div");
  const sw = document.createElement("select");
  const swImg = document.createElement("img");
  const projectName = document.createElement("select");
  const addProject = document.createElement("button");

  content.appendChild(header);
  header.appendChild(swWrapper);
  swWrapper.appendChild(sw);
  swWrapper.appendChild(swImg);
  header.appendChild(projectName);
  header.appendChild(addProject);

  header.classList.add();
};

export default header;
