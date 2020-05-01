export interface Product {
  id: number;
  title: string;
  price: string;
  image: Image[];
  description: string;
  size: Array<string>;
  color: Array<string>;
}

export interface Image {
  path: string;
}
