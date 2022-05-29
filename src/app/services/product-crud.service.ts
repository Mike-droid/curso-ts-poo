import { apiUrl } from "../../api"
import { Product } from '../models/product.model';
import { UpdateProductDto } from '../dtos/product.dto';
import { ProductHttpService } from './product-http2.service';

export class ProductCRUDService {
  private url = `${apiUrl}/products`
  private http = new ProductHttpService(this.url)

  async update(id: Product['id'], dto: UpdateProductDto) {
    return this.http.update(id, dto)
  }
}
