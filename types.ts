export interface Categories {
  categories: Category[];
}

export interface Category {
  id: string;
  title: string;
  desc: null | string;
  url: string;
}
export interface MainPage {
  __typename: string;
  _id: string;
  title: string;
  type: string;
  desc: string;
  url: string;
  parentUrl: string;
}

export interface Page {
  data: Data;
  loading: boolean;
  networkStatus: number;
}

export interface Data {
  pages: Pages;
}

export interface Pages {
  __typename: string;
  edges: Edge[];
}

export interface Edge {
  __typename: string;
  node: Node;
}

export interface Node {
  __typename: string;
  _id: string;
  title: string;
  type: string;
  desc: string;
  url: string;
}

export interface SubCategories {
  id: string;
  title: string;
  desc: string;
  url: string;
}

//products

// export interface ProductData {
//   data: DataByProduct;
//   loading: boolean;
//   networkStatus: number;
// }

// export interface DataByProduct {
//   products: Product;
// }

// export interface Product {
//   __typename: ProductTypename;
//   _id: string;
//   productDetails?: ProductDetail[];
//   url: string;
//   title: string;
//   desc: null;
// }

// export enum ProductTypename {
//   Product = "Product",
// }

// export interface ProductDetail {
//   make: string;
//   model: string;
//   Physical: any;
//   Technical: any;
//   Compliance: any;
// }

/// product list items

export interface ProductListItem {
    products: Product[];
}

export interface Product {
    __typename: ProductTypename;
    node:       Node;
}

export enum ProductTypename {
    ProductEdge = "ProductEdge",
}

export interface Node {
    __typename: string|NodeTypename;
    _id:        string;
    desc: null | string;
    title:      string;
    url:        string;
}

export enum NodeTypename {
    Product = "Product",
}


//
export interface ProductList {
    products: Product[];
}

export interface Product {
    id:         string;
    title:      string;
    desc:       null;
    productUrl: string;
}
