process.stdout.write('hello from spinner1.js... \rheyyy\n');

const animationSymbols = ['|', '/', '-', '\\', '|', '/', '-', '\\' ]

const animation = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r${arr[i]}   `)
    }, i * 100)
  }
  setTimeout(() => {
    process.stdout.write('\r')
  }, arr.length * 101)
}


animation(animationSymbols)