const obj1 = {a: 1, b: 2}
obj1.c = 3

const o = Object.assign(obj1, { d: 4 })
console.log(o.d)