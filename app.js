
function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm')
  var id = 0;


  function renderTheUI(){
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';

    toDos.forEach(function(toDo){
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      const deleteButton = document.createElement('button')
      deleteButton.textContent ="Delete!"

      deleteButton.addEventListener('click', event => {
        toDos = toDos.filter (function(item){
          return item.id !==toDo.id;
        });

          id++;

        renderTheUI();

      });


      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton)
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  function createNewToDo(){
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) {return; }
    console.log(id);

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    id=++id;
    console.log(id)

    renderTheUI();
  }

  newToDoText.value = '';

  renderTheUI();
}


window.onload = function() {
onReady();
};
