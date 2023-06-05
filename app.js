class ProductManager {
  constructor() {
    this.products = []
    //Defino el constructor "products"
  }

  // Método para retornar nuestro arreglo de productos.
  getProducts = () => {
    return this.products
  }

  addProduct = (title, description, price, thumbnail, code, stock) => {
    const product = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
      products: [], //array vacío
    }

    if (this.products.length === 0) {
      product.id = 1
    } else {
      product.id = this.products[this.products.length - 1].id + 1
    }

    //pusheamos el producto
    this.products.push(product)
  }

  getProductById = idProduct => {
    const productIndex = this.products.findIndex(
      product => product.id === idProduct
    )

    if (productIndex === -1) {
      console.log('Not found')
      return
    }

    const productAdd = this.products[productIndex].products.includes(idProduct)

    if (productAdd) {
      console.log('El producto se agregó correctamente')
      return
    }
    this.products[productIndex].products.push(idProduct)
  }
}

const manejadorProductos = new ProductManager()
manejadorProductos.addProduct('Copa', 'fragil', 2000, 'sin imágen', 'bar123', 5)
manejadorProductos.addProduct(
  'Vaso',
  'rustico',
  100,
  'sin imágen',
  'bar124',
  20
)
manejadorProductos.addProduct(
  'plato',
  'postre',
  1200,
  'sin imágen',
  'bar125',
  15
)

manejadorProductos.getProductById(1)
manejadorProductos.getProductById(2)
manejadorProductos.getProductById(3)

console.log(manejadorProductos.getProducts())
