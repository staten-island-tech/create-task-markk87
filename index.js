

async function getActivity(){
    const URL = `https://www.boredapi.com/api/activity`
    try {
        const response = await fetch(URL);
        console.log(response);
        const data = await response.json();
        console.log(data);
        
        if (data.result === "success") {
            DOMSelectors.button.addEventListener("click", function(event) {
                event.preventDefault();
            
                
                
                inputData();
            });
        }


        function inputData() {
            const randomActivity = data.activity
            DOMSelectors.gallery.insertAdjacentHTML("beforeend", `<div class=card><h2> ${data.activity}</h2></div>`)
           }
    } catch (error) {
    console.error("Not yet")
}}





const DOMSelectors = {

    button: document.querySelector(".mainButton"),
    
};





