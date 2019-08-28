import Component from '../Component.js';

class TodoForm extends Component {
    onRender(form) {
        const onAdd = this.props.onAdd;
        const error = form.querySelector('p.error');

        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);
            const todo = {
                name: formData.get('todo')
            };

            error.textContent = '';

            onAdd(todo)
                .then(() => {
                    form.reset();
                })
                .catch(err => {
                    error.textContent = err;
                });
        });
    }

    renderHTML() {
        return /*html*/`
        <div>
            <form class="todo-form">
                <fieldset class="form-field">
                    <input name="todo" required>
                    <button>Add</button>
                </fieldset>
            </form>
            <p class="error"></p>
        </div>
        `;
    }
}

export default TodoForm;