import { articulosCarrito } from "./app.js"
import { carritoHTML } from "./carrito.js"

export function eliminarElemento(e) {
    e.preventDefault()
    // console.log('Eliminar elemento');
    const eliminar = e.target.matches('.borrar-curso')
    // console.log(eliminar);
    if (eliminar) {
        const cursoID = e.target.getAttribute('data-id')
        // console.log(cursoID);
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoID)
        carritoHTML(articulosCarrito)
    }
}