import axios from "axios"
import { apiUrl } from "./api"

(async() => {

  async function getProducts() {
    const { data } = await axios.get(`${apiUrl}/products`)
    return data
  }

  const products = await getProducts()
  console.log(products)
})()
