const todoList = document.querySelector('.todos-list');
const todoWrapper = document.querySelector('.container');
const userInput = document.querySelector('#user-input');
const todoBtn = document.querySelector('#add-todo-btn')

let userTodos = [];

function setLocal(userTodos) {
  localStorage.setItem('todo', JSON.stringify(userTodos))
}

function getLocal() {
  const todoData = JSON.parse(localStorage.getItem('todo'));
  if (todoData !== null) {
    userTodos = todoData;
    genrateTodo(todoList, userTodos);
  }
}

function getUserTodo() {
  const userValue = userInput.value.trim();
  if (userValue !== '') {
    userTodos.push(userValue);
    userInput.value = '';
    genrateTodo(todoList, userTodos)
    setLocal(userTodos)
  }
} let todoHeight = 500;
function genrateTodo(container, list) {
  container.innerHTML = '';
  if (list.length <= 6) {
    list.forEach(todo => {

      container.insertAdjacentHTML('afterbegin', `
      <li
      class="todo-item flex flex-col col-span-12 md:col-span-6 lg:col-span-4 place-items-start justify-between place-content-between w-full min-h-[160px] sm:max-h-[200px] md:max-h-[200px]  sm-h-full overflow-hidden bg-white-color rounded-xl p-5"
    >
      <!-- todo title -->
      <div class="flex gap-y-1 items-center justify-between mb-3 w-full">
        <div class="flex items-center justify-between gap-x-2 w-full">
          <!-- todo title -->
          <div class="check flex items-center justify-center ">
            <i
              id="todo-icon"
              class="fa-solid fa-check text-lg cursor-pointer font-extrabold"
            ></i>
          </div>
          <h2 class="w-[80%] font-bold text-base cursor-pointer">
            ${todo}
          </h2>
        </div>
        <!-- delete btn -->
        <button class="w-[10px] h-[10px]">
          <i
            id="delete-btn"
            class="delete-btn fa-regular fa-trash-can text-lg"
          ></i>
        </button>
      </div>
      <!-- todo describtion -->
      <div class="w-full h-[80%]">
        <p class="text-sm">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
          ipsum dolor sit amet.
        </p>
      </div>
    </li>
            ` )
    });
  } else {
    alert(`that's good for today`);
    userTodos = []
  }
}

todoBtn.addEventListener('click', getUserTodo);
document.addEventListener('DOMContentLoaded', getLocal); 
