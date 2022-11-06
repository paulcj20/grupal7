//const buscar
const  inputGetId1 = document.getElementById('inputGet1Id');
const btnGet1 = document.getElementById('btnGet1');
const results = document.getElementById('results');
//const registrar
const inputPostNombre = document.getElementById('inputPostNombre');
const inputPostApellido = document.getElementById('inputPostApellido');
const btnPost = document.getElementById('btnPost');

let getData = async () => {
    if(inputGetId1.value == 0 || ""){
        let responsive = await fetch('https://63651a5bf711cb49d1f52f76.mockapi.io/users');
        let users = await responsive.json();
        let htmlToAppend = "";
        for( let user of users){
            htmlToAppend += `<div class="ps-2">
                                <li>ID: ${user.id}</li>
                                <li>Nombre: ${user.name}</li>
                                <li>Apellido: ${user.name}</li>    
                                <hr>
                            </div>
                             `
        }
        results.innerHTML = htmlToAppend;
    }else {
        let responsive = await fetch('https://63651a5bf711cb49d1f52f76.mockapi.io/users/'+inputGetId1.value)
        let user = await responsive.json();
        let htmlToAppend = "";
        htmlToAppend += `<div class="ps-2">
                            <li>ID: ${user.id}</li>
                            <li>Nombre: ${user.name}</li>
                             <li>Apellido: ${user.name}</li>    
                             <hr>
                        </div>`
        results.innerHTML = htmlToAppend;
    };
};

let postUser = () => {

}

btnGet1.addEventListener('click', getData);