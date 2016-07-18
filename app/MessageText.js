import React from 'react';

export default class MessageText extends React.Component {

    constructor() {
        super();        
    }

    render() {
        return <span className="white-text"> {this.props.text} </span>
    }

}