const modifyButton = document.querySelector("#portfolio > h2 > span"); 

let pageYOffset = 0;
    /* ******************************************************* Fonction suppression ********************************************** */
    function deleteContainer(e) {                                                                                           // SUPPRESSION DE PROJET //
        bodyContainer.classList.add("backgroundCover");                           // Ajout de la classe sur le background //

        const removeBox = document.querySelector(".removeBox");
        removeBox.classList.remove("displayNone");

        let worksContainer = document.querySelector(".figureContainer");
        var child  = worksContainer.firstChild;

        while (child) {
            worksContainer.removeChild(child);
            child = worksContainer.firstChild;
        }

        fetch("http://localhost:5678/api/works", )                  // Affichage des projets en ligne //
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
                    deleteButton.classList.add("deleteWork");
                    deleteButton.id = work.id;
                    const idSelected = deleteButton.id;
                    deleteButton.addEventListener('click' , (e) => {                  // Suppression des projets au clic //
                        console.log(deleteButton.id);
                        fetch('http://localhost:5678/api/works/' + deleteButton.id, {
                        headers: {"Authorization": 'Bearer ' + storageToken,
                            },
                        mode : "cors",
                        method: "DELETE",
                    });
                    const figureMainElement = document.querySelector(".gallery");
                    const figureMainIdToDelete = figureMainElement.getElementById(2);
                    figureMainIdToDelete.remove();
                    figureElement.remove();                  // Suppression de la classe figure pour l'affichage //
                    });
                }
            });
        
        const xMarker = document.querySelector(".removeBox > .xMarker");
        xMarker.addEventListener('click', (e) => {                           // Action sur la croix pour fermer la box de modification //
            removeBox.classList.add("displayNone");
            bodyContainer.classList.remove("backgroundCover");
        });

        let pageYOffset = e.view.pageYOffset;                              // Ajout des PX top défilé avant de cliquer sur le bouton modifier //
        removeBox.style.top = pageYOffset + "px";

        let lastscroll = 0                            // Ajout de l'effet au scroll de la box //
        addEventListener("scroll", (e) => {
            lastscroll = window.scrollY;
            removeBox.style.top = lastscroll + "px";
        });

        const addButton = document.querySelector(".addWork");
        
        addButton.addEventListener("click", removeContainer);
    };

    modifyButton.addEventListener('click', deleteContainer) ;
                                                                                                  // AJOUT DE PROJET //
        function removeContainer() { 
            const removeBox = document.querySelector(".removeBox");
            removeBox.classList.add("displayNone");
            const addBox = document.querySelector(".addBox");
            addBox.classList.remove("displayNone");


            const backMarker = document.querySelector(".backMarker");

            backMarker.addEventListener("click", deleteContainer);

            backMarker.addEventListener("click", (e) => {
                addBox.classList.add("displayNone");
            })

            const xMarker2 = document.querySelector(".addBox > .xMarker");

            xMarker2.addEventListener('click', (e) => {                           // Action sur la croix pour fermer la box de modification //
                addBox.classList.add("displayNone");
                bodyContainer.classList.remove("backgroundCover");
            });

            let lastscroll = 0                            // Ajout de l'effet au scroll de la box //
            addEventListener("scroll", (e) => {
            lastscroll = window.scrollY;
            addBox.style.top = lastscroll + "px";
            });

            const imgPreview = document.querySelector(".imgPreview");

            function returnFileSize(number) {                 // Fonction de vérification du poids du fichier //
                if (number < 4194304) {
                    return true;
                } else {
                    return false;
                }
            };


            const logoImgContainer = document.querySelector(".logoContainer");
            const buttonImgContainer = document.querySelector(".buttonImgContainer");
            const infoImgAdd = document.querySelector(".infoImgAdd");
            const buttonImgInput = document.querySelector(".buttonImgInput");
            logoImgContainer.classList.remove("displayNone");
            buttonImgContainer.classList.remove("displayNone");
            infoImgAdd.classList.remove("displayNone");
            let imgPreviewChild = imgPreview.firstChild;
            while (imgPreviewChild) {                 // reset de la div //
                imgPreview.removeChild(imgPreviewChild);
                imgPreviewChild = imgPreview.firstChild;
            };

            let imgName = 0;
            function updateImageSend() {                 // fonction ajout de la preview de l'image //
                
                imgPreviewChild = imgPreview.firstChild;
                while (imgPreviewChild) {                 // reset de la div //
                    imgPreview.removeChild(imgPreviewChild);
                    imgPreviewChild = imgPreview.firstChild;
                };

                let curFiles = buttonImgInput.files;
                    if (curFiles.length > 0) {                 // Vérification de fichier séléctionner //
                      let list = document.createElement("ol");
                      imgPreview.appendChild(list);
                      for (let i = 0; i < curFiles.length; i++) {
                        let listItem = document.createElement("li");
                        let para = document.createElement("p");
                        if (returnFileSize(curFiles[i].size)) {
                          let image = document.createElement("img");
                          image.src = window.URL.createObjectURL(curFiles[i]);
                          image.classList.add("imagePreview");
                          listItem.classList.add("imagePreview");
                  
                          listItem.appendChild(image);
                        } else {                 // Message d'erreur //
                          para.textContent =
                            "Le fichier " +
                            curFiles[i].name +
                            ": est trop volumineux";
                          listItem.appendChild(para);
                          para.classList.add("textAlign");
                        }
                        list.appendChild(listItem);
                        imgName = document.getElementById("imgSend").files[0].name;
                        logoImgContainer.classList.add("displayNone");
                        buttonImgContainer.classList.add("displayNone");
                        infoImgAdd.classList.add("displayNone");
                      }
                    }
                  };

                  
                buttonImgInput.addEventListener("change", updateImageSend);                 // Appel de la fonction à l'envoie du fichier // 

            const dataCategoriesList = document.getElementById("categories");

            let child  = dataCategoriesList.firstChild;

            while (child) {
                dataCategoriesList.removeChild(child);
                child = dataCategoriesList.firstChild;
            }

            fetch("http://localhost:5678/api/categories", )                         // Récupération des catégories sur l'API //
            .then((res) => {
                return res.json();
            })
            .then ((categories) => {                         // Création de la liste d'option //
                for (const category of categories) {
                    const categoryValue = document.createElement ("option");
                    dataCategoriesList.appendChild(categoryValue);
                    categoryValue.value = category.name;
                    categoryValue.id = category.id;
                    categoryValue.textContent = category.name;
            }
            });

            const boxInput = document.getElementById("title");
            const boxInput2 = document.getElementById("categories");
            let categoryIdSelected = 0;                         // récupération de l'ID de la catégorie séléctionné //

            boxInput2.addEventListener('input', () => {
                const index = [... dataCategoriesList.options]
                  .map(o => o.value)
                  .indexOf(boxInput2.value)
                  categoryIdSelected = dataCategoriesList.options[index].id;
                  categoryIdSelected = parseInt(categoryIdSelected);
            });

            setInterval(canSubmit, 1000);                         // Boucle fonction toutes les secondes //

            const validateButton = document.getElementById("submit");
            function canSubmit() {                         // Vérification si les champs sont remplis //
                if (boxInput.value && boxInput2.value && imgName){
                    validateButton.style.backgroundColor = "#1D6154";
                    validateButton.disabled = false;                         // Activation du bouton submit //
                    console.log(imgName);
                    console.log(boxInput.value);
                    console.log(categoryIdSelected);
                }
            };
            
            boxInput.addEventListener("click", canSubmit);                         // Lancement de la fonction //

            function submitFormReturn(e) {
                addBox.classList.add("displayNone");
                clearInterval(canSubmit);
                bodyContainer.classList.remove("backgroundCover");
             };

            let formData = new FormData();

            const formContainer = document.getElementById("formAddWork");
            let storageToken = sessionStorage.getItem("tokens"); 
            formContainer.addEventListener("submit", (e) => {
                submitFormReturn();
                e.preventDefault();
                clearInterval(canSubmit);
                formData.append("image", imgName);
                formData.append("title", boxInput.value);
                formData.append("category", categoryIdSelected);
            
                fetch('http://localhost:5678/api/works', {
                    headers: {"Authorization": 'Bearer ' + storageToken,
                            "Content-Type": "multipart/form-data",
                            },
                    method: "POST",
                    body : formData, 
                })
                .then ((res) =>
                alert("Projet ajouté avec succès !")
                );
            console.log(...formData);
            });
        };