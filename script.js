// // Lecture1
// // const para= document.querySelector("p")
// // para.innerText = "This is a New paragraph"
// // para.style.colorv= "green"
// // console.log(para)


// // Lecture2and3
// // console.log(document)
// // const para = document.getElementById("para")
// // para.innerText = "hiii"

// const para = document.getElementsByClassName("para")
// console.log(para)
// para[0].innerText = "This is a new paragrpah"
// para[1].computedStyleMap.color = "green"
// console.log(para)

// let arr=[23,144,345,34,34,24,3,34]

// //const newA=arr.map((ele)=>ele) //it returns new array


function message()
{
    alert("You have clicked the button")
}

const btn = document.querySelector("button")
btn.classList.add("btn") //adding css file

// btn.classList.remove("btn")
// btn.addEventListener('mouseover',function(){alert("You have clicked the button")})
// btn.addEventListener('click',function(){close("You have clicked the button")})

btn.addEventListener('click', message) //to add
btn.removeEventListener('click', message) //to remove


//20 jan 2026 - lecture7
const container=document.querySelector('.container')
const outer=document.querySelector('.outer')
const button=document.querySelector('button')

container.addEventListener('click',()=>{console.log("Div")},true)
outer.addEventListener('click',()=>{console.log("Outer Div")},true)
button.addEventListener('click',()=>{console.log("Button")},true)