import axios from "axios"

(async() => {
  /* function delay (time: number) {
    const promise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(true)
      }, time)
    })
    return promise
  } */

  async function getProducts() {
    const { data } = await axios.get('https://api.escuelajs.co/api/v1/products')
    return data
  }

  const products = await getProducts()
  console.log(products)
})()
