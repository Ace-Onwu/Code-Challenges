function sortMyString(S) {
    let string1 = ''
    let string2 = ''
      for (let i=0; i<S.length; i++){
        (i%2 === 0)? string1 = string1 + S[i] : string2 = string2 + S[i]
      }
      console.log(string1 + ' '+ string2)
  }

  sortMyString('CodeWars')