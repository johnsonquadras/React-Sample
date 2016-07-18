import React from 'react';
import MessageText from './MessageText';

export default class Message extends React.Component {

    constructor() {
        super();        
    }

    render() {
        const cardColor = (this.props.from == this.props.owner) ? "card blue lighten-1" :"card green lighten-1";

        return (<div className={cardColor}>
            <div className="card-content white-text">
                <span className="card-title">{(this.props.from == this.props.owner) ? "You" : this.props.from }</span>
                <p><MessageText text={this.props.text}/></p>
            </div>
        </div>)
    }

}