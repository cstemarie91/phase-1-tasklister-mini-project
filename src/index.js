document.addEventListener("DOMContentLoaded", () => {
  

  let form = document.querySelector('form')
    form.addEventListener("submit",(e) => {
    e.preventDefault();
    createTask(e.target.elements['new-task-description'].value)
    form.reset()
  } )
});

function createTask(task){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  let priority = document.createElement('select')
  
  let defaultOption = document.createElement('Option')
  let red = document.createElement('option')
  let yellow = document.createElement('option')
  let green = document.createElement('option')
  
  btn.addEventListener('click', handleTask)
  btn.textContent = 'x'
 
  defaultOption.textContent = "Select Priority"
  defaultOption.value = "default"

  red.textContent = 'High Priority'
  red.style.color = 'Red';
  
  yellow.textContent = 'Medium Priority'
  yellow.style.color = 'Yellow'
  
  green.textContent = 'Low Priority'
  green.style.color = 'Green'
  
  red.value = 'Red';
  yellow.value = 'Yellow';
  green.value = 'Green';
  
  priority.addEventListener('change', function() {
    setPriorityColor(p, priority.value);
});
  p.textContent = `${task}  `
  p.appendChild(btn)
  p.appendChild(priority)
  
  priority.appendChild(defaultOption)
  priority.appendChild(red)
  priority.appendChild(yellow)
  priority.appendChild(green)
  
  document.querySelector('#tasks').appendChild(p)

}

function handleTask(){
  document.querySelector('button').parentNode.remove()

}

function setPriorityColor(taskElement, color) {
  if(color !== 'default'){
  taskElement.style.color = color;
  }
}