let s=document.getElementById("save-el")
let a=document.getElementById("count-el")
console.log(a)
console.log(s)
let count = 0



function increment(){
    count++
    a.innerText = count
}
function save(){
    let countStr = count + " - " 
    s.textContent += countStr
    a.textContent = 0
    count=0
    console.log(count)
}
