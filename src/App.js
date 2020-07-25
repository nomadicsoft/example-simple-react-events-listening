import React from 'react';
import './App.css';

class Emitter extends React.Component {
    _handleButtonClick = () => {
        const event = new CustomEvent('button-clicked');
        window.dispatchEvent(event);
    };

    render() {
        return <button onClick={this._handleButtonClick}>
            Click me
        </button>;
    }
}

class Listener extends React.Component {
    state = {
        text: "Initial text, lol"
    };
    componentDidMount() {
        window.addEventListener('button-clicked', () => {
            this.setState({text: "You clicked a button"})
        })
    }

    render() {
        return <div>{ this.state.text }</div>;
    }
}

class App extends React.Component  {
    render() {
        return <div className="App">
            <Emitter/>
            <Listener/>
        </div>
    }
}

export default App;
