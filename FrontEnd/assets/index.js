const figureContainer = document.querySelector(".gallery");                 // Selection de la classe gallery //

fetch("http://localhost:5678/api/works", )
    .then((res) => {
        return res.json();
    })
    .then ((works) => {
        for (const work of works) {
            const figureElement = document.createElement("figure");                 // Création d'une balise figure //
            figureContainer.appendChild(figureElement);                         // Enfant de .gallery //
            figureElement.classList.add("figurecard");                          // Ajout class figurecard a chaque figure //
            figureElement.id = work.id;
            var imagejavascript = document.createElement("img");
            imagejavascript.src = work.imageUrl;
            imagejavascript.alt = work.title;
            figureElement.appendChild(imagejavascript);
            var titleElement = document.createElement("figcaption");
            titleElement.innerHTML = work.title;
            figureElement.appendChild(titleElement);
        }
    })
    .catch((err) => console.log(err));