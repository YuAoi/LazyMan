const deepCopy = function (obj) {
  if (typeof obj !== 'object') {
    return obj
  }

  const newObj = new obj.constructor

  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      newObj[k] = typeof obj[k] === 'object' ? deepCopy(obj[k]) : obj[k]
    }
  }

  return newObj
}

let obj = [{
  a: 2
}, function() {
  return 3
}]

let c_obj = deepCopy(obj)

console.log(obj[0] === c_obj[0], obj[1] === c_obj[1], obj[1]() === obj[1]())