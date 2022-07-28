
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


const vestidos = temporadaVerano.filter ((el) => el.categoria.includes("vestido"));
const tops = temporadaVerano.filter ((el) => el.categoria.includes("top"));
const falda = temporadaVerano.filter ((el) => el.categoria.includes("falda"));
const camisa = temporadaVerano.filter ((el) => el.categoria.includes("camisa"));


let opciones = prompt(" Precione: \n 1- Si quiere buscar alguna producto en particular \n 2- Si quiere ver toda la lista de producto \n 3- Si quieres iniciar su compra")


if (opciones == 1) {
    let opcionesProductos = prompt ("Que estas buscando \n A: VESTIDO \n B: TOP \n C: FALDA \n D: CAMISA")
    if (opcionesProductos == "A" || opcionesProductos == "a") {
        console.log(vestidos)
    } else if (opcionesProductos == "B" || opcionesProductos == "b") {
        console.log(tops)
    } else if (opcionesProductos == "C" || opcionesProductos == "c") {
            console.log(falda)
        } else if (opcionesProductos == "D" || opcionesProductos == "d") {
            console.log(camisa)  
        }
    }  else if (opciones == 2){
        console.log(temporadaVerano)
    }   else if (opciones == 3) {
        let idIngresado = prompt("ingrese el numero del ID")
        let idCompra = temporadaVerano[idIngresado].id;
        let precio = temporadaVerano[idIngresado].precio;
        if (idIngresado == idCompra) {
            console.log("El total de tu compra es de " + precio)
        } else {
            alert("ingrese un ID correcto")
        }
    
    } else {
        alert("Ingrese un opcion correcta")
    }
    

    