import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        // tasks内の各todo をTodoItemコンポーネントを用いてエレメントにしています。
        // list変数にはTodoエレメントの配列が入っています。
        const list = this.props.tasks.map(todo => {
            return <TodoItem {...todo} key={todo.id} />;
        });
        return (
            <>
                <ul>
                    {list}
                </ul>
            </>
        );
    }
}
export default TodoList;