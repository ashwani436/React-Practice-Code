const a= ()=>{
    const first = 1
    const b = ()=>{
        const second = 2
        console.log(first)
        const first = 3
        c()
    }
    b()
}
a()
function c(){
    console.log(second)
}

const arr = [1,2,3]
const [first , second, third] = 
console.log(first, second, third)