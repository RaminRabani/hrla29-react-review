import React from 'react';
import List from './List.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          firstName: '',
          lastName: ''
        };
        this.enterFirst = this.enterFirst.bind(this);
        this.enterLast = this.enterLast.bind(this);
    }
    
    enterFirst(event) {
        this.setState({
            firstName: event.target.value
        })
    }
    enterLast(event) {
        this.setState ({
            lastName: event.target.value
        })
    }
    
    render() {
        return (
            <div>

                <div>
                    First Name:{this.state.firstName} <br />
                    <input type='text' name='first' onChange={this.enterFirst}/><br />
                    Last Name: {this.state.lastName} <br />
                    <input type='text' name='last' onChange={this.enterLast}/>

                </div>
                {this.state.firstName === 'Ramin' && this.state.lastName === 'Rabani' ? <List /> : null}

            </div>
        )
    }
}

export default App;

//render must have only one parent node (div)

//Step 10: line 37