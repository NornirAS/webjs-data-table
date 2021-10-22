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
<input v-model="msg" type="text" class="form-control" placeholder="Message" aria-label="Recipient's username" aria-describedby="Message">
<button @click="sendData()" class="btn btn-outline-secondary" type="button">Button</button>
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

// setInterval(() => {
//   const li = document.createElement("li");
//   li.innerHTML = "Hello";
//   chatMessages.append(li);
//   scrollDown()
// }, 500)


const scrollDown = () => {
  shouldScroll = messageContainer.scrollTop + messageContainer.clientHeight === messageContainer.scrollHeight;
  if (!shouldScroll) {
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
}