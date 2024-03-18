Form submission canceled because the form is not connected

.addEventListener("submit", (e) => {
    submitFormReturn();
    console.log(formData);
    fetch('http://localhost:5678/api/works', {
    headers: {"Authorization": 'Bearer ' + storageToken,
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "http://localhost:5678",
            },
    mode : "cors",
    method: "POST",
    body : new FormData(formElement), 
    })
    .then(resp => resp.json())
    .catch((err) => console.log(err))

    return false;
    
 })


 deleteButton.addEventListener('click', (e) => {
    fetch('http://localhost:5678/api/works', {
            headers: {"Authorization": 'Bearer ' + storageToken,
                    "Content-Type": "multipart/form-data",
                    "Access-Control-Allow-Origin": "http://localhost:5678",
                    },
            mode : "cors",
            method: "POST",
            body : deleteButton.id, 
        });
});


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