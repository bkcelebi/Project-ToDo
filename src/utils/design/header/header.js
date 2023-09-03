import "./header.css";

const header = () => {
  const content = document.querySelector("#content");

  const header = document.createElement("header");

  const projectSelector = selectProject();
  const date = selectDate();
  const addProject = addProjectBtn();

  content.appendChild(header);
  header.appendChild(projectSelector);
  header.appendChild(date);
  header.appendChild(addProject);
};

const selectProject = () => {
  const projectSelector = document.createElement("select");
  const project = document.createElement("option");
  const sampleProject = document.createElement("option");

  projectSelector.appendChild(project);
  projectSelector.appendChild(sampleProject);

  project.value = "All projects";
  project.innerText = "All Projects";

  sampleProject.value = "my project";
  sampleProject.innerText = "My Project";

  return projectSelector;
};

const selectDate = () => {
  const date = document.createElement("select");
  const allTime = document.createElement("option");
  const today = document.createElement("option");
  const thisWeek = document.createElement("option");
  const thisMonth = document.createElement("option");
  const thisYear = document.createElement("option");

  date.appendChild(allTime);
  date.appendChild(today);
  date.appendChild(thisWeek);
  date.appendChild(thisMonth);
  date.appendChild(thisYear);

  allTime.value = "allTime";
  allTime.innerText = "All Time";
  today.value = "today";
  today.innerText = "Today";
  thisWeek.value = "thisWeek";
  thisWeek.innerText = "This Week";
  thisMonth.value = "thisMonth";
  thisMonth.innerText = "This Month";
  thisYear.value = "thisYear";
  thisYear.innerText = "This Year";

  return date;
};

const addProjectBtn = () => {
  const addProject = document.createElement("button");
  addProject.innerText = "Add Project";

  return addProject;
};

export default header;
export { selectProject, selectDate, addProjectBtn };
