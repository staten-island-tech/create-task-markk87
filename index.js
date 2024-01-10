const DOMSelectors = {
    form: document.querySelector("#form"),
    gallery: document.querySelector(".gallery"),
    button: document.querySelector(".submitAll"),
    nameInput: document.querySelector(".fullName"),
    emailInput: document.querySelector(".emailInput"),
    ageInput: document.querySelector(".ageInput")
};

DOMSelectors.button.addEventListener("click", function(event) {
    event.preventDefault();

    function inputData() {
        DOMSelectors.gallery.insertAdjacentHTML("beforeend", `<div class=card><button class=remove>Clear</button><h2> ${DOMSelectors.nameInput.value} : ${DOMSelectors.emailInput.value} : ${DOMSelectors.ageInput.value}</h2></div>`)
    }
    
    inputData();
});



for(let i = 0; i < DOMSelectors.nameInput.length; i++ ) {
    console.log(i)
}


