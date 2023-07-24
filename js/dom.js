document.getElementById("reset").addEventListener("click", () => {
    const $botonEnviar = document.getElementById("cargar");
    const $botonModificar = document.getElementById("modificar");
    $botonEnviar.disabled = false;
    $botonModificar.disabled = true;
})

const llenarDatosDelContactoAlFormulario = (e) => {
    const $form = document.querySelector(".form");
    const $botonEnviar = document.getElementById("cargar");
    const $botonModificar = document.getElementById("modificar");
    $botonModificar.setAttribute("data-id", e.target.dataset.id);
    $form.nombre.value = e.target.dataset.nombre;
    $form.apellido.value = e.target.dataset.apellido;
    $form.telefono.value = e.target.dataset.telefono;
    $form.direccion.value = e.target.dataset.direccion;
    $form.email.value = e.target.dataset.email;
    $botonEnviar.disabled = true;
    $botonModificar.disabled = false;
}

