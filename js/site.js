const temporadaVerano = [
    {id: 1, nombre: "Eva", precio: 6000, categoria: "vestido", imagen:"multimedia/imagenes/vestidoeva.webp"},
    {id: 2, nombre: "Bianca", precio: 6500, categoria: "vestido", imagen: "multimedia/imagenes/vestidobianca.webp"},
    {id: 3, nombre: "Nina", precio: 3000, categoria: "top", imagen: "multimedia/imagenes/topnina.webp"},
    {id: 4, nombre: "Lisa", precio: 3400, categoria: "top", imagen: "multimedia/imagenes/toplisa.webp"},
    {id: 5, nombre: "Kika", precio: 3600, categoria: "top", imagen: "multimedia/imagenes/topkika.webp"},
    {id: 6, nombre: "Chofa", precio: 5000, categoria: "falda", imagen: "multimedia/imagenes/faltachofa.webp"},
    {id: 7, nombre: "Lola", precio: 5500, categoria: "falda", imagen: "multimedia/imagenes/faldalola.webp"},
    {id: 8, nombre: "Tita", precio: 4000, categoria: "camisa", imagen: "multimedia/imagenes/camisatita.webp"},
    {id: 9, nombre: "Nuri", precio: 4500, categoria: "camisa", imagen: "multimedia/imagenes/camisanuri.webp"},
]

const carritoCompras = [];

let nombreUsuario = prompt("Registrate dejando tu nombre")

let bienvenido = document.getElementById("bienvenido");
bienvenido.innerText = `Bienvenido/a ${nombreUsuario}. Gracias por registraste`



let formaDePago = document.getElementById("formaPago");
let formaDeEnvio = document.getElementById("formaEnvio");
let devoluciones = document.getElementById("devoluciones")

formaDePago.addEventListener("mousemove", (e) => {
    return formaDePago.innerText = "15%off en efectivo. 3/6 cuotas sin interes"
    
})

formaDeEnvio.addEventListener("mousemove", (e) => {
    return formaDeEnvio.innerText = "Envios a todos el pais. Envios a CABA y GBA en 24hs"
})

devoluciones.addEventListener("mousemove", (e) => {
    return devoluciones.innerHTML = "Devoluciones dentro de los 15 días de recibida la compra"
})

const contenedorProductos = document.getElementById("contenedor-productos");
const contenedorCarrito = document.getElementById("contenedor-carrito");
const totalCompra = document.getElementById("total-compra");
const agregarAlCarrito = (produId) => {
    
    const itemCarrito = temporadaVerano.find((produ) => produ.id === produId);
    carritoCompras.push(itemCarrito);
    ActualizarCarrito();
}

temporadaVerano.forEach((productos) => {
    const div = document.createElement("div");
    div.classList.add("productos");
    div.innerHTML = `
    <div class"productos${productos.id}">
    <img class="foto-producto" src="${productos.imagen}">
    <h2 class="nombre-producto" > ${productos.nombre} </h2>
    <p>  $${productos.precio} </p>
    <button id="boton${productos.id}" class = "boton"> Agregar al carrito </button>
    </div>
    `
    contenedorProductos.appendChild(div)
    const botonCompra = document.getElementById(`boton${productos.id}`);
    botonCompra.addEventListener("click", () => {
        agregarAlCarrito(productos.id)
    });;
})

const ActualizarCarrito = () => {
contenedorCarrito.innerHTML = "";
carritoCompras.forEach((productoCarrito) => {
    const divCarrito = document.createElement("div");
    divCarrito.classList.add("productoCarrito")
    divCarrito.innerHTML = `
    <p> ${productoCarrito.nombre} </p>
    <p> $${productoCarrito.precio} </p> `
    contenedorCarrito.appendChild(divCarrito)
    totalCompra.innerHTML = "Total: $" + carritoCompras.reduce ((acc, productoCarrito) => acc + productoCarrito.precio, 0)
    localStorage.setItem(productoCarrito.nombre, productoCarrito.precio)
})
}