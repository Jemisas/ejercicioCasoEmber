export class ProductEntity{
  id: number;
  price: number;
  bundleId: number;

  constructor(id: number , price: number, bundleId: number) {
    this.id = id;
    this.price = price;
    this.bundleId = bundleId;
  }
}
