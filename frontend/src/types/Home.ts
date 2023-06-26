export type ResponseData = {
  allProducts: [
    {
      id: string;
      name: string;
      description: string;
      image_url: string;
      category: string;
      price_in_cents: number;
    }
  ];
};

export type Product = {
  id: string;
  name: string;
  description: string;
  image_url: string;
  category: string;
  price_in_cents: number;
};
