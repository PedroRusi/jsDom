// let btn = document.getElementById('button') 
// btn.onclick = function(){ 
//     alert("Hello") 
// } 
 
 
// let btn = document.getElementById('button') 
// btn.onmouseenter = function(){ 
//     alert('Hello') 
// } 
 
 
// let btn = document.getElementById('button') 
// btn.ondblclick = function() { 
//     alert("Hello") 
// } 
 
 
// let block = document.getElementById('block') 
// block.onmouseout = function() { 
//     alert("Hello") 
// } 
 
 
// let btn = document.getElementById('button') 
// let input = document.getElementById('input') 
 
// btn.onclick = function(){ 
//     alert(input.value) 
// } 
 
 
// let btn = document.getElementById('button') 
// let input = document.getElementById('input') 
 
// btn.onclick = function(){ 
//     input.value = "я поменял текст" 
// }


// let btn = document.getElementById('button');
// let block = document.getElementById('block');
// let img = document.querySelector('img')

// btn.onclick = function() {
//     img.src = 'assets/img/ded.jpg'
// }


// let input = document.getElementById('input');
// function all(elem) {
//     elem.onclick = function (){
//         while (true) {
//             alert(elem.value);  
//         }

//     }
// }
// all(input);


// let input = document.getElementById('input');
// function TextValue(elem) {
//     elem.onclick = function() {
//         elem.value = 'Ой я поменял текст'
//     }
// } 
// TextValue(input)


// let input = document.getElementById('input');
// input.on
// function TextValue(elem) {
//     elem.onblur = function() {
//         elem.value = 'Ой я снова поменял текст'
//     }
//     elem.onfocus = function() {
//         elem.value = 'Ой я поменял текст'
//     }
// }
// TextValue(input)


// let submit = document.getElementById('submit');
// function SubmitText(elem) {
//     elem.onclick = function() {
//         elem.value = 'Ку-Ку';
//     }
// }
// SubmitText(submit);


// let submit = document.getElementById('submit');
// function SubmitDisabled(elem) {
//     elem.onclick = function() {
//         elem.disabled = true;
//         elem.value = 'Ой на меня больше не нажать'
//     }
// }
// SubmitDisabled(submit);


// let img = document.querySelector('img');
// function ImgHover(elem) {
//     img.onmouseenter = function() {
//         elem.src = 'assets/img/ded.jpg'
//     }
//     img.onmouseout = function() {
//         elem.src = 'assets/img/._..png'
//     }
// }
// ImgHover(img);


// let btn = document.getElementById('button');
// let input = document.getElementById('input');

// btn.onclick = function() {
//     input.style.color = 'red'
// }



// let btnBefore = document.getElementById('button');
// let btnAfter = document.getElementById('button__after');
// let input = document.getElementById('input');

// btnBefore.onclick = function() {
//     input.style.display = 'none';
// }
// btnAfter.onclick = function() {
//     input.style.display = 'block'
// }


// let btn = document.getElementById('button');
// let input = document.getElementById('input');

// btn.onclick = function() {
//     input.value = 'Я поменял свой текст и css'
//     input.style.color = 'red';
//     input.style.padding = '10px 0';
//     input.style.paddingRight = '20px';
//     input.style.border = '2px solid black';
//     input.style.borderRadius = '20px';
//     input.style.width = '200px'
// }


// let submit = document.getElementById('submit');
// let btn = document.getElementById('btn__submit');
// function SubmitDisabled(elem) {
//     elem.onclick = function() {
//         elem.disabled = true;
//         elem.value = 'Ой на меня больше не нажать'
//         btn.style.display = 'block'
//     }
//     btn.onclick = function() {
//         elem.disabled = false;
//         btn.style.display = 'None'
//         elem.value = 'Ой на меня снова можно нажимать'
//     }
// }
// SubmitDisabled(submit);


// let btn = document.getElementById('button');
// let i = 0;
// btn.textContent = i;
// btn.onclick = function() {
//     i++;
//     btn.textContent = i;
// }


// let btn = document.getElementById('btnLeft');
// let input = document.getElementById('inputRight');
// let block = document.getElementById('block__input');
// btn.onclick = function() {
//     block.style.flexDirection = 'row-reverse';
//     block.style.justifyContent = 'space-between';
//     input.value = 'Теперь я справа';
// }


// let btn = document.getElementById('btn_20');
// let input = document.getElementById('input_20');
// btn.onclick = function() {
//     input.value = `Мои CSS классы: ${input.classList}`
// }


// let input = document.getElementsByClassName('input_21');
// let btn = document.getElementById('btn_21');
// let ValueInput = input[0].value
// btn.onclick = function() {
//     input[0].value = input[1].value;
//     input[1].value = ValueInput;
//     ValueInput = input[0].value
// }


// let input = document.getElementsByClassName('input_22');
// let btn = document.getElementById('btn_22');
// btn.onclick = function() {
//     input[1].value = Number(input[0].value)**2
// }


// let input = document.getElementsByClassName('input_23');
// let btn = document.getElementById('btn_23');

// btn.onclick = function() {
//     let num = input[0].value
//     if (!isNaN(input[0].value)) {
//         input[1].value = num**2
//     } else {
//         alert("Вы ввели не число")
//     }
// }


// let input = document.getElementById('input_24');
// input.onclick = function() {
//     input.disabled = true;
//     input.style.cursor = 'not-allowed'
// }


