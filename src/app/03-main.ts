import { ProductHttpService } from "./services/product-http.service";

(async()=>{
  const productService = new ProductHttpService();

  try {
    console.log('--'.repeat(20));
    console.log('Get all products');
    const products = await productService.getAll();
    console.log(products.length);

    const productId = products[0].id;
    console.log('--'.repeat(20));
    console.log('Update');
    await productService.update(productId, {
      price: 1000,
      title: 'New Title',
      description: 'New Description'
    })

    console.log('--'.repeat(20));
    console.log('Find');
    const product = await productService.findOne(productId);
    console.log(product);

  } catch (error) {
    console.error(`😓 Ocurrió un error: ${error}`);
  }
})()
