// let date = new Date()

// console.log(date)

let clock = ()=>{
    let date = new Date()
    let month_num = date.getMonth()
    let day = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let second = date.getSeconds()
    let year = date.getFullYear()


    if(hours<=9)hours="0"+hours
    if(minutes<=9)minutes="0"+minutes
    if(second<=9)second="0"+second
    if(day<=9)day="0"+day
    if(month_num<=9)month_num="="+month_num

 let month =["January","February","March","April","May","June","July","August","September","October","November","December "]
//  console.log(month[month_num])
// let date_time = "Today : " + day+ "-" +month[month_num]+"-"+"саат"+hours+":"+minutes+":"+second
let date_time = +hours+":"+minutes+":"+second

let element = document.getElementById('time').innerHTML =date_time
// console.log(element)



setTimeout(() =>{
    clock()
},1000)

console.log(date_data)



// console.log(date_time)
// let element = document.getElementById('time').innerHTML =date_time
// // console.log(element)
// setTimeout(() =>{
//     clock()
// },1000)
 
// 1000- 1second bar
}
clock()
