import { carritoHTML } from "./carrito.js"
// import { eliminarElemento } from "./eliminarElemento.js"
import * as v from "./variables.js"
var articulosCarrito = []

document.addEventListener('DOMContentLoaded', () => {
    v.listaCursos.addEventListener('click', agregarCurso)

    v.carrito.addEventListener('click', eliminarElemento)
    v.vaciarCarritoBTN.addEventListener('click', () => { carritoHTML(articulosCarrito = []) })

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

    // console.log(articulosCarrito);

    // Sumar cantidades
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)//Devuelve un booleano en caso de existir un elemento o no dentro del array
    console.log(existe);
    if (existe) {
        articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++
                return
            }
        })
    } else {
        articulosCarrito = [...articulosCarrito, infoCurso]
    }

    carritoHTML(articulosCarrito)
}


function eliminarElemento(e) {
    e.preventDefault()
    // console.log('Eliminar elemento');
    const eliminar = e.target.matches('.borrar-curso')
    // console.log(eliminar);
    if (eliminar) {
        const cursoID = e.target.getAttribute('data-id')
        // console.log(cursoID);
        // console.log(articulosCarrito);
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoID)
        // console.log(articulosCarrito);
        carritoHTML(articulosCarrito)
    }
}

function eliminarTodosLosCurso(e) {
    console.log(e.target.className);
    carritoHTML(articulosCarrito = [])
    // if (e.target.className === "button u-full-width") {
    //     articulosCarrito = [];
    //     carritoHTML(articulosCarrito)
    // }

    // articulosCarrito = []
}