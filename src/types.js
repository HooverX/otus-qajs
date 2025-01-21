// const a = 'aaaa'
// // eslint-disable-next-line
// const b = "bbbbb"
// const c = `ccc`
//
// // typeof
// console.log('a', typeof a)
// console.log('b', typeof b)
// console.log('c', typeof c)

// const f = false
// const t = true
//
// const str1 = 'b'
// const str2 = 'b'
//
// const isEqualStrictString = str1 === str2
// const isEqualString = str1 == str2
//
// console.log('f', typeof f, f)
// console.log('f', typeof t, t)
// console.log('f', typeof isEqualStrictString, isEqualStrictString)
// console.log('f', typeof isEqualString, isEqualStrictString)

// const n1 = 0
// const nNaN = NaN
// const nInfinity = Infinity
//
// const name = 'Damir'
// const age = 31
// const sum = -age / 0
// console.log('sum', sum)

const course = 'qajs'

const pathC = `/courses/` + course + '/'
console.log(pathC)

const getCourse = prefix => {
  return `${prefix}-qajs`
}
const path = `/courses/${getCourse('otus')}/`
console.log(path)

// eslint-disable-next-line
const unUsed = 1
