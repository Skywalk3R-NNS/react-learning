import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
    constructor(props){   // constructor definition
        super(props);
        this.state = {lat: null, errorMessage: ''}; //state init
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage:err.message})
        )
    }

    render(){

        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        if (!this.state.errorMessage && !this.state.lat){
            return <Spinner message="Please respond to the location request..."/>;
        }
    }
}

 ReactDOM.render(<App />, document.querySelector('#root'))

