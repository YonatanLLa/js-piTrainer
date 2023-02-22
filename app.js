const numero = document.querySelector('#game')
const button = document.querySelector('#button_start')
const setup = document.querySelector('.setup')
const container = document.querySelector('.new_container')

const title = document.querySelector('h1')
let str = 'Pi Trainer'
title.className = 'title'
title.innerHTML = str.toUpperCase()
setup.innerHTML += '😜😜😜😜😜'
let imagen = ['😜','😜','😜','😜','😜']

function mostrar(){
    this.disabled = true;
    numero.style.display = 'block'
}
button.addEventListener('click', mostrar)
let pi_decimals = '14159265358979323846264338327950288419716939937'
let position = 0;
let cout = 0;
const input_decimals = document.getElementById('input_decimals')
const result_decimals = document.getElementById('result_decimals')
//keydown => keypress => .value => keyup

input_decimals.addEventListener('keyup',function(){
    this.value = '';
    this.focus();
})
input_decimals.addEventListener('keydown', function(evt){
    // fromCharCode:  ve que codigo representa
    const decimal = String.fromCharCode(evt.keyCode);
    // isNaN: evalua si es numero o no
    if(evt.code === 'Enter') return;
    if(decimal === '') return;
    if(isNaN(decimal)) return;
    // console.log(numero)
    // Si decimal llego hasta aqui, es por que el usuario preciono un numero 
    // charAt: te pasa la posicion del string.
    if(decimal === pi_decimals.charAt(position)){
        result_decimals.innerHTML += decimal 
        result_decimals.style.color = 'green';
        position++
    }else{
        cout++
        let cont = ''
        setup.innerHTML = ''
        setup.innerHTML += 'Vidas:'
        imagen.pop()
        result_decimals.style.color = 'red'
        if(cout){imagen.forEach((e)=>setup.innerHTML += e)
            setup.innerHTML += cont
        }
        // console.log(imagen);
        if(cout === 5){
            pi_decimals = '14159265358979323846264338327950288419716939937'
            let miCadena = pi_decimals.slice(position,position+5)
            // let miCadena = pi_decimals.style.color = 'green'

            result_decimals.innerHTML += miCadena

            // console.log(miCadena);
        } 

    }
    setTimeout(()=>{
        result_decimals.style.color = '#fff'
    },500)
    
})