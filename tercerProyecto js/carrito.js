let carrito = JSON.parse(localStorage.getItem("carrito")) || [] ;
// conosole.log(carrito)


const pintarProducto = (ArraysDeProducto) => {
  let containerCarrito = document.getElementById("containerProductos");
  containerCarrito.innerHTML = "";
  ArraysDeProducto.forEach((producto) => {
    let productoCarrito = document.createElement("div");
    productoCarrito.className = "itemNuevos";
    productoCarrito.innerHTML = `<img src=${producto.image}/>
      <h2>${producto.nombre} </h2>
      <p>${producto.precio}</p>
      <p>${producto.quantity}</p>
      <button onclick="eliminarProducto(${producto.id})">
      Eliminar</button>`;
    containerCarrito.appendChild(productoCarrito);
  });
};
pintarProducto(carrito);

const eliminarProducto = (id) =>{
    carrito = carrito.filter((producto) => producto.id !== id)
    localStorage.setItem("carrito", JSON.stringify(carrito))
    pintarProducto(carrito)
}

