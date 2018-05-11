/**
 * Created by Administrator on 2018/5/11
 * Description:
 */
'use strict';
import React, {Component} from 'react';

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            inputText:''
        }
    }

    render() {
        return (
                <div>我是test页面
                    <input type="text" ref="dom" value={this.state.inputText} onChange={this.changeValue.bind(this)}/>
                    <button onClick={this.getValue.bind(this)}>点击获取值</button>
                    <Content myNumber = {this.state.inputText}></Content>
                </div>
        )
    }

    getValue(){
        console.log(this.state.inputText);
    }

    changeValue(event){
        this.setState({inputText: event.target.value});
    }
}

class Content extends Component {
    componentWillMount() {
        console.log('componentWillMount!')
    }
    componentDidMount() {
        console.log('componentDidMount!')
    }
    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECEIVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }

    render () {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
};
