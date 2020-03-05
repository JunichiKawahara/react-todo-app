import React, { Component } from 'react';

class MatomeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            title: props.title,
        }
    }
    render() {
        return (
            <li>{this.props.title}</li>
        );
    }
}

class Matome extends Component {
    constructor(props) {
        super(props);
        this.genkou = [
            { id: 1, title: 'UIをコンポーネントに分割する' },
            { id: 2, title: 'props やstate によってどのようにUI が変化するかを定義する(JSXの作成)' },
            { id: 3, title: 'ユーザー操作によってどのようにstate が変化するかを定義する（メソッドの作成）' },
            { id: 4, title: 'UI とメソッドを紐付ける（onClick などを設定）' },
        ];

        this.state = {
            tejun: [],
        }
    }

    addItem = () => {
        const tejunCount = this.state.tejun.length;
        if (tejunCount >= this.genkou.length) {
            return;
        }
        this.setState({
            tejun: this.state.tejun.concat(this.genkou[tejunCount])
        });
    }

    clearItem = () => {
        this.setState({
            tejun: []
        });
    }

    render() {
        const list = this.state.tejun.map(item => {
            return <MatomeItem {...item} key={item.id} />;
        })
        return (
            <>
            <button onClick={this.addItem}>Click Me !</button>
            <button onClick={this.clearItem}>Rest</button>
            <ol>
                {list}
            </ol>
            </>
        );
    }
}
export default Matome;