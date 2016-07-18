import React from 'react';
import Message from './Message';
import  dummyMessages from './DummyMessages'
import  dummyMessages2 from './DummyMessages2'

var messageStyle = {
    width: '200px'
}

export default class MessageList extends React.Component {

    constructor() {
        super();
    }

    render() {
        return ( <div className="row">
                {this.props.messages.map((value, index) => {
                    return <div className="col s3"> <Message  text={value.text} from={value.from} owner={this.props.owner}> </Message> </div>
                }) }
            </div>)
    }

}