let bigFiveButton = document.getElementsByClassName("big-five-list-item");
let spottedAnimalsList = document.getElementById("spotted-animals-list");

// Animal names

// const bigFiveButtonLion = document.createTextNode(bigFiveButton.textContent);
// const bigFiveButtonLeopard = bigFiveButton[1].textContent;
// const bigFiveButtonElephant = bigFiveButton[2].textContent;
// const bigFiveButtonRhino = bigFiveButton[3].textContent;
// const bigFiveButtonBuffalo = bigFiveButton[4].textContent;
const textNode = bigFiveButton[0].textContent;


const li = document.createElement("li");

let NewLiButton = function(i){
    bigFiveButton[i].addEventListener("click", function(){
    spottedAnimalsList.appendChild(li)
})
}
NewLiButton(0).append(document.createTextNode(textNode))


li.classList.add("spotted-animals-list-item")
// New animal list items

// bigFiveButton[0].addEventListener("click", function(){
//     spottedAnimalsList.appendChild(li, bigFiveButtonLion[0])
//     // .appendChild(document.createTextNode(bigFiveButtonLion))
// })
// bigFiveButton[1].addEventListener("click", function(){
//     spottedAnimalsList.appendChild(li)
//     .appendChild(document.createTextNode(bigFiveButtonLeopard))
// })
// bigFiveButton[2].addEventListener("click", function(){
//     spottedAnimalsList.appendChild(document.createElement("li"))
//     .appendChild(document.createTextNode(bigFiveButtonElephant))
// })
// bigFiveButton[3].addEventListener("click", function(){
//     spottedAnimalsList.appendChild(document.createElement("li"))
//     .appendChild(document.createTextNode(bigFiveButtonRhino))
// })
// bigFiveButton[4].addEventListener("click", function(){
//     spottedAnimalsList.appendChild(document.createElement("li"))
//     .appendChild(document.createTextNode(bigFiveButtonBuffalo))
// })


// remove first item from list

let removeListItem = document.getElementsByClassName("spotted-animals-list-item");
let removeFirst = document.getElementById("remove-first-item-button");
removeFirst.addEventListener("click", function(){
    spottedAnimalsList.removeChild(removeListItem[0]);
})

// remove all from list

let removeAllBtn = document.getElementById("remove-all-button");

removeAllBtn.addEventListener("click", function(){
    for(i = 0; i < removeListItem.length; i++){
        spottedAnimalsList.removeChild(removeListItem[i]);
    }
})