//const buscar
const  inputGetId1 = document.getElementById('inputGet1Id');
const btnGet1 = document.getElementById('btnGet1');
const results = document.getElementById('results');
//const registrar
const inputPostNombre = document.getElementById('inputPostNombre');
const inputPostApellido = document.getElementById('inputPostApellido');
const btnPost = document.getElementById('btnPost');
//const modal
const modalInvalidFeedback = document.getElementById('modal-invalid-feedback');
// const put
const inputPutId = document.getElementById('inputPutId');
const btnPut = document.getElementById('btnPut');

let getUsers = async id => {
    if(id == 0 || ""){
        let response = await fetch('https://63651a5bf711cb49d1f52f76.mockapi.io/users');
        if(response.ok){
            let users = await response.json();
            modalInvalidFeedback.classList.add('d-none');
            modalInvalidFeedback.classList.remove('d-flex')
            appendUsers(users)                 
        }else {
            modalInvalidFeedback.classList.add('d-flex');
            modalInvalidFeedback.classList.remove('d-none');
        }
    }else {
        let response = await fetch('https://63651a5bf711cb49d1f52f76.mockapi.io/users/'+inputGetId1.value)
        if(response.ok){
            let user = await response.json();
            console.log(user);
            let users = [];
            users[users.length] = user;
            modalInvalidFeedback.classList.add('d-none');
            modalInvalidFeedback.classList.remove('d-flex')
            appendUsers(users);
        }else{
            modalInvalidFeedback.classList.add('d-flex');
            modalInvalidFeedback.classList.remove('d-none')
        }
        
    };
};

let appendUsers = users => {
    let htmlToAppend = "";
    for ( let user of users ){
        htmlToAppend += `<div class="ps-2">
                                    <li>ID: ${user.id}</li>
                                    <li>Nombre: ${user.name}</li>
                                    <li>Apellido: ${user.lastname}</li>    
                                    <hr>
                                </div>
                                `
    };
    results.innerHTML = htmlToAppend;
};

let postUser = async () => {
    let url = "https://63651a5bf711cb49d1f52f76.mockapi.io/users";
    let usuario = {'name': inputPostNombre.value,'lastname': inputPostApellido.value}
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(usuario)
    });
    if(response.ok){
        getUsers(0);
        modalInvalidFeedback.classList.add('d-none');
        modalInvalidFeedback.classList.remove('d-flex');
        let result = await response.json();
        console.log(result);

    }else{
        modalInvalidFeedback.classList.add('d-flex');
        modalInvalidFeedback.classList.remove('d-none');
    }
    
}

let putUser = async () => {
    
};

btnGet1.addEventListener('click', () => getUsers(inputGetId1.value));
btnPost.addEventListener('click', postUser);


let checkInputReg = () => {
    if (inputPostNombre.value!="" && inputPostApellido.value != ""){       
        btnPost.disabled = false;
    } else {
        btnPost.disabled = true;
    }
}

inputPutId.addEventListener('input', () => {
    if(inputPutId.value){
        btnPut.disabled = false;
    }else {
        btnPut.disabled = true;
    }
});
