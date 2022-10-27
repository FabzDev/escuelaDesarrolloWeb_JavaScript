const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const productIndex = products.find((item) => item.id == "🍔");
const carrito = [];
const inventario = [];
for (food of products){
    if(food == productIndex){
        carrito.push(productIndex)
    } else {
        inventario.push(productIndex)}}
