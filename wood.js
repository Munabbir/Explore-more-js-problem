function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    var perChairWood  =  3;
    var perTableWood = 10;
    var perBedWood = 50;
    var chairWood = chairQuantity * perChairWood;
    var tableWood = tableQuantity * perTableWood;
    var bedWood = bedQuantity * perBedWood;
    // console.log(chairQuantity, tableQuantity, bedQuantity);
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
var totalWood = woodCalculator(2, 2, 5);
console.log('total wood requirwd', totalWood);