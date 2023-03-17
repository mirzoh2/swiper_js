let doc = document
let mainForm = doc.form

let sucIput = doc.querySelectorAll('.sucInput')
let sucDiv = doc.querySelectorAll('.sucsess')
let li = doc.querySelectorAll('li')
let inputWrap = doc.querySelectorAll('.input_wrap')
let num = 7


let numberOferor = 0

//Переменный для сены стиля


let sucsess = (suc) =>{
  
  if (suc.value == '') {//если он пустой изменяю стиль инпута и считаю их количество
    suc.style =  'border: 2px solid #EE0004;' 
      let intP = suc.previousElementSibling
      let intSpan = suc.nextElementSibling
      let icon = intSpan.nextElementSibling
      icon.style = 'display:block;'
      intP.style = 'color: #EE0004;'
      intSpan.textContent = 'Please enter your email adress'
      intSpan.style = 'color: #EE0004;'
      
      suc.addEventListener('focus', ()=>{//при активном инпуте тож добавляю стиль
        suc.style =  'outline: 2px solid #EE0004; border: 2px solid #EE0004;' 
      })
      suc.addEventListener('blur', ()=>{//сдесь убираяю
        suc.style =  'border: 2px solid #EE0004;'  
      })
      numberOferor++
      

  }else{//Востанавливаю стиль ели инпут не пустой
    suc.style =  'border: 2px solid #543FD3;' 
      let intP = suc.previousElementSibling
      let intSpan = suc.nextElementSibling
      let icon = intSpan.nextElementSibling
      intP.style = 'color: #4200FF;'
      intSpan.textContent = 'Need to fill'
      intSpan.style = 'color:  #595959;'
      icon.style.display = 'none'
      suc.addEventListener('focus', ()=>{
        suc.style =  'outline: 2px solid #543FD3; border: 2px solid #543FD3;' 
      })
      suc.addEventListener('blur', ()=>{
        suc.style =  'border: 2px solid #543FD3;'  
      })


}

//высчитаю успешность количестово иутов и добавляю в li
li[0].textContent = `All: ${inputWrap.length}`
li[1].textContent = `Need: ${sucIput.length}`
li[2].textContent = `Success: ${inputWrap.length - numberOferor}/12`
li[3].textContent = `Error: ${numberOferor}/12`

  
}










mainForm.addEventListener('submit', () =>{//При нажатии на кнопку вызываю функцию
  event.preventDefault()
  numberOferor = 0
  sucIput.forEach((i)=>{//Достаю каждый важный инпут черрез цикл и использую функцию
    sucsess(i)
    

  })

  
  
})
