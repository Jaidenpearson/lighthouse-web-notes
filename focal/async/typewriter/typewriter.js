const string = "hello there from lighthouse labs";

const typewriter = (sentence) => {
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => process.stdout.write(sentence[i]), i * 50);
}
 setTimeout(() => process.stdout.write(`\n`), sentence.length * 51)
}

typewriter(string)