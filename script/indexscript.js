const txtvalue = document.getElementById('exampleFormControlInput1')
const gobtn = document.getElementById('gobtn')

// nameless function means direct execut

gobtn.addEventListener('click',function(){
    alert("Welcome " + txtvalue.value)
})