import {useState} from "react"
import "./App.css"

function App() {
    const [todoItem, setTodoItem] = useState("");
    const [todoList, setTodoList] = useState([]);

    const addTodoItem = () => {
        if (todoItem !== "") {
            setTodoList([...todoList, todoItem]);
            setTodoItem("");
        }
    };

    const deleteTodoItem = (index) => {
        let newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    };

    return (
        <div className="App">
            <h1>React Todo App</h1>

            {/* Input todo items */ }
            <div className="input-wrapper">
                <input 
                    type="text" 
                    name="todoItem" 
                    placeholder="Create a new todo" 
                    value={todoItem}
                    onChange={(e) =>{
                        setTodoItem(e.target.value);
                    }}
                />
                <button className="add-button" onClick={addTodoItem}>Add</button>
            </div>
            
            {/* Display todo items */ }
            {todoList.length > 0 ? (
                <ul className="todo-list">
                    {todoList.map((item, index) => (
                        <div className="todo">
                            <li key={index}>{item}</li>
                            <button 
                                className="delete-button" 
                                onClick={() => {
                                    deleteTodoItem(index);
                                }}>Delete</button>
                        </div>
                    ))}
                </ul>
            ) : (
                <div className="empty">
                    <p>No task found</p>
                </div>
            )}
        </div>
    );
}

export default App;
