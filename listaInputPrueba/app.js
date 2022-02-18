const listaTareaUl = document.getElementById("lista-tareas");
const botonAgregar = document.getElementById("agregar");
const descripcionTarea = document.getElementById("tarea");
const prioridadCombox = document.getElementById("prioridad");
botonQuitarSeleccionados = document.getElementById("eliminar")




const crearTarea = () =>  {
    const tareaNueva = document.createElement("li");


    tareaNueva.textContent = descripcionTarea.value;
    tareaNueva.classList.add(prioridadCombox.value);

    listaTareaUl.appendChild(tareaNueva);

    const seleccionarElemento = () => {
        tareaNueva.classList.toggle("seleccionado")
    }
    tareaNueva.addEventListener("click",seleccionarElemento);

    const eliminarSeleccionado = () => {
        document.querySelectorAll(".seleccionado").forEach(element => {
            element.remove();
        })
    }


    botonQuitarSeleccionados.addEventListener("click", eliminarSeleccionado);
event.preventDefault();
};
botonAgregar.addEventListener("click", crearTarea);



