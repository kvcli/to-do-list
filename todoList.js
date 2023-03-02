var userInput = document.getElementById("input"); 
var enterButton = document.getElementById("enter");
var ul = document.querySelector("ul");

function inputLenght(){
    return userInput.value.length;
}

function createListItem(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    var deletebtn = document.createElement("button");
    deletebtn.appendChild(document.createTextNode("Delete"))
    li.appendChild(deletebtn);

    deletebtn.addEventListener("click", function() {
        li.remove();
    })
    li.addEventListener("click", function(){
        li.classList.toggle("done")
        }
        )
}

function addListAfterClicked(){
    if (inputLenght () > 0 ) {
        createListItem();
        userInput.value = ""; // this code to cleare the user input after clicking "Enter"
    }
}
function addEventAfterKeypress(event){
    if (inputLenght () > 0 && event.which === 13) // 13 is the key code for "Enter"
     {
        createListItem();
        userInput.value = "";
    }
}
enterButton.addEventListener("click", addListAfterClicked);
userInput.addEventListener("keypress",addEventAfterKeypress);


