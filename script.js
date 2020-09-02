let bigFiveButton = document.getElementsByClassName("big-five-list-item");
let spottedAnimalsList = document.getElementById("spotted-animals-list");
// New animal list items

bigFiveButton[0].addEventListener("click", function(){
    spottedAnimalsList.appendChild(document.createElement("li")).appendChild(document.createTextNode(bigFiveButton[0].textContent))
    .classList("spotted-animals-list-item")
})
bigFiveButton[1].addEventListener("click", function(){
    spottedAnimalsList.appendChild(document.createElement("li")).appendChild(document.createTextNode(bigFiveButton[1].textContent))
})
bigFiveButton[2].addEventListener("click", function(){
    spottedAnimalsList.appendChild(document.createElement("li")).appendChild(document.createTextNode(bigFiveButton[2].textContent))
})
bigFiveButton[3].addEventListener("click", function(){
    spottedAnimalsList.appendChild(document.createElement("li")).appendChild(document.createTextNode(bigFiveButton[3].textContent))
})
bigFiveButton[4].addEventListener("click", function(){
    spottedAnimalsList.appendChild(document.createElement("li")).appendChild(document.createTextNode(bigFiveButton[4].textContent))
})


// remove first item 

let removeListItem = document.getElementsByClassName("spotted-animals-list-item");
let removeFirst = document.getElementById("remove-first-item-button");
removeFirst.addEventListener("click", function(){
    spottedAnimalsList.removeChild(removeListItem[0]);
})

// remove all

let removeAllBtn = document.getElementById("remove-all-button");

removeAllBtn.addEventListener("click", function(){
    for(i = 0; i < removeListItem.length; i++){
        spottedAnimalsList.removeChild(removeListItem[i]);
    }
})