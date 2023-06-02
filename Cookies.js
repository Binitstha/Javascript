// To print cookie as string in console

expire("Name1", "Binit", 1)
expire("Name2", "shrestha", 1)

console.log(document.cookie)
// decode("Name1")
console.log(decode("Name1"))
console.log(decode("Name2"))
function expire(name, value, expiredate) {
  const date = new Date()
  date.setTime(date.getTime() + (expiredate * 24 * 60 * 60 * 1000))
  const expires = "expire = " + date.toUTCString()
  document.cookie = `${name}=${value};${expires};path=/`
}

function decode(name) {
  const cDecode = decodeURIComponent(document.cookie)
  const cArray = cDecode.split("; ")
  // console.log(cArray)
  let result = null
  cArray.forEach(element => {
    if (element.indexOf(name) == 0) {
      result = element.substring(name.length + 1)
    }
  })
  return result
}
