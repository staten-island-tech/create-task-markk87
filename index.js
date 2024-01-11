

async function getActivity(){
    const URL = `https://www.boredapi.com/api/activity`
    try {
        const response = await fetch(URL);
        console.log(response);
        const data = await response.json();
        console.log(data);
        if (data.result === "success") {
            DOMSelectors.button.addEventListener("submit", function(event) {
                event.preventDefault();
            
                
                
                inputData();
            });
        }


        function inputData(data) {
            const randomActivity = data.activity
            DOMSelectors.gallery.insertAdjacentHTML("beforeend", `<div class=card><button class=remove>Clear</button><h2> ${DOMSelectors.nameInput.value} : ${DOMSelectors.emailInput.value} : ${DOMSelectors.ageInput.value}</h2></div>`)
           }
    } catch (error) {
    console.error("Not yet")
}}





const DOMSelectors = {
    form: document.querySelector("#form"),
    gallery: document.querySelector(".gallery"),
    button: document.querySelector(".submitAll"),
    nameInput: document.querySelector(".fullName"),
    emailInput: document.querySelector(".emailInput"),
    ageInput: document.querySelector(".ageInput")
};





