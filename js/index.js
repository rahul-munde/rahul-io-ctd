function displayTime() {
  const clock = document.getElementById("clock");
  const time = new Date();
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

function createMessageItem(message) {
  const listItem = document.createElement("li");
  listItem.innerHTML = message;

  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.type = "button";
  removeButton.addEventListener("click", () => listItem.remove());

  listItem.appendChild(removeButton);
  return listItem;
}

// Event listener for form submission
const messageForm = document.getElementById("leave_message");
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userName = e.target.userName.value;
  const email = e.target.email.value;
  const message = e.target.usersMessage.value;

  const listItem = createMessageItem(`${userName} (${email}): ${message}`);
  const messageList = document.getElementById("messages_list");
  messageList.appendChild(listItem);

  e.target.reset();
});

// Set interval to update the time every second
setInterval(displayTime, 1000);

// Initial time display
displayTime();

const body = document.querySelector("body");
const summarySection = document.querySelector(".section p");
summarySection.addEventListener("mouseover", () => {
  summarySection.classList.add("highlight");
});

summarySection.addEventListener("mouseout", () => {
  summarySection.classList.remove("highlight");
});

const skillButton = document.getElementById("skill-button");
skillButton.addEventListener("click", () => {
  const newSkill = prompt("Add a skill:");
  console.log("newSkill: ", newSkill);
  const skillsList = document.querySelector(".skills");
  const li = document.createElement("li");
  li.innerText = newSkill;
  skillsList.append(newSkill);
});

const currentYear = new Date().getFullYear();
const footer = document.createElement("footer");
footer.innerText = "Copyright Something " + currentYear;
footer.className = "some-random-class";
footer.style.background = "pink";
body.appendChild(footer);