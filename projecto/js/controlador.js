import {llenarTienda} from "./llenarTienda.js"
import {ampliarInfoProducto} from "./ampliarInfoProducto.js"
import {agregarCarrito} from "./agregarAlCarrito.js"
import {verCarrito} from "./verCarrito.js"
let producto={}
let carrito=[]
llenarTienda()
let modalInfoProducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
let listaProductos=document.getElementById("fila")
listaProductos.addEventListener("click",function(event){
    producto=ampliarInfoProducto(event)
    modalInfoProducto.show()
})
let botonAgregarCarrito=document.getElementById("botonAgregarProducto")
botonAgregarCarrito.addEventListener("click",function(){   
    let cantidadProducto=document.getElementById("cantidadProducto").value
    producto.cantidad=cantidadProducto
    carrito.push(producto)
    modalInfoProducto.hide()
    agregarCarrito(carrito)
})
let botonVerCarrito=document.getElementById("botonCarrito")
botonVerCarrito.addEventListener("click",function(){
    verCarrito(carrito)
})