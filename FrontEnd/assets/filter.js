const buttonAll = document.getElementById("all");
const buttonObjects = document.getElementById("objects");
const buttonApparts = document.getElementById("apparts");
const buttonHotels = document.getElementById("hotels");
const figureElements = figureContainer.getElementsByClassName("figurecard");
const buttonContainer = document.querySelectorAll(".filters > div");


    fetch("http://localhost:5678/api/works", )
    .then((res) => {
        return res.json();
    })
    .then ((works) => {
        buttonAll.addEventListener('click', (e) => {                        // Evenement au click sur le bouton TOUS //
            var i = 0;
            buttonContainer.item(1).classList.remove("selected");           // Supppression de la classe button selectionner //
            buttonContainer.item(2).classList.remove("selected");           // Supppression de la classe button selectionner //
            buttonContainer.item(3).classList.remove("selected");           // Supppression de la classe button selectionner //
            buttonContainer.item(0).classList.add("selected");           // Ajout de la classe button selectionner //
            for (const work of works) {                                     // Boucle de chaque element du Array Works //
                figureElements.item(i).classList.remove("hidden");          // Supppression de la classe hidden sur chaque elements //
                i++;
            }
        })
        buttonObjects.addEventListener('click', (e) => {
            var i = 0;
            buttonContainer.item(0).classList.remove("selected");
            buttonContainer.item(2).classList.remove("selected");
            buttonContainer.item(3).classList.remove("selected");
            buttonContainer.item(1).classList.add("selected");
            for (const work of works) {
                figureElements.item(i).classList.remove("hidden");
                if (work.category.id != 1) {                               // Séléction des elements avec une classe différentes aux objects, ID 1 //
                    figureElements.item(i).classList.add("hidden");
                };
                i++;
            };
        })
        buttonApparts.addEventListener('click', (e) => {
            var i = 0;
            buttonContainer.item(0).classList.remove("selected");
            buttonContainer.item(1).classList.remove("selected");
            buttonContainer.item(3).classList.remove("selected");
            buttonContainer.item(2).classList.add("selected");
            for (const work of works) {
                figureElements.item(i).classList.remove("hidden");
                if (work.category.id != 2) {
                    figureElements.item(i).classList.add("hidden");
                };
                i++;
            };
        })
        buttonHotels.addEventListener('click', (e) => {
            var i = 0;
            buttonContainer.item(0).classList.remove("selected");
            buttonContainer.item(1).classList.remove("selected");
            buttonContainer.item(2).classList.remove("selected");
            buttonContainer.item(3).classList.add("selected");
            for (const work of works) {
                figureElements.item(i).classList.remove("hidden");
                if (work.category.id != 3) {
                    figureElements.item(i).classList.add("hidden");
                };
                i++;
            };
        })
    })
    .catch((err) => console.log(err));