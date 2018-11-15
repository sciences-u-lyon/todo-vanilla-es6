import { uniqueId } from './helpers';

const byId = id => todo => Number(todo.id) === Number(id);

/**
 * Creates a new Store instance
 * @class
 * @classdesc Handles Model logic (store in memory the list of todos, add, remove, update and count todos)
 */
export class Store {
  constructor() {
    this.todoList = [
      {
        id: 1,
        title: 'Learn JavaScript',
        completed: false
      },
      {
        id: 2,
        title: 'Learn Vue',
        completed: false
      }
    ];
  }

  /**
   * Add a new todo object to the list
   * @param {String} title - the title of the new todo
   */
  addTodo(title) {
    const newTodo = {
      id: uniqueId(),
      title,
      completed: false
    };
    this.todoList.push(newTodo);
  }

  /**
   * Complete or uncomplete a todo object
   * @param {Number} id - the id of the todo object to complete / uncomplete
   * @param {Boolean} completed - true to complete the todo, false to uncomplete it
   */
  toggleTodo(id, completed) {
    const todo = this.todoList.find(byId(id));
    todo.completed = completed;
  }

  /**
   * Complete or uncomplete all todo objects of the list
   * @param {Boolean} completed - true to complete all todos, false to uncomplete them
   */
  toggleAllTodos(completed) {
    this.todoList.forEach(todo => {
      todo.completed = completed;
    });
  }

  /**
   * Count the number of todos and the number of completed todos
   * @returns {Object} the number of todos and the number of completed todos
   */
  count() {
    const total = this.todoList.length;
    const completed = this.todoList.filter(todo => todo.completed).length;
    return { total, completed };
  }

  /**
   * Remove a todo object from the list
   * @param {Number} id - the id of the todo object to remove
   */
  removeTodo(id) {
    const todoIndex = this.todoList.findIndex(byId(id));
    this.todoList.splice(todoIndex, 1);
  }

  /**
   * Update the title of a todo object
   * @param {Number} id - the id of the todo object to update
   * @param {String} title - the new title of the todo
   */
  updateTodo(id, title) {
    const todo = this.todoList.find(byId(id));
    todo.title = title;
  }
};
