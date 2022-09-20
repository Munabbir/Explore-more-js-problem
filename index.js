var country = 'Banglades';
var age = 52;
var isIndependent = true;
var student = {id: 121, class: 11, name: 'shakib'};
var friend = [13, 14, 11, 17, 21, 35, 55, 28, 27]
function add(number1, number2){
    return number1 + number2;
}
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(friend));
console.log(typeof add);

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

console.log(friend.includes(28));

var newFriendAge = [12, 13, 11, 13];
var allfriends = newFriendAge.concat(friend);
console.log(allfriends);