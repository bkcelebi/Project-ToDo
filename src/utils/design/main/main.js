import "./main.css";
import { selectProject, selectDate, addProjectBtn } from "../header/header";

const main = () => {
  const content = document.querySelector("#content");
  const main = document.createElement("main");
  const cont = container();

  content.appendChild(main);
  main.appendChild(cont);
};

const container = () => {
  const container = document.createElement("div");
  const title = document.createElement("p");
  const layout = document.createElement("div");

  const ent = entry();
  const btn = addTask();
  const addProject = addProjectBtn();
  const projectSelector = selectProject();
  const dateSelector = selectDate();

  container.appendChild(layout);
  container.appendChild(addProject);
  container.appendChild(projectSelector);
  container.appendChild(dateSelector);

  layout.appendChild(title);
  layout.appendChild(ent);
  layout.appendChild(btn);

  container.classList.add("cont");
  title.classList.add("title");
  layout.classList.add("layout");
  addProject.classList.add("addProjectBtn");
  dateSelector.classList.add("dateSelector");
  projectSelector.classList.add("projectSelector");

  title.innerText = "ToDos";

  return container;
};

const entry = () => {
  const ent = document.createElement("div");

  const todo1 = document.createElement("p");
  const todo2 = document.createElement("p");

  ent.appendChild(todo1);
  ent.appendChild(todo2);

  ent.classList.add("ent");
  todo1.classList.add("todo");
  todo2.classList.add("todo");

  todo1.innerText = "this is an entry";
  todo2.innerText = "this is an entry";

  return ent;
};

const addTask = () => {
  const btn = document.createElement("button");
  btn.classList.add("addTask");

  btn.innerText = "Add Task";

  return btn;
};

export default main;
