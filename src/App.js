import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import { Panel } from 'react-bootstrap';
import { PanelGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import ReactDOM from 'react-dom';


class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numChildren: 0
        };
    }

    render () {
        const children = [];

        for (var i = 0; i < this.state.numChildren; i += 1) {
            children.push(<ChildComponent number={i} />);
        };

        return (
            <ParentComponent addChild={this.onAddChild.bind(this)}>
                {children}
            </ParentComponent>
        );
    }

    onAddChild () {
        this.setState({
            numChildren: this.state.numChildren + 1
        });
    }
}

class ParentComponent extends React.Component {
    render () {
        return (
            <div className="card calculator">
                <p><a href="#" onClick={this.props.addChild}>Add Another Child Component</a></p>
                <div id="children-pane">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

class ChildComponent extends React.Component {
    render () {
        return (
            <div>{"I am child " + this.props.number}</div>
        );
    }
}

class EmployeeListItem extends Component {
    render() {
        return (
            <li>
                <a href={"#employees/" + this.props.employee.id}>
                    {this.props.employee.firstName} {this.props.employee.lastName}
                </a>
            </li>
        );
    }
};


class EmployeeList extends Component {
    render() {
        var items = this.props.employees.map(function (employee) {
            return (
                <EmployeeListItem key={employee.id} employee={employee} />
            );
        });
        return (
            <ul>
                {items}
            </ul>
        );
    }
};


class EnigmaServiceListItem extends Component {


    render() {
        function myFunction(reference, name, phases, current_phase) {
            //var link="http://127.0.0.1:3001/api/enigma-service-selector?service_reference=" + reference + "&service_name=" + name
console.log("phases",phases.phases)
            console.log("current_phase",current_phase)
            console.log("phases1",phases.phases[0])
            console.log("phases2",phases.phases[current_phase].url)
            var link="http://127.0.0.1:3001" + phases.phases[current_phase].url +"?service_reference=" + reference + "&service_name=" + name

            console.log(link)
            var th = this;
            axios.get(link , {
                timeout: 5000
            }).then(function(result) {
                    console.log(result.data.payload.e2servicelist.e2service)

                    const children = <EnigmaServiceList e2service={result.data} phase={current_phase} phases={phases}/>
                    console.log(children)
                    ReactDOM.render(children, document.getElementById('services'));
                }
                )
        }
        return (
            /*            <li>
             <a href={"#employees/" + this.props.reference}>
             {this.props.name}
             </a>
             </li>*/

            /*<Panel header={this.props.name} eventKey={this.props.index}>{this.props.reference}</Panel>*/

            /*<ListGroupItem href={"http://127.0.0.1:3001/api/enigma-service-selector?service_reference=" + this.props.reference + "&service_name=" + this.props.name}>{this.props.name}</ListGroupItem>*/
            <ListGroupItem onClick={() =>myFunction(this.props.reference, this.props.name, this.props.phases, this.props.current_phase)}>{this.props.name}</ListGroupItem>
        );
    }
};

class EnigmaServiceList extends Component {

    render() {
        function alertClicked() {
            alert('You clicked the third ListGroupItem');
        }
        function myFunction(a) {
            console.log(a)
        }
        var i=0
        var phases=this.props.phases
        var current_phase=this.props.phase

        //var x=this.props.e2service.payload

        console.log("rthis.props.e2service",this.props,Object.prototype.toString.call(this.props.e2service))
        console.log("rthis.props.phases",this.props.phases,Object.prototype.toString.call(this.props.phases))
        console.log("rthis.props.e2service.payload",this.props.e2service.payload,Object.prototype.toString.call(this.props.e2service.payload))
        console.log("this.props.e2service.payload.e2servicelist",this.props.e2service.payload.e2servicelist,Object.prototype.toString.call(this.props.e2service.payload.e2servicelist))
        var items = this.props.e2service.payload.e2servicelist.e2service.map(function (e2service) {
            return (
                <EnigmaServiceListItem key={i} reference={e2service.e2servicereference} name={e2service.e2servicename} index={i++} phases={phases} current_phase={current_phase}/>
            );
        });

        var items2 = <ListGroupItem onClick={alertClicked}>
            Trigger an alert2
        </ListGroupItem>

        var items3 = <ListGroupItem onClick={alertClicked}>
            Trigger an alert3
        </ListGroupItem>


        return (
            //<ul>
            //    {items}
            //</ul>
            <ListGroup>
                {items}
                {items2}
                {items3}

                <ListGroupItem onClick={alertClicked}>
                    Trigger an alert
                </ListGroupItem>
            </ListGroup>
        );
    }
};

class App extends Component {
    xmlParse() {
        // eslint-disable-next-line
        var xmlText="<?xml version='1.0' encoding='utf-8'?> \
            <Library>\
            <Books count='1'>\
            <Book id='1'>\
            <Name>Me Before You</Name>\
        <Author>Jojo Moyes</Author>\
        </Book>\
        </Books>\
        <Music count=1>\
            <CD id='2'>\
            <Name>Houses of the Holy</Name>\
        <Artist>Led Zeppelin</Artist>\
        </CD>\
        </Music>\
        </Library>"
        var XMLParser = require('react-xml-parser');
        var xml = new XMLParser().parseFromString(xmlText);    // Assume xmlText contains the example XML
        console.log(xml);
        console.log(xml.getElementsByTagName('Name'));
    }
    test() {
        console.log('aaa');
    }

    constructor(props) {
        super(props);

        this.state = {
            e2service: [],
            open: true,
            current_phase: 0
        };
    }

    componentWillMount (){

        var th = this;

        axios.get("http://127.0.0.1:3001/api/enigma-get-phases" , {
            timeout: 5000
        })
            .then(function(result) {
                    th.setState({
                        phases: result.data
                    });

                    console.log("http://127.0.0.1:3001" + th.state.phases.phases[th.state.current_phase].url )
                axios.get("http://127.0.0.1:3001" + th.state.phases.phases[th.state.current_phase].url  , {
                    timeout: 5000
                })
                    .then(function(result2) {
                            th.setState({
                                e2service: result2.data,
                                current_phase: th.state.current_phase+=1
                            });

                        console.log("result2.data.payload",result2.data.payload,Object.prototype.toString.call(result2.data.payload))
                        console.log("result2.data.payload.e2servicelist",result2.data.payload.e2servicelist,Object.prototype.toString.call(result2.data.payload.e2servicelist))
                        console.log("result2.data.payload.e2servicelist.e2service",result2.data.payload.e2servicelist.e2service,Object.prototype.toString.call(result2.data.payload.e2servicelist.e2service))
                        console.log("result2.data.payload",result2.data,Object.prototype.toString.call(result2.data))
                        var x=<EnigmaServiceList e2service={th.state.e2service} phase={th.state.current_phase} phases={th.state.phases}/>
                        ReactDOM.render(x, document.getElementById('channels'));
                        }
                    )
                }
            )


    }

    getXmlEnigma() {

    }

    render() {
        var employees = [
            {firstName: 'Christophe', lastName: 'Coenraets', id:1},
            {firstName: 'Lisa', lastName: 'Jones', id:2},
            {firstName: 'John', lastName: 'Smith', id:3}
        ];
        function alertClicked() {
            alert('You clicked the third ListGroupItem');
        }
        return (

            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                    {    console.log("this.state.e2service",this.state.e2service)}
                    {/*<EmployeeList employees={employees}/>*/}



                </p>
                <div id="services">


                <AppComponent/>
                </div>

                <div id="channels">
                </div>
            </div>
        );
    }
}

export default App;
