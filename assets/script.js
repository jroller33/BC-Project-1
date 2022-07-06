
// var defaultTab = recipe1tab;
// $('#recipeInput').val(localStorage.getItem('1'));

var recipe1tab = $("#recipe1");
recipe1tab.on('click', function (event) {
  event.preventDefault();
  console.log("recipe1tab");
  $('#recipeInput').val("");
  $('#recipeInput').val(localStorage.getItem('1'));

  var saveRecipe1 = $("#saveRecipeButton");

  saveRecipe1.on('click', function (event) {
  event.preventDefault();
  var recipe1Input = $('#recipeInput').val();
  console.log(recipe1Input);
  localStorage.setItem("1", JSON.stringify(recipe1Input));

  })
})

var recipe2tab = $("#recipe2");
recipe2tab.on('click', function (event) {
  event.preventDefault();
  console.log("recipe2tab");
  $('#recipeInput').val("");
  $('#recipeInput').val(localStorage.getItem('2'));

  var saveRecipe2 = $("#saveRecipeButton");

  saveRecipe2.on('click', function (event) {
  event.preventDefault();
  var recipe2Input = $('#recipeInput').val();
  console.log(recipe2Input);
  localStorage.setItem("2", JSON.stringify(recipe2Input));


  })
})

var recipe3tab = $("#recipe3");
recipe3tab.on('click', function (event) {
  event.preventDefault();
  console.log("recipe3tab");
  $('#recipeInput').val("");
  $('#recipeInput').val(localStorage.getItem('3'));

  var saveRecipe3 = $("#saveRecipeButton");

  saveRecipe3.on('click', function (event) {
  event.preventDefault();
  var recipe3Input = $('#recipeInput').val();
  console.log(recipe3Input);
  localStorage.setItem("3", JSON.stringify(recipe3Input));


  })
})

var recipe4tab = $("#recipe4");
recipe4tab.on('click', function (event) {
  event.preventDefault();
  console.log("recipe4tab");
  $('#recipeInput').val("");
  $('#recipeInput').val(localStorage.getItem('4'));

  var saveRecipe4 = $("#saveRecipeButton");

  saveRecipe4.on('click', function (event) {
    event.preventDefault();
    var recipe4Input = $('#recipeInput').val();
    console.log(recipe4Input);
    localStorage.setItem("4", JSON.stringify(recipe4Input));
  })
})

var recipe5tab = $("#recipe5");
recipe5tab.on('click', function (event) {
  event.preventDefault();
  console.log("recipe5tab");
  $('#recipeInput').val("");
  $('#recipeInput').val(localStorage.getItem('5'));

  var saveRecipe5 = $("#saveRecipeButton");

  saveRecipe5.on('click', function (event) {
  event.preventDefault();
  var recipe5Input = $('#recipeInput').val();
  console.log(recipe5Input);
  localStorage.setItem("5", JSON.stringify(recipe5Input));


  })
})


// saveButton.on('click', function (event) {
//   event.preventDefault();
//   var recipeInput = $('#recipeInput').val();
//   console.log(recipeInput);
//   localStorage.setItem("0", JSON.stringify(recipeInput));

//   saveButton.on('click', function (event) {
//   event.preventDefault();
//   var recipeInput = $('#recipeInput').val();
//   console.log(recipeInput);
//   localStorage.setItem("0", JSON.stringify(recipeInput));


// })

// })

// $('#recipeInput').val(localStorage.getItem('0'));



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