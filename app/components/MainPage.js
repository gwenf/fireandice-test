import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import { exampleAction } from '../actions/test';

//TODO: change variables based off of npm command to import whichever folder
import AllPolls from './forms-basic/AllPolls';
import CreatePoll from './forms-basic/CreatePoll';

class MainPage extends Component {
  render() {
    return (
        <Router>
            <div>
                <div className='row'>

                    <ul className='menu'>
                        <li className='menu-text'>Fire and Ice</li>
                        <li><NavLink exact activeStyle={{fontWeight: 'bold'}} to='/'>Polls</NavLink></li>
                        <li><NavLink activeStyle={{fontWeight: 'bold'}} to='/create'>Create New Poll</NavLink></li>
                    </ul>

                </div>

                <div className='row wrapper'>
                    <Route exact={true} path='/' component={AllPolls}/>
                    <Route exact={true} path='/create' component={CreatePoll}/>
                </div>

                {/* <button className='hollow button warning'
                        onClick={()=>{this.props.dispatch(exampleAction('dummy data here'))}}
                >
                    Click here for redux test. (logs to console)
                </button> */}

            </div>
	    </Router>
    );
  }
}

var mapStateToProps = function(state, ownProps){
    return {
    	testData: state.exampleReducer.testData
    };
};
MainPage = connect(state => (mapStateToProps), null)(MainPage);
export default MainPage
