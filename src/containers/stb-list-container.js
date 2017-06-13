import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as stbApi from '../api/stb-api';

class StbListContainer extends Component{

  componentWillMount () {
      stbApi.getAllPhases()
  }

    componentDidUpdate(){
       console.log("Update" ,this.props.users.current_phase)
        if (this.props.users.current_phase==0){
            stbApi.getAllBouquets()
        }

    }

  render () {
    console.log("users3",this.props.users)
      console.log("phases",this.props.phases)
      var items = <div>
          Trigger an alert3
      </div>

      if (this.props.users.current_phase==1){
          var items = this.props.users.bouquets.e2servicelist.e2service.map(function (e2service) {
              return (
                  <div>{e2service.e2servicename}</div>
              );
          });

      }

    return (

        <div>{items}</div>

    );
  }

};

let StbListContainer2 = ({ users, dispatch }) => {
    let input
    console.log("state1", users)
    console.log("dispatch1", dispatch)

    return (

        <div onClick={() => stbApi.getAllPhases()}>
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
