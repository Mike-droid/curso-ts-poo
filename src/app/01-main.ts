import axios from "axios"
import { apiUrl } from "../api"
import { Product } from "./models/product.model"

(async() => {
  async function getProducts() {
    const { data } = await axios.get<Product[]>(`${apiUrl}/products`)
    return data
  }

  const products = await getProducts()
  console.log(products.map(item => `${item.id} - ${item.title}`))
})()
