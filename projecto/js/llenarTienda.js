export function llenarTienda(){
    let productos=[
        {nombre:"stay at nigt sculpture",precio:400000,foto:"../img/tienda1.jpg",descripcion:"a sculture fom the fate saga"},
        {nombre:"comand seal t-sheart",precio:80000,foto:"../img/tienda2.jpg",descripcion:"a t-sheart with comand seals"},
        {nombre:"heavenly fells bealt",precio:50000,foto:"../img/tienda3.jpg",descripcion:"a belt with a unique patern"},
        {nombre:"PS4 fate",precio:35000,foto:"../img/tienda4.1.jpg",descripcion:"the video game extra link"},
        {nombre:"tune PS4",precio:300000,foto:"../img/tienda5.jpg",descripcion:"a PS4 wiht fate designe"},
        {nombre:"saber backpack",precio:80000,foto:"../img/tienda6.jpg",descripcion:"a bacpack with the saber emblem"},
        {nombre:"mystery box",precio:2000000,foto:"../img/tienda7.jpg",descripcion:"???????"},
        {nombre:"mouse pad",precio:300000,foto:"../img/tienda8.1.jpg",descripcion:"a excusive mouse pad from the fate series"},
        {nombre:"holy grail",precio:250000,foto:"../img/tienda9.jpg",descripcion:"¡THE LEGENDARY HOLY GRAIL!"},
        {nombre:"movie ticket",precio:80000,foto:"../img/tienda10.jpg",descripcion:"a ticket to go an whatch any ot the fate movoes in your favorite theatre"}
    ]
   let fila=document.getElementById("fila")
   productos.forEach(function(producto){
    let columna=document.createElement("div")
    columna.classList.add("col")
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")
    let imagen=document.createElement("img")
    imagen.classList.add("card-img-top")
    imagen.classList.add("p-3")
    imagen.classList.add("h-100")
    imagen.src=producto.foto
    let separador=document.createElement("hr")
    separador.classList.add("w-50")
    separador.classList.add("mx-auto")
    separador.classList.add("d-block")
    let nombre=document.createElement("h5")
    nombre.classList.add("fw-bold")
    nombre.classList.add("text-center")
    nombre.classList.add("mx-3")
    nombre.textContent=producto.nombre
    let precio=document.createElement("h6")
    precio.classList.add("text-center")
    precio.classList.add("text-muted")
    precio.textContent=producto.precio
    let botonAmpliarInfo=document.createElement("button")
    botonAmpliarInfo.setAttribute("type","button")
    botonAmpliarInfo.classList.add("btn")
    botonAmpliarInfo.classList.add("btn-outline-dark")
    botonAmpliarInfo.classList.add("mx-3")
    botonAmpliarInfo.classList.add("mb-3")
    botonAmpliarInfo.textContent="Ver producto"
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(separador)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(botonAmpliarInfo)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})
}