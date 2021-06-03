let btn = document.getElementById('btn')
let ul = document.querySelector('ul')

let fady = function(){
    if(ul.classList.contains('display')){
        ul.classList.remove('display')
    }else{
        ul.classList.add('display')
    }
}

btn.addEventListener('click' , fady )