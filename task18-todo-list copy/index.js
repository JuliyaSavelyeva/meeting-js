const listElem = document.querySelector('.list');
const inputElem = document.querySelector('.task-input');

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderTasks = tasksList => {
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', index);
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// input: obj
// output: undefined

// algo
// 1. get info
// 2. modify data
// 3. re-render

const onCreateTask = () => {
  if (inputElem.value === '') {
    return;
  }
  tasks.unshift({
    text: `${inputElem.value}`,
    done: false,
  });

  renderTasks(tasks);
  inputElem.value = '';
};

const createBtnEl = document.querySelector('.create-task-btn');
createBtnEl.addEventListener('click', onCreateTask);

const onUpdateTask = event => {
  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }

  const index = event.target.dataset.id;
  tasks[index].done = event.target.checked;

  renderTasks(tasks);
};

listElem.addEventListener('click', onUpdateTask);
