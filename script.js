let task = document.querySelector("#input")
let ul = document.querySelector("#list")
let val = "";
task.addEventListener('change',()=>{
  
    val = task.value
  
})



function add(){
  if(val==""){
      let er = document.createElement('p')
      er.innerHTML="Invalid Entry"
      ul.prepend(er)
      setTimeout(()=>{
          let msg = document.querySelectorAll('p')
          for(i=0; i<msg.length; i++){
              msg[i].remove()
          }

      },1000)
  }
  else{
    let newel = document.createElement('li');
    newel.classList= "mycheck"
    ul.prepend(newel);
    let newele = document.createElement('input')
    newele.type = "checkbox"
    newele.id = "check"
    newel.appendChild(newele)
    let newelem = document.createElement('LABEL')
    newelem.innerHTML= val
    newel.appendChild(newelem)
    task.value=""
    val=""
}}

function rem(){
    let checkbox = document.querySelectorAll('input[type="checkbox"]:checked');

    for(i=0; i<checkbox.length; i++){
        checkbox[i].parentNode.remove()
    }
}