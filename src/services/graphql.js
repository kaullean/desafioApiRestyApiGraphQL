import { buildSchema } from 'graphql';

import { getProductsGraph,getAllProductsGraph,addProductGraph } from '../controller/productosGraph.js';
// GraphQL schema
//https://graphql.org/graphql-js/basic-types/



export const graphqlSchema = buildSchema(`
    type Query {
        getProductsGraph(id:Int): Product,
        getAllProductsGraph: [Product]
    },
    type Mutation {
        addProductGraph(title:String!,imgUrl:String!,price:Int!): Product
    },
    type Product {
        id: Int
        title: String
        imgUrl: String
        price: Int

    }    
`);
// Root resolver
export const graphqlRoot = {
    getProductsGraph,
    getAllProductsGraph,
    addProductGraph
};