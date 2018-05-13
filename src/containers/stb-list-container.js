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
          Loading...
      </div>

      if (this.props.users.current_phase==1){
          var i=0
          var items = this.props.users.bouquets.e2servicelist.e2service.map(function (e2service) {
              return (
                  //<div key={i++} onClick={()=> alert(e2service.e2servicereference)}>{e2service.e2servicename}</div>
                  <div key={i++} onClick={()=> stbApi.getServicesFromBouquet(e2service.e2servicereference,e2service.e2servicename)}>{e2service.e2servicename}</div>
              );
          });

      } else if (this.props.users.current_phase==2){
          var i=0
          var items = this.props.users.services.e2servicelist.e2service.map(function (e2service) {
              return (
                  //<div key={i++} onClick={()=> alert(e2service.e2servicereference)}>{e2service.e2servicename}</div>
                  <div key={i++} onClick={()=> stbApi.selectServiceFromBouquet(e2service.e2servicereference,e2service.e2servicename)}>{e2service.e2servicename}</div>
              );
          });
      } else if (this.props.users.current_phase==3){
          var i=0
          var items = <div key={i++} onClick={()=> stbApi.runServiceFromBouquet()}>{this.props.users.channel}</div>
      } else if (this.props.users.current_phase==4){
          var i=0
          var items = <div key={i++} onClick={()=> stbApi.getServicesFromBouquet(this.props.users.current_bouquet_reference,this.props.users.current_bouquet_name)}>{this.props.users.run}</div>
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
