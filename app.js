class ProductManager {
  constructor() {
    this.products = []
  }

  getProducts() {
    return this.products
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    // Verificar si el código ya está en uso
    const existingProduct = this.products.find(product => product.code === code)
    if (existingProduct) {
      throw new Error('El código del producto ya está en uso')
    }

    // Generar un nuevo ID para el producto
    const id = this.generateId()

    // Crear el objeto de producto
    const product = {
      id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    }

    // Agregar el producto al arreglo de productos
    this.products.push(product)

    // Devolver el producto agregado
    return product
  }

  getProductById(id) {
    const product = this.products.find(product => product.id === id)
    if (!product) {
      throw new Error('No se encontró el producto')
    }
    return product
  }

  generateId() {
    let id
    do {
      // Generar un ID único utilizando una cadena aleatoria
      id = Math.random().toString(36).substr(2, 9)
    } while (this.products.some(product => product.id === id))

    return id
  }
}

// Ejemplo de uso
const productManager = new ProductManager()
console.log(productManager.getProducts()) // []

const newProduct = productManager.addProduct(
  'producto prueba',
  'Este es un producto prueba',
  200,
  'Sin imagen',
  'abc123',
  25
)
console.log(newProduct) // El producto agregado

console.log(productManager.getProducts()) // El producto agregado se encuentra en la lista de productos

// Intentar agregar un producto con el mismo código debe arrojar un error
try {
  productManager.addProduct(
    'producto repetido',
    'Este es otro producto',
    300,
    'Imagen',
    'abc123',
    10
  )
} catch (error) {
  console.error(error.message) // "El código del producto ya está en uso"
}

// Obtener un producto por ID
const productById = productManager.getProductById(newProduct.id)
console.log(productById) // El producto agregado

// Intentar obtener un producto con un ID no válido debe arrojar un error
try {
  const nonExistentProduct = productManager.getProductById('invalidId')
} catch (error) {
  console.error(error.message) // "No se encontró el producto"
}
