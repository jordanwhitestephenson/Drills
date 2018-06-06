function sortArray(array) {

  var leftIndex = 0
  var rightIndex = array.length - 1
  while(leftIndex < rightIndex){
    var temp = array[leftIndex]
    array[leftIndex] = array[rightIndex]
    array[rightIndex] = temp
    leftIndex++;
    rightIndex--;
  }
  return array

}


sortArray([1, 6, 8, 9])
