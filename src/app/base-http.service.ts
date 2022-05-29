import axios from "axios";
import { apiUrl } from "../api";
import { Category } from "./models/category.model";
import { Product } from "./models/product.model";
import { UpdateProductDto } from './dtos/product.dto';

export class BaseHttpService<TypeClass> {
  constructor(
    protected url: string,
  ) { }

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url)
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes)
    return data
  }
}

(async()=> {
  const url1 = `${apiUrl}/products`

  const productService = new BaseHttpService<Product>(url1)
  const rta = await productService.getAll()
  console.log('products: ', rta.length)

  const url2 = `${apiUrl}/categories`
  const categoryService = new BaseHttpService<Category>(url2)
  const rta2 = await categoryService.getAll()
  console.log('categories: ', rta2.length)

  productService.update<Product['id'], UpdateProductDto>(1, {
    title: 'nuevo titulo',
    price: 3000
  })
})()
