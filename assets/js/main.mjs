import { Cart } from "./modules/cart.mjs";
import { Product } from "./modules/product.mjs";
import { validacionCharpromopt, validacionPrompt } from "./modules/utils.mjs";
import { imagenesclick } from "./modules/seleccioncard.mjs";

const main = ()=>{
 
    const productosDisponibles = [
        new Product('Leche', 1000,'./assets/img/leche.jpg'),
        new Product('Pan de molde', 2000,'./assets/img/pandempolde.jpg'),
        new Product('Queso', 1200,'./assets/img/queso.jpg'),
        new Product('Mermelada', 890,'./assets/img/mermelada.jpg'),
        new Product('Azúcar', 1300,'./assets/img/azucar.jpg'),
    ];

    const miCarrito = new Cart([]);

    let exit = false;
    imagenesclick()

    while(!exit){
        let infoProductosDisponibles = "Productos disponbles:\n";

        for(let i = 0; i <productosDisponibles.length ; i++){
            infoProductosDisponibles += `${i+1}.- ${productosDisponibles[i].name} $${productosDisponibles[i].price}\n`
        }
        alert(infoProductosDisponibles);

        const productIndice = validacionPrompt(1, 5,"Ingresa el número del producto que deseas agregar al carrito: ", "Necesita agregar un producto valido!")-1;

        const cantidad = validacionPrompt(1, 999, "Ingresa la cantidad de unidades: ", "Necesita agregar una cantidad valida!");
        
        for(let i = 0; i < cantidad; i++){
            miCarrito.addProduct(productosDisponibles[productIndice]);    
        }
        const totalporproducto = cantidad*productosDisponibles[productIndice].price

        let carrito = document.querySelector(".carrito")     
        
        

        carrito.innerHTML += `<tr>
                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                    <div class="flex items-center">
                                        <img class="object-cover w-14 h-14 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="${productosDisponibles[productIndice].img}" alt="">
                                    </div>
                                </td>                    
                                <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                    <div>
                                        <h2 class="font-medium text-gray-800 dark:text-white ">${cantidad} ${productosDisponibles[productIndice].name}(s)</h2>
                                    </div>
                                </td>
                                <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                    <div>
                                        <h2 class="font-medium text-gray-800 dark:text-white ">${totalporproducto}</h2>
                                    </div>
                                </td>
                            </tr>
                            `
                            
        alert(`${cantidad} ${productosDisponibles[productIndice].name}(s) agregado(s) al carrito.`)

        let option = validacionCharpromopt(['s','n','S', 'N'],"Deseas seguir agregando productos? (s/n)", "Necesitas agregar un caracter valido ya sea s ó n!");

        if(option === 'n' || option === 'N'){
            alert(`Total de la compra: $${miCarrito.calcTotal()}`);
                    let total= document.getElementById("total")
                    total.innerHTML=`<p>Total de la compra: $${miCarrito.calcTotal()}</p>`
            exit = true;
        }
    }
}

main();