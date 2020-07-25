import React from 'react';
import './App.css';

class Emitter extends React.Component {
    _handleButtonClick() {
        console.log('clicked')
    }
    render() {
        return <button onClick={this._handleButtonClick}>Click me</button>;
    }
}

class Listener extends React.Component {
    state = {
        text: 'Initial text, lol',
    };

    render() {
        return <div>{ this.state.text }</div>;
    }
}

function App() {
    return (
        <div className="App">
            <Emitter />
            <Listener/>
        </div>
    );
}

export default App;
