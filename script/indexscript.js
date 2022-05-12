const txtvalue = document.getElementById('exampleFormControlInput1')
const gobtn = document.getElementById('gobtn')
const botid = document.getElementById('bot')
const botvalue = document.getElementById('botvalue')
const botmes = document.getElementById('botmes')
const inout = document.getElementById('exampleFormControlInput1')
const send = document.getElementById('send')
const close = document.getElementById('close')

botid.addEventListener('click',()=>{
    botvalue.style.display = "flex";
})

send.addEventListener('click', ()=>{
    if(inout.value == "hi"){
        botmes.innerText = "hi"
    }

    else if(inout.value == "bye"){
        botmes.innerText = "ThankYou"
    }
    
    else if(inout.value == "resume"){
        window.open('https://google.com')
    }
})

close.addEventListener('click',()=>{
    botvalue.style.display = "none";
})

// nameless function means direct execute



// const contactbtn = document.getElementById('contactbtn')
// contactbtn.addEventListener('click', function(){
//     window.open('')
// })