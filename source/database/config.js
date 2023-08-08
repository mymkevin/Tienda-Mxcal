// Importar la biblioteca Axios para realizar peticiones HTTP
const axios = require('axios');

// URL de la API de MongoDB
const apiUrl = 'http://localhost:3000/products';

// Obtener la referencia al elemento <div> donde se mostrarán los productos
const productsDiv = document.getElementById('products');

// Función para obtener los productos de la base de datos y mostrarlos en la página
async function getProducts() {
  try {
    const response = await axios.get(apiUrl);
    const products = response.data;

    // Recorrer los productos y generar el HTML correspondiente
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>Precio: $${product.price}</p>
        <p>Sabor: ${product.flavor}</p>
      `;

      productsDiv.appendChild(productDiv);
    });
  } catch (error) {
    console.error(error);
  }
}

// Llamar a la función getProducts al cargar la página
window.addEventListener('load', getProducts);
