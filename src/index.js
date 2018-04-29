import React from 'react'
import ReactDOM from 'react-dom'

class TodoApp extends React.Component {
    render() {
        return (
           <div>
               <h3>TODO</h3>
               <form>
                   <input/>
                   <button>Add</button>
               </form>

               <TodoList />
           </div>
        );
    }
}

class TodoList extends React.Component {
    render() {
        return(
            <ul>
                <li>
                    test
                </li>
            </ul>
        );
    }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));