// let input = document.getElementsByClassName('input_25');
// function add(elem) {
//     input[0].value += elem
// }















// let text = document.getElementById("text") 
// let button = document.getElementById("button") 
 
// button.onclick = function() { 
//     text.innerHTML = 'теперь я <b> жирный' 
// } 
 
 
// let h3 = document.getElementById("h3-2") 
// let text = document.getElementById("text-2") 
// let button = document.getElementById("button-2") 
 
// h3.style.display = 'none' 
// button.onclick = function(){ 
//     text.style.display = 'none' 
//     h3.style.display = 'block' 
// } 
 
 
// let h3 = document.getElementById("h3-3") 
// let text = document.getElementById("text-3") 
// let button = document.getElementById("button-3") 
 
// h3.style.display = 'none' 
// button.onclick = function(){ 
//     text.style.display = 'none' 
//     h3.style.display = 'block' 
// } 
 
 
// let button = document.getElementById("button-4") 
// let input1 = document.getElementById("input__cal1") 
// let input2 = document.getElementById("input__cal2") 
// let text = document.getElementById("text-cal-4") 
// let sum = 0 
 
// button.onclick = function(){ 
//     sum = Number(input1.value) + Number(input2.value) 
//     text.innerText = sum 
// } 
 
 
// let texts = document.getElementsByTagName('p-5') 
// let button = document.getElementById('button-5') 
 
// button.onclick = function(){ 
//     for(let i = 0; i < 5; i++){ 
//         texts[i].innerText = '222' 
//     } 
// } 
 
 
// let texts = document.getElementsByClassName('www-6') 
// let button = document.getElementById('button-6') 
 
// button.onclick = function(){ 
//     for(let i = 0; i < 5; i++){ 
//         texts[i].innerText = '222' 
//     } 
// } 
 

// let elements = document.querySelectorAll('p.num7');
// let i = 0
// for (let elem of elements) {
//     elem.innerHTML = i
//     i++
// }

 
// let button = document.getElementById("button-8") 
// let text = document.getElementById('text-8') 
 
// button.onclick = function(){ 
//     alert(text.className) 
// } 
 
 
// let button = document.getElementById("button-9") 
// let button2 = document.getElementById("button2-9") 
// let text = document.getElementById('text9') 
 
// button.onclick = function(){ 
//     alert(text.className) 
// } 
// button2.onclick =function(){ 
//     alert("класс удалён") 
//     text.classList.remove('class') 
// } 
 
 
// let button = document.getElementById("button10") 
// let text = document.getElementById('text10') 
 
// button.onclick = function(){ 
//     text.className = 'new-class' 
//     alert('класс изменён') 
// } 
 
 
// let input = document.getElementById("input11") 
// let text = document.getElementById('text11') 
 
// input.onkeydown = function(){ 
//     text.innerText = input.value 
// } 
 
 
// let button = document.getElementById("button12") 
// let a = document.getElementById('a') 
// let a2 = document.getElementById('a2') 
// let a3 = document.getElementById('a3') 
 
// button.onclick = function(){ 
//     a.innerText = (${a.href}) 
//     a2.innerText = (${a2.href}) 
//     a3.innerText = (${a3.href}) 
// }





// let elems = document.getElementsByClassName('elems_14');
// let btn = document.getElementById('btn_14');
// let i = 0
// btn.onclick = function() {
//     for (let elem of elems) {
//         elem.innerHTML = i
//         i++
//     }
// }


// let elems = document.getElementsByClassName('elems_15');
// let btn = document.getElementById('btn_15');
// let i = 0
// btn.onclick = function() {
//     if (typeof i == 'number') {
//         for (let elem of elems) {
//             elem.innerHTML = `${i}.${elem.innerHTML}`
//             i++
//         }  
//     }
//     i = false
// }






// var date = new Date();
// console.log(date.getDate());


// var date = new Date();
// console.log(date.getMonth());


// var date = new Date();
// console.log(date.getFullYear());


// var date = new Date();
// function getZero(num){
// 	if (num > 0 && num < 10) { 
// 		return '0' + num;
// 	} else {
// 		return num;
// 	}
// }

// console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + getZero(date.getDate()) + '.' + getZero(date.getMonth() + 1) + '.' + date.getFullYear());


// var date = new Date();
// console.log(date.getDay());


// var date = new Date();
// var day = date.getDay();

// function showDay(day) {
// 	var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// 	return days[day];
// }

// console.log(showDay(day));


// var date = new Date(2015, 0, 7);
// var day = date.getDay();

// function showDay(day) {
// 	var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// 	return days[day];
// }

// console.log(showDay(day));


// var date = new Date();
// var minute = Math.floor(date.getTime() / (1000 * 60));
// console.log(minute);


// var time = Date.parse('1988-03-01T00:00:00');

// var date = new Date();
// var now = date.getTime(); 

// var result = now - time; 
// result = result / (1000 * 60 * 60); 
// console.log(result);


// var date = new Date();
// var now = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
// var result = Math.floor((date.getTime() - now.getTime()) / 1000);
// console.log(result);


// let date = new Date();
// let seconds = date.getHours()*3600 + date.getMinutes()*60 + date.getSeconds();
// let fullTime = 24 * 3600
// console.log(fullTime - seconds)


