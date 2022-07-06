var saveButton = $("#saveRecipeButton");
saveButton.on('click', function (event) {
  event.preventDefault();
  var recipeInput = $('#recipeInput').val();
  console.log(recipeInput);
  localStorage.setItem("0", JSON.stringify(recipeInput));


})


/*
function store(){
  var recipeInput= document.getElementById("recipeInput");
  localStorage.setItem("recipeInput", recipeInput.value);
 }

*/


/*      Dynamically Create HTML elements:
function myFunction() {
    const newP = document.createElement("p");
    const textP = document.createTextNode("Hello");
    newP.appendChild(textP);
    const element = document.getElementById("div1");
    element.appendChild(newP);
  }

  myFunction();
  */