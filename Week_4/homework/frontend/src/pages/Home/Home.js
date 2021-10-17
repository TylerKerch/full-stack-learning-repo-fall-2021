import "./style.css";
import { useEffect, useState, Fragment } from "react";

export default function Home() {
  const[todo,setTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The task you created was: ${todo}`);
    var listItem = document.createElement("li");
    var todoElement = document.createElement("form");
    todoElement.setAttribute("onSubmit",{todoSubmit});
    todoElement.innerHTML = todo;
    var temp = document.createElement("input");
    temp.setAttribute("type","submit");
    temp.setAttribute("value","✓");
    temp.setAttribute("id","todo-symbol");
    todoElement.appendChild(temp);
    listItem.appendChild(todoElement);
    document.getElementById("todoList").appendChild(listItem);
  }

  const todoSubmit = (event) => {
    event.preventDefault();
    alert("Why won't this work?");
  }

  return (
    <Fragment>
      <h1>You have 3 tasks left to do</h1>
        <div id="search-container">
          <form onSubmit={handleSubmit}>
            <label>
              <input type="text" onChange={(e)=>setTodo(e.target.value)} id="input-box"/>
            </label>
            <input type="submit" value="Done" id="done-button"/>
          </form>
        </div>
        <h1>To Do</h1>
        <ul id="todoList">

        </ul>
        <h1>Done</h1>
    </Fragment>
  );
}
