import React, { Component } from 'react';

class ToDoInput extends Component {
    render() {
        return (
            <>
                <input placeholder="新規のTODOを入力してください" />
                <button>登録</button>
            </>
        );
    }
}

export default ToDoInput;