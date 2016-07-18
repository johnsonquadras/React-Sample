import React from 'react';
import MessageList from './MessageList';
import dummyMessages from './DummyMessages'
import dummyMessages2 from './DummyMessages2'
import dummyMessages3 from './DummyMessages3'

const messages = dummyMessages;
const messagesChangeText = dummyMessages2;
const addMessage = dummyMessages3;
const deleteMessage = dummyMessages2;

export default class MessageContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            messages,
            owner: "Johnson"
        };

        console.log("Mesage", this.state.messages)
    }


    updateMessageList(messages) {
        const setValue = (value) => {
            this.setState({
                messages: value
            })
            console.log(this.state.messages)
        }
        setTimeout(() => { setValue(messages) }, 1000)
    }

    changeText() {
        this.updateMessageList(messagesChangeText);
    }
    addMessages() {
        this.updateMessageList(addMessage);
    }

    deleteMessage() {
        this.updateMessageList(deleteMessage);
    }



    render() {
        let buttons = null;
        var condition = true;

        if (condition) {
            buttons = (<div className="row">
                <div className="col s3">
                    <button className = "waves-effect waves-light btn" onClick={this.changeText.bind(this) }>Change Text </button>
                </div>
                <div className="col s3">
                    <button className = "waves-effect waves-light btn green" onClick={this.addMessages.bind(this) }> Add Message</button>
                </div>
                <div className="col s3">
                    <button className = "waves-effect waves-light btn red" onClick={this.deleteMessage.bind(this) }> Delete Message</button>
                </div>
            </div>)
        } else {
            buttons = <div></div>;
        }
        return (<div className="container">
                {buttons}
            <div className="row">
                <div className="col s12">
                    <MessageList messages={this.state.messages} owner={this.state.owner}> </MessageList>
                </div>
            </div>

        </div>);
    }

}