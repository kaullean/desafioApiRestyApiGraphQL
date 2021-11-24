Rutas de ApiRest en src/controller/productos
Rutas de Graphql en src/controller/productosGraph

Copiar y pegar esto en la interface de Graphiql para ejecutar las consultas

mutation add{ 
  addProductGraph(title:"toalla",imgUrl:"urlDeToalla",price:20){
  title
	}   
}
query getAll{
  getAllProductsGraph{
    title,
    price,
    imgUrl
  } 
}
query getOne{
  getProductsGraph(id:4){
    title,
    price,
    imgUrl
  }
}