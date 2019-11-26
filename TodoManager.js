import React from 'react';
import './TodoManager.css';
import NavigationBar from "./NavigationBar";
import TodoItemList from "./TodoItemList";
import Form from "./Form";
class TodoManager extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentInputValue: "",
      taskList: [],

    }
  }
  inputTask = (currentValue) => {
    const { taskList } = this.state;
    const newTask = {
      id: Date.now(),
      discription: currentValue,
      isCompleted: false,
      isEdited: false,
    };
    this.setState({
      currentInputValue: '',
      taskList: [...taskList, newTask],
    })
  }
  // setCurrentInputValue = (currentValue) => {

  //   this.setState(currentValue)
  // }
  // todoInputValue = (event) => {
  //   const currentValue = event.target.value;
  //   this.inputTask(currentValue);
  // };

  handleDeltedItem = (itemToBeDeleted) => {
    const updatedList = this.state.taskList.filter(function (taskList) {
      return taskList.id !== itemToBeDeleted;
    })
    this.setState({ taskList: updatedList })
  }
  debugger;
  handleCompletedItem = (itemMarkedAsCompleted) => {
    const updatedList = this.state.taskList.map((task) => {
      if (task.id === itemMarkedAsCompleted) {
        task.isCompleted = !task.isCompleted;
        return task;
      }
      return task;
    })
    this.setState({ taskList: updatedList })
  }
  debugger;

  handleEditedTask = (id) => {
    const updatedList = this.state.taskList.map((task) => {
      if (task.id === id) {
        task.isEdited = !task.isEdited;
        // task.isCompleted = false;
        return task
      }
      return task
    })
    this.setState({ taskList: updatedList })
  }

  markAllCompelte = () => {
    const updatedList = this.state.taskList.map((task) => {
      task.isCompleted = !task.isCompleted;
      return task;
    })
    this.setState({ taskList: updatedList })
  }

  deleteAll = () => {
    this.setState({ taskList: [] })
  }

  updatedTaskList = (id) => {
    const updatedList = this.state.taskList.map((task) => {
      if (task.id === id) {
        task.isEdited = !task.isEdited;
        return task
      }
      return task
    }
    )
    this.setState({ taskList: updatedList })
  }
  setEditModeCompeleted = (id) => {
    const updatedList = this.state.taskList.map((task) => {
      if (task.id === id) {
        task.isEdited = false; // to show process is over 
        return task
      }
      return task
    }
    )
    this.setState({ taskList: updatedList })

  }
  handleEditedTaskDisciption = (editedTaskDesc, id) => {
    const updatedList = this.state.taskList.map((task) => {
      if (task.id === id) {
        task.discription = editedTaskDesc// to show process is over 
        return task
      }
      return task

    })
    this.setState({ taskList: updatedList })
  }

  render() {
    const { taskList } = this.state;
    return (
      <div className="container" >
        <NavigationBar markAllCompelte={this.markAllCompelte} deleteAll={this.deleteAll} />
        <h2>TODO LIST</h2>
        <Form inputTask={this.inputTask} currentInputValue={this.state.currentInputValue} todoInputValue={this.todoInputValue} setCurrentInputValue={this.setCurrentInputValue} />
        <ul className="taskList_wrapper">
          <TodoItemList entries={taskList} handleDeltedItem={this.handleDeltedItem} handleCompletedItem={this.handleCompletedItem}
            handleEditedTask={this.handleEditedTask}
            updatedTaskList={this.updatedTaskList} setEditModeCompeleted={this.setEditModeCompeleted} handleEditedTaskDisciption={this.handleEditedTaskDisciption} />
        </ul>
      </div >
    );
  }
}

export default TodoManager;


