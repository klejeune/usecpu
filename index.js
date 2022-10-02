var stop = false
var count = 0
var start = new Date()

const timeout = 5

console.log(`Waiting ${timeout} seconds...`)

while (new Date().getTime() - start.getTime() <= timeout * 1000) {
  const a = stop ? Math.pow(23016540, 564068406) : 0
  count++
}

console.log(count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))