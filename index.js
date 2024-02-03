const DOMSelectors = {
  button: document.querySelector(".mainButton"),
  gallery: document.querySelector(".gallery"),
  favorites: document.querySelector(".favorite-gallery"),
};

const favoritesList = [];
const usedActivities = [];

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
];

function getRandomUnusedActivity() {
  const unusedActivities = activitiesList.filter((activity) => !usedActivities.includes(activity));
  if (unusedActivities.length === 0) {
    usedActivities.length = 0;
    return activitiesList[Math.floor(Math.random() * activitiesList.length)];
  } else {
    const randomIndex = Math.floor(Math.random() * unusedActivities.length);
    const randomActivity = unusedActivities[randomIndex];
    usedActivities.push(randomActivity);
    return randomActivity;
  }
}

function createCard(activity) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `<p>${activity}</p>`;

  const favoriteButton = document.createElement("button");
  favoriteButton.classList.add("favorite-button");
  favoriteButton.textContent = "Favorite";

  favoriteButton.addEventListener("click", function () {
    card.classList.add("favorited");

    if (DOMSelectors.favorites) {
      processActivities([activity]);

      DOMSelectors.gallery.removeChild(card);

      const randomActivity = getRandomUnusedActivity();
      const newCard = createCard(randomActivity);
      DOMSelectors.gallery.appendChild(newCard);
    } else {
      console.error("Favorites container not found");
    }

    favoriteButton.disabled = true;
  });

  card.appendChild(favoriteButton);

  return card;
}

function createFavoriteCard(activity) {
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("card", "favorited");
  favoriteCard.innerHTML = `<p>${activity}</p>`;
  return favoriteCard;
}

function processActivities(activities) {
  for (let i = 0; i < activities.length; i++) {
    const currentActivity = activities[i];

    if (!favoritesList.includes(currentActivity)) {
      favoritesList.push(currentActivity);

      const favoriteCard = createFavoriteCard(currentActivity);

      if (DOMSelectors.favorites) {
        DOMSelectors.favorites.appendChild(favoriteCard);
      } else {
        console.error("Favorites container not found");
      }
    } else {
      alert("This item already exists in your favorites section");
    }
  }
}

DOMSelectors.button.addEventListener("click", function (e) {
  e.preventDefault();
  if (DOMSelectors.favorites) {
    DOMSelectors.gallery.innerHTML = "";

    for (let i = 0; i < 1; i++) {
      const randomActivity = getRandomUnusedActivity();
      const card = createCard(randomActivity);
      DOMSelectors.gallery.appendChild(card);
    }
  } else {
    console.error("Favorites container not found");
  }
});
