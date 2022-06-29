import { carritoHTML } from "./carrito.js"
import * as v from "./variables.js"
let articulosCarrito = []
document.addEventListener('DOMContentLoaded', () => {
    v.listaCursos.addEventListener('click', agregarCurso)

})

export function agregarCurso(e) {
    e.preventDefault()
    // console.log(e.target.classList.contains('agregar-carrito'));
    if (e.target.classList.contains('agregar-carrito')) {
        // console.log(e.target.parentElement.parentElement);
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerDatosCurso(cursoSeleccionado)
    }
}

function leerDatosCurso(curso) {
    // console.log(curso);
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    // console.log(infoCurso);
    // Agregar elementos al arreglo del carrito

    articulosCarrito = [...articulosCarrito, infoCurso]
    // console.log(articulosCarrito);
    
    carritoHTML(articulosCarrito)
}


