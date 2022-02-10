const sum = (a, b) => {
    return (a + b) 
}

const testObject = {
'name':"joe",
'weight':'60kg'
}

const longStrings = (array) => {

  const resultArray = []
  array.map((item)=> {
    item.length >= 6 ?
    resultArray.push(item):
    undefined
  })
  return(resultArray)
} 



exports.sum = sum
exports.testObject = testObject
exports.longStrings = longStrings