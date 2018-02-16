import { connect } from 'react-redux'
import ToDoLink from './ToDoLink';
import { setVisibilityFilter } from '../../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    isactive: (ownProps.filter === state.visibilityFilter)?"active":"",
    disabled: !(ownProps.filter === state.visibilityFilter)?"disabled":"active"
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}


const ToDoLinkReduxWrapper = connect(mapStateToProps, mapDispatchToProps)(ToDoLink)

export default ToDoLinkReduxWrapper;
