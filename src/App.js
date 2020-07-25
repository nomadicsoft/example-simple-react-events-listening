import React from 'react';
import './App.css';

class Emitter extends React.Component {
    render() {
        return <button onClick={this.props._handleButtonClickParent}>
            Click me
        </button>;
    }
}

class Listener extends React.Component {
    render() {
        return <div>{ this.props.textChanged ?
                        "You clicked a button" : "Initial text, lol" }</div>;
    }
}

class App extends React.Component  {
    state = {
        textChanged: false,
    };

    _handleButtonClickParent = () => {
        this.setState({textChanged: true})
    };

    render() {
        return <div className="App">
            <Emitter _handleButtonClickParent={this._handleButtonClickParent}/>
            <Listener textChanged={this.state.textChanged}/>
        </div>
    }
}

export default App;
