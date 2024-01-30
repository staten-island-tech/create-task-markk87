const DOMSelectors = {
    button: document.querySelector(".mainButton"),
    gallery: document.querySelector('.gallery'),
    favorites: document.querySelector('.favorites')
};

const activitiesList = [
    "Go for a walk in the park",
    "Read a book",
    "Learn a new programming language",
    "Cook a new recipe",
    "Practice meditation",
    "Ride a bike",
    "Play video games",
    "Press the button above",
    "Visit a museum",
    "Start mewing"
];

function createDiv(){
    const newArr = [

    ]
    DOMSelectors.gallery.insertAdjacentHTML("beforeend", `<div class=favorite-gallery></div>`);
}
createDiv()

function createCard(activity) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<p>${activity}</p>`;
    
    
    const favoriteButton = document.createElement('button');
    favoriteButton.classList.add('favorite-button');
    favoriteButton.textContent = 'Favorite';
    
    favoriteButton.addEventListener('click', function () {
        if (DOMSelectors.favorites) {
            card.classList.add('favorited');
            DOMSelectors.favorites.appendChild(card);
            favoriteButton.disabled = true;

           
            const newRandomIndex = Math.floor(Math.random() * activitiesList.length);
            const newRandomActivity = activitiesList[newRandomIndex].push(newArr);

            const newCard = createCard(newRandomActivity);
            DOMSelectors.gallery.appendChild(newCard, card);
        } else {
            console.error("Favorites container not found");
        }
    });

    card.appendChild(favoriteButton);

    return card;
}

DOMSelectors.button.addEventListener("click", function () {
    DOMSelectors.favorites.innerHTML = ''; 

    const randomIndex = Math.floor(Math.random() * activitiesList.length);
    const randomActivity = activitiesList[randomIndex];

    const card = createCard(randomActivity);
    DOMSelectors.gallery.appendChild(card);
});
