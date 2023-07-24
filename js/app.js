const $btnEnviar = document.getElementById("cargar");
const $btnModificar = document.getElementById("modificar");

//Al recargar la página mostrame todos mis contactos

document.addEventListener("DOMContentLoaded", () => {
    const $botonModificar = document.getElementById("modificar");
    $botonModificar.disabled = true;
    mostrarContactos();
});

//Al hacer click en enviar: 1)Validar los datos, 2)Agregar el contacto
$btnEnviar.addEventListener("click", (e) => {
    let nombre = document.getElementById("nom").value;
    let apellido = document.getElementById("ape").value;
    let telefono = document.getElementById("tel").value;
    let direccion = document.getElementById("dir").value;
    let email = document.getElementById("email").value;

    const datos = {
        "nombre": nombre,
        "apellido": apellido,
        "telefono": telefono,
        "direccion": direccion,
        "email": email
    }
    
    //const hayErrores = validarFormulario(datos);

    
    const hayErrores = false;
    
    
    if(!hayErrores) {
        agregarContacto(datos);
    }

    e.preventDefault();

});


//Modificar contacto
$btnModificar.addEventListener("click", (e) => {
    let nombre = document.getElementById("nom").value;
    let apellido = document.getElementById("ape").value;
    let telefono = document.getElementById("tel").value;
    let direccion = document.getElementById("dir").value;
    let email = document.getElementById("email").value;
    let id = $btnModificar.dataset.id;

    
    const datos = {
        "id": id,
        "nombre": nombre,
        "apellido": apellido,
        "telefono": telefono,
        "direccion": direccion,
        "email": email
    }
    
    //const hayErrores = validarFormulario(datos);

    const hayErrores = false;

    if(!hayErrores) {
        modificarContacto(datos);
    }

    e.preventDefault();
});


