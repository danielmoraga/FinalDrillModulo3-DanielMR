export class Cart {
    
    constructor( listadeproductos ){
        this.listadeproductos = listadeproductos;
    }

    addProduct( producto ){
        this.listadeproductos.push(producto);
    }

    calcTotal(){

        let PrecioTotal = 0;

        this.listadeproductos.forEach(p => {
            PrecioTotal += p.price;
        });
        
        return PrecioTotal;
    }


}
