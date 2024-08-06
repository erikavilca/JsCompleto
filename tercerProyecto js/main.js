productos = [
  {
    nombre: "palo celeste",
    categoria: "palos",
    precio: "$100000",
    id: 1,
    image: "https://via.placeholder.com/100",
  },
  {
    nombre: "palo negro",
    categoria: "palos",
    precio: "$200000",
    id: 2,
    image: "https://via.placeholder.com/100",
  },
  {
    nombre: "palo de madera",
    categoria: "palos",
    precio: "$220000",
    id: 3,
    image: "https://via.placeholder.com/100",
  },
  {
    nombre: "palo vlack",
    categoria: "palos",
    precio: "$190000",
    id: 4,
    image: "https://via.placeholder.com/100",
  },
  {
    nombre: "palo jr",
    categoria: "palos",
    precio: "$150000",
    id: 5,
    image: "https://via.placeholder.com/100",
  },
  {
    nombre: "bolso negro",
    categoria: "bolsos",
    precio: "$90000",
    id: 6,
    image: "https://via.placeholder.com/100",
  },
  {
    nombre: "funda",
    categoria: "bolsos",
    precio: "$40000",
    id: 7,
    image: "https://via.placeholder.com/100",
  },
  {
    nombre: "bocha colores",
    categoria: "accesorios",
    precio: "$3000",
    id: 8,
    image: "https://via.placeholder.com/100",
  },
  {
    nombre: "bocha blanca",
    categoria: "accesorios",
    precio: "$3100",
    id: 9,
    image: "https://via.placeholder.com/100",
  },
  {
    nombre: "bocha profesional",
    categoria: "accesorios",
    precio: "$6000",
    id: 10,
    image: "https://via.placeholder.com/100",
  },
  {
    nombre: "canillera",
    categoria: "accesorios",
    precio: "$20000",
    id: 11,
    image: "https://via.placeholder.com/100",
  },
  {
    nombre: "MediasPremiun",
    categoria: "accesorios",
    precio: "$2500",
    id: 12,
    image: "https://via.placeholder.com/100",
  },
];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [] ; //se van agregado segun cunado producto elija el usuario.

const pintarProducto = (ArraysDeProducto) => {
  let container = document.getElementById("container");
  container.innerHTML = "";
  ArraysDeProducto.forEach((producto) => {
    let productoCarrito = document.createElement("div");
    productoCarrito.className = "itemNuevos";
    productoCarrito.innerHTML = `<img src=${producto.image}/>
      <h2>${producto.nombre} </h2>
      <p>${producto.precio}</p>
      <button onclick="agregarAlCarrito(${producto.id})">
      agregar</button>`;
    container.appendChild(productoCarrito);
  });
};
pintarProducto(productos);

const agregarAlCarrito = (id) => {
  let producto = productos.find((elemento) => elemento.id === id);
  let sumarProducto = carrito.find((elemento) => elemento.id === id);

  if(sumarProducto){
    sumarProducto.quantity+=1 
      localStorage.setItem("carrito", JSON.stringify(carrito));
  }else{
    carrito.push({...producto, quantity : 1});
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
      let mostrartotal= document.getElementById("resultado")
  let otro= document.createElement("div")
  otro.className= "costadoItem"
  otro.innerHTML = `<p>${producto.nombre} ${producto.precio}</p>`
  mostrartotal.appendChild(otro)
};

let inputBuscador = document.getElementById("buscador");
if (inputBuscador) {
  inputBuscador.addEventListener("input", (event) => {
    let value = event.target.value.toLowerCase();
    let filtroProducto = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(value)
    );
    pintarProducto(filtroProducto);
  });
}

const formulario = document.getElementById("FiltradoFinal");
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  function obtenerSeleccion(nombre) {
    const radios = document.querySelectorAll(`input[name="${nombre}"]`);
    let seleccionado;
    radios.forEach((radio) => {
      if (radio.checked) {
        seleccionado = radio.value;
      }
    });
    return seleccionado;
  }
  let resultadoDeCategoria = obtenerSeleccion("categoria");
  if (resultadoDeCategoria) {
    let final = productos.filter(
      (producto) => producto.categoria == resultadoDeCategoria
    );
    pintarProducto(final);
  }
});

