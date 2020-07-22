console.log('DOM Basics')

/*

getting the elements 

1.getElementbyID
2.getElementsbyClassname
3.getElementsbyTagname
4.querySelector
5.querySelectorAll

*/


const title = document.getElementById('title')
console.log(title);
console.log(title.innerText)
console.log(title.innerHTML)


const data = document.getElementsByClassName('imp')
console.log(data)
// console.log(data[1])

const tag = document.getElementsByTagName('p')
console.log(tag)

//used to iterarte over html collection

for (let index = 0; index < tag.length; index++) {
    const element =tag[index];
    console.log(element)
}

//iterating over html collection using forEach in which
//converting the htmlcollection ino an array 

// 1st Method

/*
const a = [...data]
a.forEach(ele=>{
    console.log(ele)
})
*/

//2nd Method


/*
dataarr.forEach(ele=>{
    console.log(ele)
})
*/


//Id  = # 
//Class = .
console.log(document.querySelector('.imp'))
// console.log(document.querySelectorAll('.imp'))

// const data1 = document.querySelectorAll('.imp')
const data1 = document.querySelectorAll('p')
console.log(data1)
data1.forEach(el => {
    console.log(el)
});


// Changing Attributes

const attr = document.getElementById('attribute')
console.log(attr)

// attr.setAttribute('style','color:red')
// attr.setAttribute('style','background-color:blue')


// attr.classList.add('blue')
// attr.classList.add('bg-yellow')
// attr.classList.remove('blue')
// //toggle gonna add blue
// attr.classList.toggle('blue')
// //once again toggle gonna remove blue
// attr.classList.toggle('blue')

attr.style.color='red'
attr.style.backgroundColor='yellowgreen'




let fruits = ['apple','orrange','mango']

console.log(fruits)

const list = document.querySelector('#list')
console.log(list)

fruits.forEach(fruit=>{
    // list.innerText += `<li>${fruit}</li>`
    list.innerHTML += `<li>${fruit}</li>`
})

const dataarr = Array.from(data1);
console.log(dataarr)
dataarr.forEach(para=>{
    if(para.innerText.includes('2')){
        para.classList.add('highlight')
    }
})

function showalert(){
    alert('alert from the the button')
}

const button = document.getElementById('btn')
button.onclick = function(){
    alert('Hey i am alert from the button')
}


//get name from user and change the title

const name = prompt('Enter your name' , 'anonymous')
title.innerText += ` Welcome to the family ${name}`;

const NM = document.getElementById('nm');
NM.onclick = function changecolor(){
setTimeout(() => {
   document.body.style.
   backgroundColor = 'black'; 
   document.body.style.
   color = 'white';
   document.body.style.
   fontFamily = 'Helvetica';

}, 1);

}

const ctime = document.getElementById('time');

function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

// clock()


//To refresh time every second

setInterval(clock,1000);

