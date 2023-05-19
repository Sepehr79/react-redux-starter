import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import { connect } from 'react-redux';
import { removeTodo, completeTodo } from './actions';

const TodoList = ({ todos = [], onRemovePressed, onCompeletePressed }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo} 
        onRemovePressed={onRemovePressed} 
        onCompeletePressed={onCompeletePressed} />)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompeletePressed: text => dispatch(completeTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);




