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

  // sychrous  function will be executed first then after asy..  go  after
  console.log("1")
  setTimeout(()=>{
   console.log('2')
 })
  console.log('3');