import { ProductEntity } from './product.entity';

export class BundleEntity {
  id: number;
  title: string;
  description: string;
  photoUrl: string;
  price: number;
  rating: number;
  products: ProductEntity[];
  youSave = 0;


  constructor(id: number, title: string, description: string, photoUrl: string, price: number, rating: number, youSave: number) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.photoUrl = photoUrl;
    this.price = price;
    this.rating = rating;
    this.products = [];
    this.youSave = youSave;
  }
}
