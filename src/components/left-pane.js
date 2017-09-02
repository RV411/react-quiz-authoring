import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postExpense} from '../actions/index';

class LeftPane extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div className="left-pane">
        <div className="container">
          <div className="page-title">
            <h2>Select Your Questions</h2>
          </div>
          <div className="questions">
            <ul>
              <li>What is the capital of India?</li>
              <li>What is the capital of USA?</li>
            </ul>
          </div>
          <div className="action-block">
            <button className="button-primary"><i className="material-icons">add_circle_outline</i> ADD QUESTION</button>
            <button><i className="material-icons">delete_forever</i> REMOVE QUESTION</button>
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    expense: state
  };
}
function mapDispatchToProps(dispatch) {
  return (
    bindActionCreators({
      postExpense: postExpense
    }, dispatch)
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftPane);