import "./footer.css";
import FooterLogo from "../../../assets/footerLogo.png";
import Github from "../../../assets/github.svg";

const footer = () => {
  const content = document.querySelector("#content");

  const footer = document.createElement("footer");
  const footerWrapper = document.createElement("div");
  const copyright = document.createElement("p");
  const footerLogo = document.createElement("a");
  const kcDev = document.createElement("img");
  const github = document.createElement("img");

  content.appendChild(footer);
  footer.appendChild(footerWrapper);
  footerWrapper.appendChild(copyright);
  footerWrapper.appendChild(footerLogo);
  footerLogo.appendChild(kcDev);
  footerLogo.appendChild(github);

  github.classList.add("github");
  footerWrapper.classList.add("footerWrapper");

  const time = new Date().getFullYear();
  copyright.innerText = `Copyright © ${time}`;

  kcDev.src = FooterLogo;
  kcDev.alt = "developer's logo";
  kcDev.loading = "lazy";

  github.src = Github;
  github.alt = "github logo";
  github.loading = "lazy";

  footerLogo.href = "https://github.com/bkcelebi";
  footerLogo.target = "_blank";
};

export default footer;
