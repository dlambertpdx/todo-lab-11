import Component from '../Component.js';

class Todo extends Component {

    onRender(dom) {
        const todo = this.props.todo;
        const onUpdate = this.props.onUpdate;
        const onRemove = this.props.onRemove;

        const inactiveButton = dom.querySelector('.inactive-button');
        inactiveButton.addEventListener('click', () => {
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
                <div>
                    <button class="complete-button">
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