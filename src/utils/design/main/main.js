import "./main.css";

const main = () => {
  const content = document.querySelector("#content");
  const layout = document.createElement("main");
  const col = column();
  const section = addSection();

  content.appendChild(layout);
  layout.appendChild(col);
  layout.appendChild(section);
};

const column = (colTitle = "title") => {
  const col = document.createElement("div");
  const title = document.createElement("p");

  const ent = entry();
  const btn = addTask();

  col.appendChild(title);
  col.appendChild(ent);
  col.appendChild(btn);

  col.classList.add("col");
  title.classList.add("title");

  title.innerText = colTitle;

  return col;
};

const entry = () => {
  const ent = document.createElement("div");
  ent.classList.add("ent");

  ent.innerText = "this is an entry";

  return ent;
};

const addTask = () => {
  const btn = document.createElement("button");
  btn.classList.add("addTask");

  btn.innerText = "Add Task";

  return btn;
};

const addSection = () => {
  const btn = document.createElement("button");
  btn.classList.add("addSection");

  btn.innerText = "Add section";

  return btn;
};

export default main;
