var phone = [
    {name: 'Samsung', camera: 12, Storage: '32gb', Price: 30000, color:  'silver'},
    {name: 'Walton', camera: 10, Storage: '32gb', Price: 10000, color:  'Black'},
    {name: 'iPhone', camera: 150, Storage: '64gb', Price: 60000, color:  'silver'},
    {name: 'Mi', camera: 50, Storage: '64gb', Price: 20000, color:  'bead'},
];
function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        var phone  = phones[i];
        if(phone.Price < cheapest.Price){
            cheapest = phone;
        }
    }
    return cheapest;
}

var mySelection = cheapestPhone(phone);
console.log(mySelection);