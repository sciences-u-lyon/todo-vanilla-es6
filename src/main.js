import { Store } from './store';
import { View } from './View';

const store = new Store();
const view = new View();

const render = () => {
  const { total, completed } = store.count();

  view.render(store.todoList, total === completed, $todoList => {
    $todoList.forEach($todo => {

      view.onToggleTodo($todo, checked => {
        store.toggleTodo($todo.getAttribute('id'), checked);
        render();
      });

      view.onRemoveTodo($todo, () => {
        store.removeTodo($todo.getAttribute('id'));
        render();
      });

      view.onEditTodo($todo, () => {
        const $input = view.editTodo($todo);
        view.onUpdateTodo($input, newTitle => {
          store.updateTodo($todo.getAttribute('id'), newTitle);
          render();
        });
      });

    });
  });
};

render();

view.onAddTodo(title => {
  store.addTodo(title);
  render();
});

view.onToggleAllTodos(checked => {
  store.toggleAllTodos(checked);
  render();
});
