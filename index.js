async function getActivity(){
    const URL = `https://www.boredapi.com/api/activity`
    try {
        const response = await fetch(URL);
        console.log(response);
        const data = await response.json();
        console.log(data);
        const activity = console.log(data.activity)
        
        if (data.status != 400) {
            
            DOMSelectors.button.addEventListener("click", function(event) {
                event.preventDefault();
                DOMSelectors.gallery.insertAdjacentHTML("beforeend", `<p>${activity}</p>`)
            });
        }


        
    
    } catch (error) {
    console.error("Not yet")
}}
getActivity();




const DOMSelectors = {

    button: document.querySelector(".mainButton"),
    gallery: document.querySelector('.gallery')
    
};





