import "./style.css";
import ListItem from "./ListItem/ListItem.js";
import { useEffect, useState, Fragment } from "react";

export default function Home() {
  const[todo,setTodo] = useState([]);
  const [taskName, setTaskName] = useState();
  const[done, setDone] = useState([]);


  async function addTask() {
    if(taskName){
      todo.filter(function(tasks){
        return tasks.description === taskName;
      }).length>0?alert("Task already exists"):setTodo(todo.concat({description: taskName}));
      setTaskName("");
    }
  }

  async function finishTask(index){
    const finishedTask = todo[index];

    setTodo(todo.filter((task) => task !== finishedTask));
    setDone(done.concat(finishedTask));
  }

  async function undoTask(index){
    const unDoneTask = done[index];

    setDone(done.filter((task) => task !== unDoneTask));
    setTodo(todo.concat(unDoneTask));
  }
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(`The task you created was: ${todo}`);
  //   var listItem = document.createElement("li");
  //   var todoElement = document.createElement("form");
  //   todoElement.setAttribute("onSubmit",{todoSubmit});
  //   todoElement.innerHTML = todo;
  //   var temp = document.createElement("input");
  //   temp.setAttribute("type","submit");
  //   temp.setAttribute("value","✓");
  //   temp.setAttribute("id","todo-symbol");
  //   todoElement.appendChild(temp);
  //   listItem.appendChild(todoElement);
  //   document.getElementById("todoList").appendChild(listItem);
  // }

  // const todoSubmit = (event) => {
  //   event.preventDefault();
  //   alert("Why won't this work?");
  // }
  //. in css is for classes and # is for things that are used once
  return (
    <Fragment>
      <h1>You have {todo.length} {todo.length > 1 ? "tasks" : "task"} left to do</h1>
      <div className="search-container">
        <input type="text" onChange={(e)=>setTaskName(e.target.value)} id="input-box"></input>
        <button className="done-button" onClick={() => addTask()}> Add </button>
      </div>
      <h1>To Do</h1>
      <ul id="todoList">
        {todo.map((task, index) => (
          <ListItem
            key={index}
            index={index}
            task={task.description}
            type="todo"
            finishHandler={finishTask}
            undoHandler={undoTask}
          ></ListItem>
        ))}
      </ul>
      <h1>Done</h1>
      <ul id="doneList">
        {done.map((task, index) => (
          <ListItem
            key={index}
            index={index}
            task={task.description}
            type="done"
            finishHandler={finishTask}
            undoHandler={undoTask}
          ></ListItem>
        ))}
      </ul>
    </Fragment>
  );
}
