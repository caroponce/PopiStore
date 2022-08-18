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

let carritoCompras = [];

let nombreUsuario = prompt("Registrate dejando tu nombre");

let bienvenido = document.getElementById("bienvenido");
bienvenido.innerText = `Bienvenido/a ${nombreUsuario}. Gracias por registraste`


// eventos de consultas
let formaDePago = document.getElementById("formaPago");
let formaDeEnvio = document.getElementById("formaEnvio");
let devoluciones = document.getElementById("devoluciones")

//medios de pagos
const mediosPagos = document.getElementById("contenedor-mediosp")
formaDePago.addEventListener("mouseover", () => {
  const div = document.createElement("div");
    div.classList.add("texto-pagos");
    div.innerHTML = `<img id="textos-pagos" src="./multimedia/imagenes/mediosdepagos-atras.svg">
    `
    mediosPagos.appendChild(div)
 
})
$("#formaPago").mouseleave(function(){
  $(".texto-pagos").hide();
}) 
// entregas
const contenedorEntregas = document.getElementById("contenedor-entregas")
formaDeEnvio.addEventListener("mouseover", () => {
  const div = document.createElement("div");
  div.classList.add ("texto-entregas");
  div.innerHTML = `<img id="textos-entregas" src="./multimedia/imagenes/entregas-atras.svg">`
  contenedorEntregas.appendChild(div)
})
$("#formaEnvio").mouseleave(function(){
  $(".texto-entregas").hide();
})
// devoluciones
const contenedorDevoluciones = document.getElementById("contenedor-devoluciones")
devoluciones.addEventListener("mouseover", () => {
  const div = document.createElement("div");
  div.classList.add ("texto-devoluciones");
  div.innerHTML = `<img id="textos-devoluciones" src="./multimedia/imagenes/devoluciones-atras.svg">`
  contenedorDevoluciones.appendChild(div)
})
$("#devoluciones").mouseleave(function(){
  $(".texto-devoluciones").hide();
})


// fin eventos de consultas

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
    localStorage.getItem(productoCarrito.nombre, productoCarrito.precio)
    
})
}

const finalizarCompra = document.getElementById("finalizar-compra")

finalizarCompra.addEventListener("click", () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Quierés confirmar la compra?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, quiero confirmar',
        cancelButtonText: 'No, cancelalo!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Buenisimo!',
            'Orden creada. Nos comunicaremos con vos para realizar el pago'
                      )
        } else if (
          
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Ok',
            'Si te arrepentís volvé y comprá!'
          )
        }
      })
})