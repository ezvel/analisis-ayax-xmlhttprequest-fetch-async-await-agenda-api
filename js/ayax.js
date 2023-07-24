const mostrarContactos = async() => {
    $table = document.querySelector(".table__body");
    $fragment = document.createDocumentFragment();
    
    try{
        let res = await fetch("http://localhost:3000/contactos");
        let json = await res.json();

        if(res.ok) {
            json.forEach( (objeto) => {
                $row = document.createElement("tr");
                $row.innerHTML = "";
                $row.innerHTML += `
                    <td>${objeto.nombre}</td>
                    <td>${objeto.apellido}</td>
                    <td>${objeto.telefono}</td>
                    <td>${objeto.direccion}</td>
                    <td>${objeto.email}</td>
                    <td>
                        <button class="editar" onclick="llenarDatosDelContactoAlFormulario(event)" data-id="${objeto.id}" data-nombre="${objeto.nombre}" data-apellido="${objeto.apellido}" data-telefono="${objeto.telefono}" data-direccion="${objeto.direccion}" data-email="${objeto.email}">Editar</button>
                        <button class="eliminar" onclick="eliminarContacto(event)" data-id="${objeto.id}">Elminar</button>
                    </td>
                `;

            $fragment.appendChild($row);
            $table.appendChild($fragment);
            })

        } else {
            throw {status: res.status, statusText: res.statusText};

        }

    } catch(error) {
        let message = error.status + " " + error.statusText || "Error";
        $error = document.getElementById("error");
        $error.textContent = message;
    }

};



const agregarContacto = async(datos) => {

    let {nombre, apellido, telefono, direccion, email} = datos;

    try{

        let res = await fetch("http://localhost:3000/contactos" , {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                nombre,
                apellido,
                telefono,
                direccion,
                email
            })
        })

        if(res.ok) {
            json = await(res).json();
            location.reload();
        } else {
            throw {status: res.status, statusText: res.statusText};
        }

    } catch(err) {
        let message = error.status + " " + error.statusText || "Error";
        $error = document.getElementById("error");
        $error.textContent = message;
    }

}

const modificarContacto = async(datos)  => {
    let {id, nombre, apellido, telefono, direccion, email} = datos;

    try{
        let res = await fetch(`http://localhost:3000/contactos/${id}`, {
            method: "PUT",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                id,
                nombre,
                apellido,
                telefono,
                direccion,
                email
            })
        })

        if(res.ok) {
            json = await(res).json();
            location.reload();
        } else {
            throw {status: res.status, statusText: res.statusText};
        }

    } catch(err) {
        let message = error.status + " " + error.statusText || "Error";
        $error = document.getElementById("error");
        $error.textContent = message;
    }

}

const eliminarContacto = async(e) => {
    const id = e.target.dataset.id;
    const isDelete = confirm("¿Está seguro de eliminar?");
    
    if(isDelete) {
        try {
            let res = await fetch(`http://localhost:3000/contactos/${id}`, {
            method: "DELETE",
            headers: {"Content-type": "application/json"},
            })

            if(res.ok) {
                json = await(res).json();
                location.reload();
            } else {
                throw {status: res.status, statusText: res.statusText};
            }

        }  catch(err) {
            let message = error.status + " " + error.statusText || "Error";
            $error = document.getElementById("error");
            $error.textContent = message;
        }

    }
}