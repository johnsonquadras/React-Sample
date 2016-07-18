import React from 'react';
import Header from './Header';
import Table from './Table'

var names = ['Johnson','Jessita','Quadras','Jess']

class App extends React.Component {
    
    changeName( ) {
        const newIndex = this.state.index === names.length ? this.state.index = 0 : this.state.index; 
        this.setState({
            from : names[newIndex],
            index : newIndex + 1
        })
    }
    
    stop() {
        clearInterval(this.timer);
    }
    
    start(){
         var self = this;
        this.timer = setInterval(function(){self.changeName()},1200)     
    }

    constructor() {
        super();
        this.state = {
            from: "Johnson",
            index : 0
        }
        
        this.timer = null;
    }
    

    render() {
        return <div className="container">
                 <Table> </Table>
       
        </div >
  }
}

//   <Header message="This is the title"> </Header>
//             Hello {this.state.from } 
//             <button onClick={ this.start.bind(this) } >Start </button> 
//             <button onClick={ this.stop.bind(this) } >Stop </button>

export default App;
