import React from 'react';
import ReactDOM from 'react-dom';
import "./style/main.less";

class Welcome extends React.Component {
    render () {
        return <h1> Hello World! This is a simple React Boilerplace </h1>;
    }
}
ReactDOM.render(<Welcome />, document.getElementById('root'));
