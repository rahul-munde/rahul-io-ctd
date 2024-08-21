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