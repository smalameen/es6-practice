const num1 = [2,33,45,222,344];
const num2 = [99,22,34,211,456];
const milKore = [...num1, ...num2];
console.log(milKore);


var num = ["100$","10000$" ,"50$"];

var max = num[0];
for (var i = 0; i<num.length; i++){
    var element = num[i];
    if(element.length > max.length){
        max = element;
        
    }
    
}
console.log(`The richest man has only`+" " +max);