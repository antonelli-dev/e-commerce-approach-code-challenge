export class Property {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  description: string;

  constructor(data: Property) {
    this.id = data.id;
    this.title = data.title;
    this.price = data.price;
    this.imageUrl = data.imageUrl;
    this.description = data.description;
  }
}
