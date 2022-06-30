function myFunction() {
    const newP = document.createElement("p");
    const textP = document.createTextNode("Hello");
    newP.appendChild(textP);
    const element = document.getElementById("div1");
    element.appendChild(newP);
  }

  myFunction();