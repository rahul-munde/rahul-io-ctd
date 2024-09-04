const tableBody = document.querySelector("tbody");

fetch("https://swapi.dev/api/people")
  .then((res) => res.json())
  .then((data) => {
    data.results.forEach((character) => {
      console.log(character);
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      nameCell.innerText = character.name;
      row.append(nameCell);

      const hairCell = document.createElement("td");
      hairCell.innerText = character.hair_color;
      row.append(hairCell);

      console.log(row);
      tableBody.appendChild(row);
    });
  })
  .catch((e) => console.log(e));