import React from 'react';
import ListEntry from './ListEntry.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myArray: [],
      myString:''
    };
    this.handleString = this.handleString.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleString(event) {
    this.setState({
      myString: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      myString:'',
      myArray: this.state.myArray.concat(this.state.myString)
    })
    //concat returns a new array - it doesnt modify the original array
    document.getElementById('myForm').reset();
  }
  handleClick(event) {
    const itemName = event.target.id;
    alert(itemName);
  }

  handleDelete(index) {
    let todos = this.state.myArray.slice();
    todos.splice(index, 1);
    this.setState ({
      myArray: todos
    })
  }

  handleEdit(index) {
    let todos = this.state.myArray.slice();
    let newTodo = prompt('Edit: ', todos[index]);
    console.log(newTodo);
    todos[index] = newTodo;
    console.log('UPDATED TODOS: ', todos);
    this.setState({
      myArray:todos
    })

  }

  render() {
    return (
        <div>

        Hello from List!!!!!
            <form id='myForm'>
                <input type='text' onChange={this.handleString} />
                <input type='submit' value='submit' onClick={this.handleSubmit} />
            </form>
          This is my string: {this.state.myString} <br />
          This is my array: {this.state.myArray} <br />
          <div>
            {this.state.myArray.map((item, index) => <ListEntry index={index} key={index} item={item} handleClick={this.handleClick} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />)}
          </div>

        </div>
    )
  }
}

export default List;