const arrayPositions = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"]
let delay = 100;

for(let position of arrayPositions) {
  setTimeout(() => {
    process.stdout.write("\r" + position);
  }, delay);
  delay += 200
}
setTimeout(() => {
  console.log(" ")},
  delay)
