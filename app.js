
function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');


  addToDoForm.addEventListener('submit', event => {
  event.preventDefault();

      // get the text
      let title = newToDoText.value;

      // create a new li
      let newLi = document.createElement('li');

      // create a new input
      let checkbox = document.createElement('input');

      let button = document.createElement('input')

      // set the input's type to checkbox
      checkbox.type = "checkbox";

      button.type = "button";

      button.value = "delete";

      // set the title
      newLi.textContent = title;

      // attach the checkbox to the li
      newLi.appendChild(checkbox);

      newLi.appendChild(button);

      // attach the li to the ul
      toDoList.appendChild(newLi);

      //empty the input
      newToDoText.value = '';

      button.addEventListener('click', event => {
        toDoList.removeChild(newLi)
      });

     });
}

window.onload = function() {
onReady();
};
