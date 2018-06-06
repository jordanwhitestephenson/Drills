var list = ["Jordan", "John", "Jordan", "Amy", "John", "Mike"]
var found = false

function duplicateArray(list) {
  var uniqueArray = []
  for (i=0; i<list.length; i++) {
    if(uniqueArray.indexOf(list[i]) === -1) {
      uniqueArray.push(list[i])
    }
  }
  return uniqueArray
}

duplicateArray(list)
