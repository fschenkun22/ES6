import React, { Component } from 'react'
import 'antd/dist/antd.css';


import store from './store/index'
import {getInputChangeAction,getAddItemAction,getDelItemAction} from './store/actionCreator'
import TodoListUI from './TodoListUI'

class TodoList extends Component {

    constructor(props){
        super(props)
        //console.log(store.getState());
       // console.log(this.getState);
        
        this.state ={ 
        };
        store.subscribe(this.handleStoreChange)
        
    }
    handleStoreChange=()=>{
        this.setState(store.getState())
    }




    handleInputChage = (e)=>{
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }

    handleBtnClk=()=>{
        const action = getAddItemAction()
        store.dispatch(action)
    }

    handleDelClk=(index)=>{
        const action = getDelItemAction(index)
        store.dispatch(action)
    }




    render() {
        return (
           <TodoListUI
           inputValue={this.state.inputValue}
           handleInputChage = {this.handleInputChage}
           handleBtnClk = {this.handleBtnClk}
           list = {this.state.list}
           handleDelClk = {this.handleDelClk}
           />
        )
    }
}
export default TodoList