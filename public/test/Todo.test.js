import Todo from '../src/components/todos/Todo.js';
const test = QUnit.test;

QUnit.module('Todo List');

test('render todo', assert => {
    // arrange
    const todo = {
        id: 1,
        name: 'Take out the trash',
        inactive: false
    };

    const expected = /*html*/`
        <li class="todo-item">
            Take out the trash
            <div class="li-div">
            <span class="${todo.completed ? 'complete' : ''}">${todo.task}</span>
            </div>
            <div>
                <button class="completed-button"> ✔ </button>
                <button class="remove-button"> 🗑 </button>
            </div>
        </li>
    `;
    
    // act
    const todoItem = new Todo({ todo });
    const html = todoItem.renderHTML();
    
    // assert
    assert.htmlEqual(html, expected);
});