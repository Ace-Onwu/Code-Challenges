let newArray = []
function powersOfTwo(n){
  for (let i = 0;i<=n;i++){
  newArray = newArray.concat(Math.pow(2,i))
  
  }
  console.log(newArray)
}

powersOfTwo(4)