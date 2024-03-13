const modifyButton = document.querySelector("#portfolio > h2 > span"); 

let pageYOffset = 0;
    
    function deleteContainer(e) {                                                                                           // SUPPRESSION DE PROJET //
        const modifyContainer = document.createElement("section");                           // Création de la box de modification //
        mainContainer.appendChild(modifyContainer);
        modifyContainer.classList.add("modifyContainer");                           // Ajout de la classe sur la box //
        bodyContainer.classList.add("backgroundCover");                           // Ajout de la classe sur le background //
        
        const modifyContent = document.querySelector(".modifyContainer");                 // Selection de la box //
        var pageYOffset = e.view.pageYOffset;                              // Ajout des PX top défilé avant de cliquer sur le bouton modifier //
        modifyContent.style.top = pageYOffset + "px";
        
        const xMarker = document.createElement("span");                 // Création de la croix //
        modifyContainer.appendChild(xMarker);
        xMarker.classList.add("xMarker");

        var removeWorksContainer = document.createElement ("div");                 // Création d'une div avec le contenu pour supprimé des elements //
        modifyContainer.appendChild(removeWorksContainer);
        removeWorksContainer.classList.add("removeContainer");

        const titleRemoveWorks = document.createElement ("h2");                 // Création du titre "Galerie Photo" //
        removeWorksContainer.appendChild(titleRemoveWorks);
        titleRemoveWorks.innerHTML = "Galerie photo";

        const worksContainer = document.createElement ("div");                  // Création de la box avec les projets //
        removeWorksContainer.appendChild(worksContainer);
        worksContainer.classList.add("figureContainer");


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
                }
            });
        
            var deleteButton = document.getElementsByClassName('deleteWork');
            console.log(deleteButton);

            for (var i = 0 ; i < deleteButton.length; i++) {
                deleteButton.item(i).addEventListener('click' , (e) => {
                    console.log("click");
                }); 
                console.log("click");
             };


        const bar = document.createElement ("span");                  // Création de labarre de séparation //
        modifyContainer.appendChild(bar);
        bar.classList.add("bar");

        xMarker.addEventListener('click', (e) => {                           // Action sur la croix pour fermer la box de modification //
            modifyContainer.remove();
            bodyContainer.classList.remove("backgroundCover");
        });

        
        const addWork = document.createElement ("p");                  // Création du bouton ajouter une photo //
        worksContainer.appendChild(addWork);
        addWork.innerHTML = "Ajouter une photo";
        addWork.classList.add("addWork");

        let lastscroll = 0                            // Ajout de l'effet au scroll de la box //
        addEventListener("scroll", (e) => {
            lastscroll = window.scrollY;
            modifyContent.style.top = lastscroll + "px";
        });

        const addButton = document.querySelector(".addWork");
        
        addButton.addEventListener("click", removeContainer);
    };

    modifyButton.addEventListener('click', deleteContainer) ;
                                                                                                  // AJOUT DE PROJET //
        function removeContainer() { 
            var removeWorksContainer = document.querySelector(".removeContainer");                                                              // fonction ajout de projet //
            removeWorksContainer.remove();
        
            const modifyContainer = document.querySelector(".modifyContainer");
            addWorksContainer = document.createElement ("div");                 // Création d'une div avec le contenu pour supprimé des elements //
            modifyContainer.appendChild(addWorksContainer);
            addWorksContainer.classList.add("addContainer");

            const titleRemoveWorks = document.createElement ("h2");                 // Création du titre "Galerie Photo" //
            addWorksContainer.appendChild(titleRemoveWorks);
            titleRemoveWorks.innerHTML = "Ajout photo";

            const backMarker = document.createElement("span");                 // Création de la flèche back//
            modifyContainer.appendChild(backMarker);
            backMarker.classList.add("backMarker");

            backMarker.addEventListener("click", (e) => {                 // Action sur l'evenement du click back //
                modifyContainer.remove();
                deleteContainer(e);
            });

            const formContainer = document.createElement ("form");
            addWorksContainer.appendChild(formContainer);
            formContainer.id = "formAddWork";

            const imgAddContainer = document.createElement ("div");                 // Ajout de la boite pour l'image// 
            formContainer.appendChild(imgAddContainer);
            imgAddContainer.classList.add("imgAddContainer");

            const logoImgContainer = document.createElement ("span");                 // Ajout du logo image // 
            imgAddContainer.appendChild(logoImgContainer);
            logoImgContainer.classList.add("logoContainer");

            const buttonImgContainer = document.createElement ("label");                 // Ajout du bouton pour ajouter la photo // 
            imgAddContainer.appendChild(buttonImgContainer);
            buttonImgContainer.classList.add("buttonImgContainer");
            buttonImgContainer.setAttribute("for","imgSend");
            buttonImgContainer.innerHTML = "+ Ajouter photo";
            const buttonImgInput = document.createElement ("input");                 // Ajout du bouton hidden lié au label // 
            imgAddContainer.appendChild(buttonImgInput);                 // Ajout de l'input image// 
            buttonImgInput.type = "file";
            buttonImgInput.accept = ".jpg, .png";
            buttonImgInput.name = "image";
            buttonImgInput.id = "imgSend";
            buttonImgInput.classList.add("buttonImgInput");

            const infoImgAdd = document.createElement ("p");                 // Ajout des restrictions du fichier envoyé // 
            imgAddContainer.appendChild(infoImgAdd);
            infoImgAdd.classList.add("infoImgAdd");
            infoImgAdd.innerHTML = "jpg, png : 4mo max";

            var imgPreview = document.createElement("div");
            imgAddContainer.appendChild(imgPreview);

            var fileTypes = ["image/jpeg", "image/png"];                 // Fonction de vérification de type de fichier //
            function validFileType(file) {
                for (var i = 0; i < fileTypes.length; i++) {
                    if (file.type === fileTypes[i]) {
                        return true;
                    }
                };

                return false;
            };

            function returnFileSize(number) {                 // Fonction de vérification du poids du fichier //
                if (number < 4194304) {
                    return true;
                } else {
                    return false;
                }
            };

            var nameimg = 0;
            var typeimg = 0;
            function updateImageSend() {                 // fonction ajout de la preview de l'image //
                while (imgPreview.firstChild) {                 // reset de la div //
                    imgPreview.removeChild(imgPreview.firstChild);
                }
                  
                var curFiles = buttonImgInput.files;
                    if (curFiles.length > 0) {                 // Vérification de fichier séléctionner //
                      var list = document.createElement("ol");
                      imgPreview.appendChild(list);
                      for (var i = 0; i < curFiles.length; i++) {
                        var listItem = document.createElement("li");
                        var para = document.createElement("p");
                        if (validFileType(curFiles[i]) && returnFileSize(curFiles[i].size)) {
                          var image = document.createElement("img");
                          image.src = window.URL.createObjectURL(curFiles[i]);
                          image.classList.add("imagePreview");
                          listItem.classList.add("imagePreview");
                  
                          listItem.appendChild(image);
                        } else {                 // Message d'erreur //
                          para.textContent =
                            "Le fichier " +
                            curFiles[i].name +
                            ": N'est pas valide ou est trop volumineux";
                          listItem.appendChild(para);
                          para.classList.add("textAlign");
                        }
                        list.appendChild(listItem);
                        nameimg = (curFiles[i].name);
                        typeimg = (curFiles[i].type);
                        logoImgContainer.remove();
                        buttonImgContainer.remove();
                        infoImgAdd.remove();
                      }
                    }
                  };

                  
                buttonImgInput.addEventListener("change", updateImageSend);                 // Appel de la fonction à l'envoie du fichier // 

            const titleContainer = document.createElement ("div");                 // Ajout de la boite pour le titre // 
            formContainer.appendChild(titleContainer);
            titleContainer.classList.add("titleContainer");

            const boxTitle = document.createElement ("p");                 // Ajout d'un texte pour le titre de la boite' // 
            titleContainer.appendChild(boxTitle);
            boxTitle.classList.add("boxTitle");
            boxTitle.innerHTML = "Titre";

            const boxInput = document.createElement ("input");                 // Ajout d'un input dans la boite' // 
            titleContainer.appendChild(boxInput);
            boxInput.type = "text";
            boxInput.id = "title";
            boxInput.name = "title";
            boxInput.classList.add("boxInput");;

            const boxTitle2 = document.createElement ("p");                 // Ajout d'un texte pour le titre de la boite' // 
            titleContainer.appendChild(boxTitle2);
            boxTitle2.classList.add("boxTitle");
            boxTitle2.innerHTML = "Catégorie";

            const boxInput2 = document.createElement ("input");                 // Ajout d'un input dans la boite' // 
            titleContainer.appendChild(boxInput2);
            boxInput2.id = "category";
            boxInput2.name = "category";
            boxInput2.classList.add("boxInput");

            const validateButton = document.createElement ("input");                  // Création du bouton valider //
            formContainer.appendChild(validateButton);
            validateButton.value = "Valider";
            validateButton.type = "submit";
            validateButton.disabled = true;                         // Désactivation du bouton submit //

            const dataCategoriesList = document.createElement ("datalist");                   // Création DATA liste //
            titleContainer.appendChild(dataCategoriesList);
            dataCategoriesList.id = "categories";

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
            }
            });

            boxInput2.setAttribute('list','categories');                         // Attribution de la data list a l'input //

            var categoryIdSelected = 0;                         // récupération de l'ID de la catégorie séléctionné //
            const text = document.getElementById('category')
            boxInput2.addEventListener('input', () => {
                const index = [... dataCategoriesList.options]
                  .map(o => o.value)
                  .indexOf(text.value)
                  categoryIdSelected = dataCategoriesList.options[index].id;
            });

            setInterval(canSubmit, 1000);                         // Boucle fonction toutes les secondes //

            const formElement = document.getElementById("formAddWork");
            var formData = new FormData();

            const textToBinary = (str = '') => {
                let res = '';
                res = str.split('').map(char => {
                   return char.charCodeAt(0).toString(2);
                }).join(' ');
                return res;
             };

            function canSubmit() {                         // Vérification si les champs sont remplis //
                if (boxInput.value && boxInput2.value && nameimg){
                    validateButton.style.backgroundColor = "#1D6154";
                    var binaryImg = textToBinary(nameimg);
                    validateButton.disabled = false;                         // Activation du bouton submit //
                    formData = new FormData(formElement);
                    formData.set("image", binaryImg);
                    formData.set("category", categoryIdSelected);
                    console.log(boxInput.value);
                    console.log(categoryIdSelected);
                    console.log(binaryImg);
                }
            };
            
            boxInput.addEventListener("click", canSubmit);                         // Lancement de la fonction //



            function submitFormReturn(e) {
                modifyContainer.remove();
                clearInterval(canSubmit);
                bodyContainer.classList.remove("backgroundCover");
             };

             var storageToken = sessionStorage.getItem("tokens"); 
             formContainer.onsubmit = async (e) => {
                submitFormReturn();
                e.preventDefault();
            
                let response = await fetch('http://localhost:5678/api/works', {
                    headers: {"Authorization": 'Bearer ' + storageToken,
                            "Content-Type": "multipart/form-data", 
                            "Access-Control-Allow-Origin": "http://localhost:5678",
                            },
                    mode : "cors",
                    method: "POST",
                    body : formData, 
                });
            
                let result = response;
                console.log(...formData);

                clearInterval(canSubmit);
                alert("Projet ajouté avec succès !");
              };
        };