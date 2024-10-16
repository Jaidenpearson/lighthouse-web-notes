let stringExample = "Hello World"

timer = 1000
for(let letter of stringExample) {
  let lex = letter
  setTimeout(() => process.stdout.write(lex), timer)
  timer = timer + 1000
}

