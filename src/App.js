import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
    render() {
        // TODO: 後々stateで管理します
        const tasks = [
            { title: 'Todo１つ目', id: 0 },
            { title: 'Todo２つ目', id: 1 },
        ];

        return (
            <>
                <h1>TODO App</h1>
                <TodoInput />
                <TodoList tasks={tasks} />
            </>
        );
    }
}

export default App;
