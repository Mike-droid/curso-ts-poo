import { ProductMemoryService } from "./services/product-memory.service";

const productService = new ProductMemoryService();

productService.create({
  title: "Product 1",
  price: 100,
  description: "Product 1 description",
  categoryId: 12,
  images: []
})

const products = productService.all
const productId = products[0].id

productService.update(productId, {
  title: 'cambiar nombre'
})

const rta = productService.findOne(productId)
console.log(rta)
