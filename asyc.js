//asychrounous javascript 

//sychronous programming 
//  wy do we  need asy programming 
let pizza;
function orderPiza(){
    console.log('order pizza')
    setTimeout(()=>{
        pizza= 'Pizza';
        console.log('pizza is ready');
    },2000);
    console.log('pizaa was order') 
}
orderPiza();
console.log('Call Qoli');
console.log(` Eat ${pizza}`);

 
//
 function orderPizza(callback){
    setTimeout(()=>{
       const pizza ='Pizza';
       callback(pizza);
    }, 2000)
 }

 function pizzaReady(pizza){
    console.log(`Eat the ${pizza}`)
 }
 orderPiza(pizzaReady)