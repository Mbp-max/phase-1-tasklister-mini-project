// const newtoDo = document.querySelector('#new-task-description')
document.addEventListener("DOMContentLoaded", () => {
  console.log("The DOM has loaded.");
  document.querySelector('form').addEventListener('submit', (s) => {
    s.preventDefault();
    addingToDo(s.target['new-task-description'].value)
  })
});
function addingToDo(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', btndelete)
  btn.textContent = ' X '
  p.textContent = `${todo}   `
  p.appendChild(btn)
  document.querySelector('#tasks').append(p);
}

function btndelete(e){
  e.target.parentNode.remove()
}

// let newToDo = document.querySelector('#new-task-description')