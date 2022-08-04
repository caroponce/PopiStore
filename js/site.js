
class producto {
    constructor (id, nombre, precio,categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.categoria = categoria;
    }
}

const temporadaVerano = []

temporadaVerano.push(new producto (0, "Eva", 6000, "vestido"));
temporadaVerano.push(new producto (1, "Bianca", 6500, "vestido"));
temporadaVerano.push(new producto (2, "Nina", 3000, "top"));
temporadaVerano.push(new producto (3, "Lisa", 3500, "top"));
temporadaVerano.push(new producto (4, "Kika", 3500, "top"));
temporadaVerano.push(new producto (5, "Chofa", 5000, "falda"));
temporadaVerano.push(new producto (6, "Lola", 5500, "falda"));
temporadaVerano.push(new producto (7, "Tita", 5500, "camisa"));
temporadaVerano.push(new producto (8, "Nuri", 5300, "camisa"));


let nombreUsuario = prompt("Registrate dejando tu nombre")

let bienvenido = document.getElementById("bienvenido");
bienvenido.innerText = `Bienvenido/a ${nombreUsuario}. Gracias por registraste`

let numero = 0
        while (numero < 8) {
         numero++;
        let listaProductos = document.createElement("div");
        listaProductos.innerHTML = `<h3> Producto:${temporadaVerano[numero].nombre}</h3>
                                    <br />  <b>$: ${temporadaVerano[numero].precio} </b> `
        document.body.appendChild(listaProductos);
                        }

let itemLista = document.getElementById("consultas-gral");

itemLista.onmouseover = () => console.log("Metodos de pago : Transferencia, tarjeta de débito y tarjeta de crédito, Envios a todos el pais por correo argentino, 30 días para devoluciones");
   
let carritoEva = document.getElementById("carrito-eva");
carritoEva.addEventListener("click", agregarCarrito1);
function agregarCarrito1() {
    console.log("Se ha agregado el producto " + temporadaVerano[0].nombre + " al carrito $" + temporadaVerano[0].precio)
    }

let carritoBianca = document.getElementById("carrito-bianca");
carritoBianca.addEventListener("click", agregarCarrito2);
function agregarCarrito2() {
    console.log("Se ha agregado el producto " + temporadaVerano[1].nombre + " al carrito $" + temporadaVerano[1].precio)
        }
let carritoNina = document.getElementById("carrito-nina");
carritoNina.addEventListener("click", agregarCarrito3);
function agregarCarrito3() {
console.log("Se ha agregado el producto " + temporadaVerano[2].nombre + " al carrito $" + temporadaVerano[2].precio)
          }
let carritoLisa = document.getElementById("carrito-lisa");
carritoLisa.addEventListener("click", agregarCarrito4);
function agregarCarrito4() {
console.log("Se ha agregado el producto " + temporadaVerano[3].nombre + " al carrito $" + temporadaVerano[3].precio)
        }
let carritoKika = document.getElementById("carrito-kika");
carritoKika.addEventListener("click", agregarCarrito5);
function agregarCarrito5() {
console.log("Se ha agregado el producto " + temporadaVerano[4].nombre + " al carrito $" + temporadaVerano[4].precio)
        }
let carritoChofa = document.getElementById("carrito-chofa");
carritoChofa.addEventListener("click", agregarCarrito6);
function agregarCarrito6() {
console.log("Se ha agregado el producto " + temporadaVerano[5].nombre + " al carrito $" + temporadaVerano[5].precio)
                }
let carritoLola = document.getElementById("carrito-lola");
carritoLola.addEventListener("click", agregarCarrito7);
function agregarCarrito7() {
 console.log("Se ha agregado el producto " + temporadaVerano[6].nombre + " al carrito $" + temporadaVerano[6].precio)
     }
let carritoTita = document.getElementById("carrito-tita");
carritoTita.addEventListener("click", agregarCarrito8);
function agregarCarrito8() {
console.log("Se ha agregado el producto " + temporadaVerano[7].nombre + " al carrito $" + temporadaVerano[7].precio)
          }
let carritoNuri = document.getElementById("carrito-nuri");
carritoNuri.addEventListener("click", agregarCarrito9);
function agregarCarrito9() {
console.log("Se ha agregado el producto " + temporadaVerano[8].nombre + " al carrito $" + temporadaVerano[8].precio)
                    }