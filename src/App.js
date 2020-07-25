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
    state = {
        text: "Initial text, lol"
    };
    _handleButtonClicked = () => {
        this.setState({text: "You clicked a button"});
    };
    render() {
        return <div>{ this.state.text }</div>;
    }
}

class App extends React.Component  {
    state = {
        textChanged: false,
    };

    _handleButtonClickParent = () => {
        this.listener._handleButtonClicked();
    };

    render() {
        return <div className="App">
            <Emitter _handleButtonClickParent={this._handleButtonClickParent}/>
            <Listener  ref={ref => { this.listener = ref; }} />
        </div>
    }
}

export default App;
