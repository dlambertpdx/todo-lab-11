import Component from './Component.js';

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
        // DO REMOVE BUTTON NEXT!!!
    }
    renderHTML() {
        return /*html*/`
            
        `;
    }
}

export default Todo;