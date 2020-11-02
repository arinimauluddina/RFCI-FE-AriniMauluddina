const number = '4 9 7 5 8 9 3'
const inputNumber = number.split(' ')

function swap(numb) {
  var length = numb.length
  var count = 0

  for (var i = 0; i < length; i++) { 
    for (var j = 0; j < (length - i - 1); j++) {
      if ((numb[j]) > (numb[j+1])) {
        //swap processing 
        var temp = numb[j]
        numb[j] = numb[j+1]
        numb[j+1] = temp
        count++

        console.log(`${count}. [${numb[j]}, ${numb[j+1]}] -> ${numb.join(' ')}`)
      }
    }        
  }
  console.log('\nJumlah swap: ', count)
  return numb
}

swap(inputNumber)
