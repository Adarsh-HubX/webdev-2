// alert("yaahooo!!")

// // // Lecture1
// // // const para= document.querySelector("p")
// // // para.innerText = "This is a New paragraph"
// // // para.style.colorv= "green"
// // // console.log(para)


// // // Lecture2and3
// // // console.log(document)
// // // const para = document.getElementById("para")
// // // para.innerText = "hiii"

// // const para = document.getElementsByClassName("para")
// // console.log(para)
// // para[0].innerText = "This is a new paragrpah"
// // para[1].computedStyleMap.color = "green"
// // console.log(para)

// // let arr=[23,144,345,34,34,24,3,34]

// // //const newA=arr.map((ele)=>ele) //it returns new array


// function message()
// {
//     alert("You have clicked the button")
// }

// const btn = document.querySelector("button")
// btn.classList.add("btn") //adding css file

// // btn.classList.remove("btn")
// // btn.addEventListener('mouseover',function(){alert("You have clicked the button")})
// // btn.addEventListener('click',function(){close("You have clicked the button")})

// btn.addEventListener('click', message) //to add
// btn.removeEventListener('click', message) //to remove


//20 jan 2026 - lecture7
// const container=document.querySelector('.container')
// const outer=document.querySelector('.outer')
// const button=document.querySelector('button')

// container.addEventListener('click',()=>{console.log("Div")},true)
// outer.addEventListener('click',()=>{console.log("Outer Div")},true)
// button.addEventListener('click',()=>{console.log("Button")},true)



// lecture-8

// console.log(b)
// console.log(a)

// let a=23456
// var b=3456

// console.log(a)
// console.log(b)
// function print(){
//     console.log("Inside fn")
// }

// print()


// lecture-9


// console.log("first line")
// setTimeout(() => {
//     console.log("maggie is ready after 2sec")
// }, 2000);
// console.log("Second line")


//lecture-10
// const name=document.querySelector("#name");
// const btn=document.querySelector(".btn");
// // const remove=document.querySelector(".remove");
// const list=document.querySelector(".list");

// btn.addEventListener("click",()=>{
//     if(name.value===""){
//         alert("Enter the name!!")
//         return;
//     }
//     const li=document.createElement("li");
//     const dlt=document.createElement("button");
//     dlt.innerText="delete";
//     li.innerText=name.value;
//     dlt.addEventListener("click",()=>{
//         list.removeChild(li)
//     })
//     list.appendChild(dlt)
//     li.appendChild(li)
//     name.value="" 
//     })
    

//lecture 11
// function print(num){
//     setTimeout(()=>{
//         console.log("Inside print")
//         num()
//     },2000)
// }

// function sample(){ //callback fn
//     console.log("Inside callback")
// }

// print(sample)

// console.log("starting homework...");
// setTimeout(() => {
//     console.log("homework done!");
//     console.log("starting dinner");

//     setTimeout(() => {
//         console.log("dinner done!");
//         console.log("getting ready to go out");

//         setTimeout(() => {
//             console.log("going to the playground!");
            
//         }, 1000);
//     }, 1500);
    
// }, 2000);

// function finishHomework(callback) {
//     console.log("starting homework..");
//     setTimeout(() => {
//         console.log("homework done!");
//         callback();
//     }, timeout);
// }

// async function getData()(
//     try(
//         const response=await fetch=("https://dummy.json.com")
//     if(response.ok==false)


//     )
// )

// console.log(response)
// const data=await response.json()
// console.log(data)
// data.products.forEach(product)=>{
//     console.log(product.title)
// })
// 2
// // get request and

// const response=await fetch=""
// headers = ( 'content type'; 'application.json'),
// body: JSON.stringify(
//     "title": "Macbook m4"
//     "description": :large ipsum color sist anwet 
//     "catoegry" "electornics",
//     "price": 353e,
//     "desoucntPercentage", 353
//     "rating: 353
//     "staco: 353e
    
//     {sd"
// )


// LECTURE 18
//local storage
// localStorage.setItem("name", "Adarsh")
// localStorage.setItem("age", 18)

// const uname=localStorage.getItem("name")
// console.log(uname)
// console.log(localStorage.getItem("age"))

// localStorage.removeItem("name")
// localStorage.clear()

//session storage
// sessionStorage.setItem("name", "Adarsh")
// sessionStorage.setItem("age", 18)

// const uname=sessionStorage.getItem("name")
// console.log(uname)
// console.log(sessionStorage.getItem("age"))

// localStorage.removeItem("name")



// document.cookie="name=Adarsh; expires=Thu, 19 Feb 2026 09:00:00 IST;"
// document.cookie="age=18; expires=Thu, 19 Feb 2026 09:00:00 IST;"

// console.log(document.cookie)

// generators
// function* generate(){
//     for (let index = 1; index <=4; index ++) {
//         yield index
//     }
// }

// const gen=generate()
// console.log(gen)
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())


// function add(a,b,c){
//     return a+b+c
// }

function add(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

//method1
const first=add(1)
console.log(first)
const second=first(2)
console.log(second)
const third=second(3)
console.log(third)

//method2
console.log(add(1)(2)(3));


