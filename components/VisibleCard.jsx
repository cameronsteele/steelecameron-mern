///TODO currently we've decided to put the Redux state connection code into Card.jsx -- if we keep it that way, remove this file

import { connect } from 'react-redux';
import Card from './Card.jsx';
// import { toggleTodo } from '../actions';

function mapStateToProps(state, ownProps) {
  var active = true;


  if(ownProps.nature == 'project') {
    active = state.page == ownProps.title.replace(/\s/g, '').toLowerCase();
  }

  return {
    active
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     // onTodoClick: id => {
//     //   dispatch(toggleTodo(id))
//     // }
//   }
// }

const VisibleCard = connect(
  mapStateToProps,
  // mapDispatchToProps
)(Card);

export default VisibleCard;