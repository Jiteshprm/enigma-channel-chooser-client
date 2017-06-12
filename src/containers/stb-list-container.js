import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as stbApi from '../api/stb-api';

class StbListContainer extends Component{

  componentWillMount () {
      stbApi.getPhases()
  }

  render () {
    console.log("users3",this.props.users)
      console.log("phases",this.props.phases)
    return (
<div onClick={() => stbApi.getPhases()}>xxxxx</div>
    );
  }

};

let StbListContainer2 = ({ users, dispatch }) => {
    let input
    console.log("state1", users)
    console.log("dispatch1", dispatch)

    return (

        <div onClick={() => stbApi.getPhases()}>
          aaaa

        </div>
    )
}

const mapStateToProps = function(store) {
    return {
        users : store.stbListReducer,
        phases : store.stbListReducer.phases
    };
}

StbListContainer=connect(mapStateToProps)(StbListContainer);
export default StbListContainer
