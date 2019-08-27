import Todo from '../src/components/todos/Todo.js';
const test = QUnit.test;

QUnit.module('Todo');

test('render', assert => {
    // arrange
    const todo = {
        id: 1,
        name: 'Take out the trash',
        inactive: false
    };

    const expected = /*html*/`
        <li class="todo-item">
            Take out the trash
            <div>
                <button class="complete-button"> ✔ </button>
                <button class="remove-button"> 🗑 </button>
            </div>
        </li>
    `;
    
    // act
    const todoType = new Todo({ todo });
    const html = todoType.renderHTML();
    
    // assert
    assert.htmlEqual(html, expected);
});