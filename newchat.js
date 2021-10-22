const chatMessages = document.createElement("ul");
chatMessages.style.listStyleType = "none";
chatMessages.style.margin = "0";
chatMessages.style.padding = "0";
chatMessages.style.flexDirection = "column";
chatMessages.style.position = "absolute";
chatMessages.style.bottom = "0";
chatMessages.style.maxHeight = "400px";

const messageContainer = document.createElement("div");
messageContainer.style.height = "400px";
messageContainer.style.overflow = "scroll";
messageContainer.style.position = "relative";
messageContainer.style.padding = "16px";

messageContainer.appendChild(chatMessages);

const chatInput = document.createElement("div");
chatInput.innerHTML = `<div class="input-group">
<input id="msgInput" type="text" class="form-control" placeholder="Message" aria-label="Message" aria-describedby="Message">
<button id="submitInput" class="btn btn-outline-secondary" type="button">Button</button>
</div>`;
chatInput.style.position = "absolute";
chatInput.style.bottom = "0";
chatInput.style.width = "100%";

const inputContainer = document.createElement("div");
inputContainer.style.height = "36px";

inputContainer.appendChild(chatInput);

const appElement = document.getElementById("webjs-container");
appElement.appendChild(messageContainer);
appElement.appendChild(inputContainer);
appElement.className = "col-sm-12 col-md-6 col-lg-4 mt-3";
appElement.style = "height: 436px;overflow: scroll; position: relative; padding: 0;";

const li = document.createElement("li");
li.innerHTML = "Chat loaded..."
chatMessages.append(li)

const displayData = ({ RTW }) => {
  const { TIME, USERNAME, UPPERCASE_MSG } = RTW;
  const msg = `${TIME} ${USERNAME}: ${UPPERCASE_MSG}`;
  const chatMessages = document.querySelector("ul");
  const li = document.createElement("li");
  li.innerHTML = msg;
  chatMessages.append(li);
};

const scrollDown = () => {
  shouldScroll = messageContainer.scrollTop + messageContainer.clientHeight === messageContainer.scrollHeight;
  if (!shouldScroll) {
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
}

document.getElementById('submitInput').onclick = () => {
  const msg = document.getElementById('msgInput').value;
  sendData(msg);
};

const sendData = (msg) => {
  const msgServiceURL = localStorage.getItem('msgServiceURL');
  const msgServiceGhost = localStorage.getItem('msgServiceGhost');
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  const headers = {
    'Synx-Cat': '1',
    'Content-Type': 'application/x-www-form-urlencoded',
  }
  const method = 'POST';

  fetch(`${msgServiceURL}`, {
    body: `token=${token}&objectID=${msgServiceGhost}&username=${username}&msg=${msg}`,
    headers,
    method
  })
};