console.log("Question 2:")


const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];

//add new div like the options

//write an input event for the text box
//loop for countrylist 
//foreach county
// if  country.startwith(value.(inside the textbox) 
//  then create a div and add it to the "suggestions div"
//lowercase



const divOptions = document.getElementById("suggestions");

const textBox = document.getElementById("country");
textBox.addEventListener("input", e => {
  divOptions.textContent = "";
  countryList.forEach(opt => {
    console.log(e.target.value)
    if (opt.toLowerCase().startsWith(e.target.value.toLowerCase())) {
      const countryOpt = document.createElement("div");
      countryOpt.textContent = opt;
      countryOpt.classList.add("suggestion");
      countryOpt.addEventListener("mouseenter", ediv => {
        
        e.target.value = ediv.target.textContent;
      });
      divOptions.appendChild(countryOpt);
    };
  });
});





