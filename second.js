let arr= [1,2,2,2,2,4,4,5,5,5,5,6,7,8]
const map = new Map();

for (const i of arr) {
  map.set(i, (map.get(i) || 0) + 1);
}

let res = []
map.forEach((val,key)=>{
    if(val<3){
        res.push(key)
    }
})
console.log(res);