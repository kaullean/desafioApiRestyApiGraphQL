import { productosService } from '../controller/productos';

export const getProductsGraph = async (args) => {
    const id =args.id

    return await productosService.obtenerUnProducto(id)    
}

export const getAllProductsGraph = async (args) => {

    return  await productosService.leer() 

    
}
export const addProductGraph = async (args) => {
    const nuevoProducto={
        title:args.title,
        price:args.price,
        imgUrl:args.imgUrl
    }
    return  await productosService.agregar(nuevoProducto)   
}