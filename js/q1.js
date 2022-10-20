console.log("Question 1:")


// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

const options = document.getElementById("house");

window.addEventListener("load", e => {

  for (house of houses) {
    const houseEle = document.createElement("option");
    houseEle.value = house.code
    houseEle.textContent = house.name
    // console.log(house.code, house.name);
    options.appendChild(houseEle)
  }

});

options.addEventListener("change", e => {
  //console.log(e.target.value)
  const characters = getCharacters(e.target.value);
  const ulElement = document.getElementById("characters");
  ulElement.textContent = "";
  characters.forEach(char => {
    //console.log(char)
    const listElement = document.createElement("li");
    listElement.textContent = char;
    ulElement.appendChild(listElement);
  })
})



