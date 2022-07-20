const addToDoButton = document.getElementById('addToDo');
const clearToDo = document.getElementById('clearToDo');
const todoContainer = document.getElementById('todoContainer');
const inputText = document.getElementById('inputText')

addToDoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling')
    todoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = '';
    inputText.focus();

    paragraph.onclick=()=>{
        paragraph.classList.toggle('done')
        inputText.focus()
    };
    /*   paragraph.addEventListener('click', function(){
         paragraph.style.textDecoration = 'line-through';
    }) */

    paragraph.addEventListener('dblclick', function(){
        todoContainer.removeChild(paragraph);
        inputText.focus()
    });

    clearToDo.addEventListener('click', function(){
        paragraph.remove();
        inputText.focus();
    })
})
