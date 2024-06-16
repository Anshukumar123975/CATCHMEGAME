let buttons = document.querySelectorAll('button');
function number() {
    return Math.floor(Math.random()*15);
}
let index=number();
function setImage(index) {
    buttons[index].style.backgroundImage = "url('mouseimage.jpg')";
    buttons[index].style.backgroundSize="20em 10em";
}
setImage(index);
function removeImage(index){
    buttons[index].style.background="none";
}
function next(){
    removeImage(index);
    index = number();
    setImage(index);
}
for(let button of buttons){
    button.addEventListener('mouseenter', function() {
        if(button===buttons[index]){
            next();
        }
    })
}




















































// let b=buttons[n];
// function next() {
    
//     n=Math.floor(Math.random()*15);
    
//     b=buttons[n];
// }
// for(let button of buttons){
//     button.addEventListener('mouseenter', function() {
//         if (button === buttons[n]) { 
//             next(); 
//         }
//     });
// }
// buttons[n].addEventListener('mouseenter',function() {
//     b.style.background="none";
//     n=Math.floor(Math.random()*15);
//     buttons[n].style.backgroundImage = "url('mouseimage.jpg')";
//     buttons[n].style.backgroundSize="20em 10em";
//     b=buttons[n];
// })
// function number() {
//     return Math.floor(Math.random() * 15); 
// }

// let n = number();
// let buttons = document.querySelectorAll('button');

// function setMouseImage(index) {
//     buttons[index].style.backgroundImage = "url('mouseimage.jpg')";
//     buttons[index].style.backgroundSize = "20em 10em";
// }

// function removeMouseImage(index) {
//     buttons[index].style.background = "none";
// }


// setMouseImage(n);

// function next() {
//     removeMouseImage(n);  
//     n = number();         
//     setMouseImage(n);    
// }

// buttons.forEach(button => {
//     button.addEventListener('mouseenter', function() {
//         if (button === buttons[n]) { 
//             next(); 
//         }
//     });
// });