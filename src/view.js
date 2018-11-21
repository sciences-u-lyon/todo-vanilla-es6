import { qs, qsAll, on, newElement } from './helpers';

const ENTER_KEY_CODE = 13;

/**
 * Creates a new View instance
 * @class
 * @classdesc Handles View logic (events, DOM manipulation)
 */
export class View {
  constructor() {
    this.$newTodo = qs('.new-todo');
    this.$main = qs('.main');
    this.$todoList = qs('.todo-list');
    this.$toggleAll = qs('.toggle-all');
    this.$ahrefs = Array.from(qsAll('a', qs('.filters')));
  }

  /**
   * Render a given list of todos
   * @param {Array} todoList - the list of todos to render
   * @param {Boolean} allCompleted - true if all todos are completed, else false
   * @param {Function} callback - called with the list of todo DOM elements, once it's rendered
   */
  render(todoList = [], allCompleted, callback) {
    this.$newTodo.value = '';
    this.$todoList.innerHTML = '';

    if (todoList.length === 0) {
      this.displayTodoList(false);
      return;
    }

    todoList.forEach(todo => {
      const $todo = newElement('li');
      $todo.setAttribute('id', todo.id);
      $todo.innerHTML = /* html */`
        <div class="view">
          <input class="toggle" type="checkbox">
          <label>${todo.title}</label>
          <button class="destroy"></button>
        </div>
      `;
      if (todo.completed) {
        $todo.classList.add('completed');
        const $toggle = qs('.toggle', $todo);
        $toggle.setAttribute('checked', true);
      }
      this.$todoList.appendChild($todo);
    });

    this.$toggleAll.checked = allCompleted;

    this.clearFilters();
    this.selectFilter();

    this.displayTodoList(true);

    if (callback) {
      callback(Array.from(qsAll('li', this.$todoList)));
    }
  }

  displayTodoList(display) {
    this.$main.style.display = display ? 'block' : 'none';
  }

  /**
   * Bind a callback function to the "ENTER keydown" event on the new todo input
   * @param {Function} callback - called with new todo title as param
   */
  onAddTodo(callback) {
		on(this.$newTodo, 'keydown', $event => {
      if ($event.keyCode !== ENTER_KEY_CODE) {
        return;
      }
			const title = $event.target.value.trim();
			if (title) {
				callback(title);
			}
		});
  }

  /**
   * Bind a callback function to the "change" event on the current todo checkbox
   * @param {Node} $todo - the current $todo element
   * @param {Function} callback - called with the checked property (true / false) as param
   */
  onToggleTodo($todo, callback) {
    const $toggle = qs('.toggle', $todo);
    on($toggle, 'change', $event => {
      const checked = $event.target.checked;
      callback(checked);
    });
  }

  /**
   * Bind a callback function to the "change" event on the "complete all todos" checkbox
   * @param {Function} callback - called with the checked property (true / false) as param
   */
  onToggleAllTodos(callback) {
    on(this.$toggleAll, 'change', $event => {
      const checked = $event.target.checked;
      callback(checked);
    });
  }

  /**
   * Bind a callback function to the "click" event on the "remove todo" button
   * @param {Node} $todo - the current $todo element
   * @param {Function} callback - called with no param
   */
  onRemoveTodo($todo, callback) {
    const $destroy = qs('.destroy', $todo);
    on($destroy, 'click', callback);
  }

  /**
   * Bind a callback function to the "double click" event on the label of the current $todo
   * @param {Node} $todo - the current $todo element
   * @param {Function} callback - called with no param
   */
  onEditTodo($todo, callback) {
    const $view = qs('.view', $todo);
    on($view, 'dblclick', callback);
  }

  /**
   * Toggle the "edit" mode on the current $todo
   * @param {Node} $todo - the current $todo element
   * @returns {Node} the input element to update the current $todo
   */
  editTodo($todo) {
    $todo.classList.add('editing');
    const $input = newElement('input');
    $input.classList.add('edit');
    $todo.appendChild($input);
    $input.focus();
    $input.value = qs('label', $todo).textContent;
    on($input, 'blur', () => {
      this.resetTodoEdit($todo);
    });
    return $input;
  }

  resetTodoEdit($todo) {
    $todo.classList.remove('editing');
    const $input = qs('.edit', $todo);
    $todo.removeChild($input);
  }

  /**
   * Bind a callback function to the "ENTER keydown" event on the input field ("edit" mode) of the current $todo
   * @param {Node} $input - the current $input element
   * @param {Function} callback - called with the new $input value
   */
  onUpdateTodo($input, callback) {
    on($input, 'keydown', $event => {
      if ($event.keyCode !== ENTER_KEY_CODE) {
        return;
      }
      callback($input.value);
    });
  }

  getSelectedFilter() {
    return window.location.hash || '#/';
  }

  clearFilters() {

  }

  selectFilter() {

  }

  /**
   * Bind a callback function to the "hashchange" event on the window object
   * @param {Function} callback - called with the selected filter
   */
  onFilterTodos(callback) {

  }
}
