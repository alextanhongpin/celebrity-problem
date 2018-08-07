
let data = [
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 1]
]

let stack = Array(data.length).fill(0).map((_, i) => i)

function knows (data, a, b) {
  return data[a][b]
}

while (stack.length > 1) {
  let a = stack.pop()
  let b = stack.pop()

  if (knows(data, a, b)) {
    stack.push(b)
  } else {
    stack.push(a)
  }
}
console.log(`${stack} is the celebrity`)
