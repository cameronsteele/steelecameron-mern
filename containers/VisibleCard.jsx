import { connect } from 'react-redux';
// import { toggleTodo } from '../actions';
import Card from '../components/Card';
​
const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}
​
const mapDispatchToProps = dispatch => {
  return {
    // onTodoClick: id => {
    //   dispatch(toggleTodo(id))
    // }
  }
}


const VisibleCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
​
export default VisibleTodoList;
