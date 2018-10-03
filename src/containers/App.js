import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import {setSearchField, requestRobots} from '../actions';
import {connect } from 'react-redux';





class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots()
  }



  render() {
   
    const {searchField, robots, onSearchChange, isPending} = this.props;
    console.log("robots ",robots)
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}
const mapStateToProps = (state) => {
  return {
    searchField: state.search.searchField,
    robots: state.request.robots,
    isPending: state.request.isPending,
    error: state.request.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => {
      dispatch(setSearchField(event.target.value))
    },
    onRequestRobots: ()=> {
      dispatch(requestRobots())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);