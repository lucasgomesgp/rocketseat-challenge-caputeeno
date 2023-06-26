import { gql } from "graphql-request";

function GET_PRODUCTS(filter?: string) {
  return gql`
    query GetProducts {
      allProducts ${filter ? `${filter}` : ""}{
        id
        name
        description
        image_url
        category
        price_in_cents
      }
    }
  `;
}

function GET_PRODUCT(id: string) {
  return gql`
{
  allProducts(filter: {id: "${id}"}){
    id,
    name,
    description,
    image_url,
    category,
    price_in_cents,
  }
}
`;
}

export { GET_PRODUCTS, GET_PRODUCT };
