# todo-vanilla-es6

[![Join the chat at https://gitter.im/sciences-u-lyon/todo-vanilla-es6](https://badges.gitter.im/sciences-u-lyon/todo-vanilla-es6.svg)](https://gitter.im/sciences-u-lyon/todo-vanilla-es6?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A simplified version of todomvc app with vanilla ES6

## Requirements

- Node v8+ (https://nodejs.org/en/ -> download current version)
- A code editor (Visual Studio Code)
- Chrome v70+

## Usage

### Install dependencies
```bash
$ npm install
```

### Run webpack development server
```bash
$ npm start
```

## Assignments

Implement the following features to have a functional Todo app:

- Render an existing list of todo tasks
- Add a new todo task
- Complete / Uncomplete a todo task
- Complete / Uncomplete all todo tasks
- Update a todo task
- Remove a todo task

The code should be written inside `src/main.js` file. You will use the functions from the `View` class to handle events and DOM manipulation, and the functions from the `Store` class to handle the `todo` objects in memory (and the different operations: add, complete / uncomplete, update, remove).

## Documentation

The differents methods from both classes `View` and `Store` are documented inside `out/index.html` (open with Chrome).
