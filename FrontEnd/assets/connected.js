var storageToken = sessionStorage.getItem("tokens");
const titlePortfolio = document.querySelector("#portfolio > h2");                     // Séléction du h2 dans la section portfolio //
const mainContainer = document.querySelector("main");                    // Séléction du main //
const bodyContainer = document.querySelector("body");                    // Séléction du body //

if (storageToken) {                              // Modification de la page si l'utilisateur est connecté //  
    loginButton.textContent = "logout";                     // Changement contenu du login en logout si token true //
    const modifyElement = document.createElement("span");                              // Création d'un span // 
    titlePortfolio.appendChild(modifyElement);                              // Dans le h2 //
    modifyElement.textContent = "Modifier";                              // Ajout d'un texte //
    }
