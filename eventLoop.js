function getCoffe(){
    console.log("getting coffee..")
      doAsycStuff(()=>{
        console.log("coffee is here...")

     });
   
}
function sinfASong(){
    console.log('starting singing... ')

}
 function doAsycStuff(callback) {
    

     setTimeout(()=>{
        callback()
     },2000)

}
 

getCoffe()
sinfASong()