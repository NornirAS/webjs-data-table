const list = document.createElement("ul");
list.style.listStyleType = "none";
list.style.overflow = "scroll";
list.style.position = "relative";
list.style.margin = "0";
list.style.padding = "0.5em 0";

const appElement = document.getElementById("webjs-container");
appElement.appendChild(list);

const li = document.createElement("li");
li.innerHTML = "Chat loaded..."
list.append(li)
this.gotWebJS = true;

const displayData = ({ RTW }) => {
  const { TIME, USERNAME, UPPERCASE_MSG } = RTW;
  const msg = `${TIME} ${USERNAME}: ${UPPERCASE_MSG}`;
  const list = document.querySelector("ul");
  const li = document.createElement("li");
  li.innerHTML = msg;
  list.append(li);
};