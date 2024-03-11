var storageToken = sessionStorage.getItem("tokens");
const titlePortfolio = document.querySelector("#portfolio > h2");                     // Séléction du h2 dans la section portfolio //
const mainContainer = document.querySelector("main");                    // Séléction du main //
const bodyContainer = document.querySelector("body");                    // Séléction du body //

if (storageToken) {                              // Modification de la page si l'utilisateur est connecté //  
    loginButton.textContent = "logout";                     // Changement contenu du login en logout si token true //
    const modifyElement = document.createElement("span");                              // Création d'un span // 
    titlePortfolio.appendChild(modifyElement);                              // Dans le h2 //
    modifyElement.textContent = "Modifier";                              // Ajout d'un texte //


    const modifyButton = document.querySelector("#portfolio > h2 > span");                              // Selection du span avec l'icon en before dans le CSS //
    
    let pageYOffset = 0;
    modifyButton.addEventListener('click', (e) => {
        const modifyContainer = document.createElement("section");                           // Création de la box de modification //
        mainContainer.appendChild(modifyContainer);
        modifyContainer.classList.add("modifyContainer");                           // Ajout de la classe sur la box //
        bodyContainer.classList.add("backgroundCover");                           // Ajout de la classe sur le background //
        
        const modifyContent = document.querySelector(".modifyContainer");                 // Selection de la box //
        pageYOffset = e.view.pageYOffset;                              // Ajout des PX top défilé avant de cliquer sur le bouton modifier //
        modifyContent.style.top = pageYOffset + "px";
        
        const xMarker = document.createElement("span");                 // Création de la croix //
        modifyContainer.appendChild(xMarker);
        xMarker.classList.add("xMarker");
        

        const removeWorksContainer = document.createElement ("div");                 // Création d'une div avec le contenu pour supprimé des elements //
        modifyContainer.appendChild(removeWorksContainer);
        removeWorksContainer.classList.add("removeContainer");

        const titleRemoveWorks = document.createElement ("h2");                 // Création du titre "Galerie Photo" //
        removeWorksContainer.appendChild(titleRemoveWorks);
        titleRemoveWorks.innerHTML = "Galerie photo";

        const worksContainer = document.createElement ("div");                  // Création de la box avec les projets //
        removeWorksContainer.appendChild(worksContainer);
        worksContainer.classList.add("figureContainer");

        fetch("http://localhost:5678/api/works", )
            .then((res) => {
                return res.json();
            })
            .then ((works) => {
                for (const work of works) {
                    const figureElement = document.createElement("figure");                 // Création d'une balise figure //
                    worksContainer.appendChild(figureElement);                        // Ajout class figurecard a chaque figure //
                    var imagejavascript = document.createElement("img");
                    imagejavascript.src = work.imageUrl;
                    imagejavascript.alt = work.title;
                    figureElement.appendChild(imagejavascript);
                    const deleteButton = document.createElement("span");                  // Création d'un span pour supprimer les projets' //
                    figureElement.appendChild(deleteButton);
        }
    })

        const bar = document.createElement ("span");                  // Création de la box avec les projets //
        modifyContainer.appendChild(bar);
        bar.classList.add("bar");

        const addWork = document.createElement ("p");                  // Création du bouton ajouter une photo //
        modifyContainer.appendChild(addWork);
        addWork.innerHTML = "Ajouter une photo";
        addWork.classList.add("addWork");

        const addButton = document.querySelector(".addWork");

        addButton.addEventListener("click", (e) => {
            removeWorksContainer.remove();
        });
        

        
        let lastscroll = 0                            // Ajout de l'effet au scroll de la box //
        addEventListener("scroll", (e) => {
            lastscroll = window.scrollY;
            modifyContent.style.top = lastscroll + "px";
        });

        xMarker.addEventListener('click', (e) => {                           // Action sur la croix pour fermer la box de modification //
            modifyContainer.remove();
            bodyContainer.classList.remove("backgroundCover");
        });

    });







    }
