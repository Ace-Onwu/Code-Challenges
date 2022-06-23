function getLengthOfMissingArray(arrayOfArrays) {
    //sort arrays in order of length
    let lengthArr = arrayOfArrays.map(x=> x.length)
    lengthArr.sort()
    for(i=1; i<arrayOfArrays.length; i++){
      if(lengthArr[0]===i){
        lengthArr.shift()
      }
      else
        return i
      
    }
  }
  
  getLengthOfMissingArray([[1,3,2,6,5],[3,4,4],[5,6,7,5,6,6],[1,7],[7]])





