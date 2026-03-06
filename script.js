let $=document
const firstValue=$.querySelector('.C')
const SecondValue=$.querySelector('.F')
const convertor=$.querySelector('#converter')
const result=$.querySelector('.result')
const convertButton=$.querySelector('.convertButton')
const resetButton=$.querySelector('.resetButton')
const changeButton=$.querySelector('.changeButton')
function convert(){
    //console.log("converted")
    if(convertor.value=='' || isNaN(convertor.value)){
        result.innerHTML='Enter correct Value!'
        result.style.color='#993300'
    }
    else{
        if(firstValue.innerHTML=='°C'){
            let resultValue = (convertor.value*1.8)+32
            result.style.color='#ffff66'
            result.innerHTML=convertor.value+'°C = '+resultValue.toFixed(3)+'°F'
        }
        else{
            let resultValue = (convertor.value-32)*5/9
            result.innerHTML=convertor.value+'°F = '+resultValue.toFixed(3)+'°C'

        }
    }
}
function rest(){
    //console.log("reseted")
    result.innerHTML=''
    convertor.value=''
}
function change(){
    //console.log("changed")
    if(firstValue.innerHTML==='°C'){
        firstValue.innerHTML='°F'
        SecondValue.innerHTML='°C'
        convertor.setAttribute('placeholder','°F')
    }
    else{
        firstValue.innerHTML='°C'
        SecondValue.innerHTML='°F'
        convertor.setAttribute('placeholder','°C')
    }
}
convertButton.addEventListener('click',convert)
resetButton.addEventListener('click',rest)
changeButton.addEventListener('click',change)