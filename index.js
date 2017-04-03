function iterativeLog(array) {
  array.forEach(function callback(element, index) {
      console.log(`${index}: ${element}`)
    }
  )
}

function iterate(callback) {
  var array = ['one', 'two', 'three', 'four'];
  array.forEach(callback);
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
