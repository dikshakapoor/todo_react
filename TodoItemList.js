import React from "react";
import Card from "./Card";

class TodoItemList extends React.Component {

  renderItem = task => {
    return (
      <Card key={task.id} task={task} handleDeltedItem={this.props.handleDeltedItem} handleCompletedItem={this.props.handleCompletedItem}
        handleEditedTask={this.props.handleEditedTask}
        updatedTaskList={this.props.updatedTaskList} setEditModeCompeleted={this.props.setEditModeCompeleted} handleEditedTaskDisciption = {this.props.handleEditedTaskDisciption}/>
    )
  }

  render() {
    const { entries } = this.props;

    if (entries.length <= 0) return null;
    return (
      <div>
        {entries.map((task) => this.renderItem(task))}
      </div>
    )
  }
}

export default TodoItemList;