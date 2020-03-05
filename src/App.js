import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './App.css';
import Matome from './Matome';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                { title: 'Todo１つ目', id: 0 },
                { title: 'Todo２つ目', id: 1 },
            ],
            uniqueId: 2,
        }

        // property initializer syntax を使うため、bind は不要
        // this.addTodo = this.addTodo.bind(this);
    }

    // property initializer syntax
        // babel にClass properties transform プラグインを追加する必要がある
        // (create-react-app でプロジェクトを構築した場合は追加済み)
    addTodo = (title) => {
        const {
            tasks,
            uniqueId,
        } = this.state;

        tasks.push({
            title,
            id: uniqueId,
        });

        this.setState({
            tasks,
            uniqueId: uniqueId + 1,
        });
    }

    resetTodo = () => {
        this.setState({
            tasks: [],
        });
    }

    render() {
        return (
            <>
                <h1>TODO App</h1>
                <button onClick={this.resetTodo}>リセット</button>
                <TodoInput addTodo={this.addTodo} />
                <TodoList tasks={this.state.tasks} />
                <hr />

                <h2>React コンポーネントの作成手順のまとめ</h2>
                <p>p.84</p>
                <Matome dummy={1}></Matome>
            </>
        );
    }
}

export default App;
