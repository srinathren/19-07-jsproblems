let n = 987654
n = Number.parseInt(n)

let val = 0

let p = 0
while(n>0){
  p = Number.parseInt(p*10+(n%10))
  n = Number.parseInt(n/10)
}

while(p > 0){
  let temp = p%10
  temp = Number.parseInt(temp)
  console.log(temp)
  p=Number.parseInt(p/10)
  if(temp%2 == 0){
    val = val*10+temp 
  }
}
console.log(val)