import "./style.css";
import ListItem from "../../components/ListItem/ListItem.js";
import { useEffect, useState, Fragment } from "react";
import Login from "../../components/Login/Login";
export default function Home() {
  const[toDo,setToDo] = useState([]);
  const [taskName, setTaskName] = useState();
  const[done, setDone] = useState([]);


  async function addTask() {
    // makes sure that taskName is not blank
    if (taskName) {
      // makes sure that taskName is a new task
      if(toDo.filter(function(tasks){
        return tasks.description === taskName;
      }).length>0){
        alert("Task already exists");
      }else{
        // Call Backend Function
        const request = await fetch("http://localhost:4000/todos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("@token"),
          },
          body: JSON.stringify({ description: taskName }),
        });
        // Get Status and Response
        const resp = await request.json();
        const status = await request.status;

        // Update the List
        if (status == 200) {
          setToDo(toDo.concat(resp.data));
        }
      }
      
    }
  }

  // finishTask: finishes a task by removing it from the toDo and adding it to the done
  async function finishTask(index) {
    const finishedTask = toDo[index];

    // Call Backend Function
    const request = await fetch("http://localhost:4000/todos", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("@token"),
      },
      body: JSON.stringify({ id: finishedTask.id }),
    });

    // Get Status and Response
    const resp = await request.json();
    const status = await request.status;

    // to change state with an array you can use filter, which returns in a new array
    setToDo(toDo.filter((task) => task !== finishedTask));
    // to add an item to an state that is an array you can use concat, which returns a new array
    setDone(done.concat(finishedTask));
  }

  async function undoTask(index) {
    const unDoneTask = done[index];

    // Call Backend Function
    const request = await fetch("http://localhost:4000/todos", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("@token"),
      },
      body: JSON.stringify({ id: unDoneTask.id }),
    });

    // Get Status and Response
    const resp = await request.json();
    const status = await request.status;

    if (status == 200) {
      // to remove an item from an state that is an array you must first make a copy and then splice the copy and then set the copy as the new state
      setDone(done.filter((task) => task !== unDoneTask));
      // to add an item to an state that is an array you can use concat, which returns a new array
      setToDo(toDo.concat(unDoneTask));
    }
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
      {localStorage.getItem("@token") ? 
      <><h1>You have {toDo.length} {toDo.length !== 1 ? "tasks" : "task"} left to do</h1><div className="search-container">
          <input type="text" onChange={(e) => setTaskName(e.target.value)} id="input-box"></input>
          <button className="done-button" onClick={() => addTask()}> Add </button>
        </div></> 
      : 
      <div id="login">
        <Login>
        </Login>
      </div>}
      
      
      <h1>To Do</h1>
      <ul id="todoList">
        {toDo.map((task, index) => (
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
