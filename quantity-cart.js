var shoppingCard = [
    {name: 'sho', price: 1200, quantity: 2 },
    {name: 'shirt', price: 2200, quantity: 5 },
    {name: 'pant', price: 3700, quantity: 4 },
    {name: 'belt', price: 600, quantity: 3 },
];
function totalCost(products){
    let sum = 0;
    for(let i = 0; i< products.length; i++){
        var productTotal = products[i];
        sum = sum + productTotal;
        // console.log(product);
    }
    return sum;
}
var expense = totalCost(shoppingCard);
console.log(expense);


