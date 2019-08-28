import Component from '../Component.js';

class Todo extends Component {

    onRender(dom) {
        const todo = this.props.todo;
        const onUpdate = this.props.onUpdate;
        const onRemove = this.props.onRemove;

        const completedButton = dom.querySelector('.completed-button');
        completedButton.addEventListener('click', () => {
            todo.inactive = !todo.inactive;
            onUpdate(todo);
        });
        
        const removeButton = dom.querySelector('.remove-button');
        removeButton.addEventListener('click', () => {
            if(confirm(`Are you sure you want to delete "${todo}"?`)) {
                onRemove(todo);
            }
        });
    }
    renderHTML() {
        const todo = this.props.todo;
        return /*html*/`
        <li class="todo-item">
            ${todo.name}
            <div class="li-div">
                <span class="${todo.completed ? 'complete' : ''}">${todo.task}</span>
            </div>
            <div>
                <button class="completed-button">
                    ✔
                </button>
                <button class="remove-button">
                    🗑
                </button>
            </div>
            </li>
            
        `;
    }
}

export default Todo;