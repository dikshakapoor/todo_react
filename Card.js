import React from "react";
import completeButtonImg from "./_ionicons_svg_md-checkmark-circle.svg";
import removeButtonImg from "./_ionicons_svg_md-trash.svg";
import editButtonImg from "./_ionicons_svg_md-create.svg";

let editedTask;
class Card extends React.Component {
    updateEditedTask = (event, id) => {
        this.props.handleEditedTaskDisciption(event.target.value, id)
        console.log(event);

    }

    handleKeyPress = (event, id) => {
        if (event.which === 13) {
            console.log(editedTask);
            this.props.setEditModeCompeleted(id);
            // this.props.handleEditedTask(editedTask, id);
        }
    }

    taskDescription = (discription, isCompleted, id, isEdited) => {
        // const { editedTask } = this.state;

        if (isEdited) {
            return (
                <div className="updatedtask">
                    <input autoFocus value={this.props.task.discription} key={id} className="editedTaskInput"
                        onChange={(event) => { this.updateEditedTask(event, id) }}
                        onKeyPress={(event) => { this.handleKeyPress(event, id) }}
                        onBlur={(event) => { this.saveOnOutOfFocus(event, id) }}
                    />
                </div>
            )
        }
        return (
            <div className="task" ><b className={isCompleted ? "taskCompleted" : ""}> {discription}</b></div>)
    }

    saveOnOutOfFocus = (event, id) => {
        console.log(event);
        this.props.setEditModeCompeleted(id); // will set the edit process over 
        // need to write this code -- save the edited value from state.discription in parent



    }

    getIsCompletedDisabled = () => {
        const { isCompleted, isEdited } = this.props.task;
        if (isCompleted === false && isEdited === false) return false;// for initial state of the buttons 
        else if (isCompleted === false && isEdited === true) return true; // disable the complete button when edited is true

    }

    getIsEditedDisabled = () => {
        const { isEdited, isCompleted } = this.props.task;
        if (isEdited === false && isCompleted === false) return false; // similar to that of Complete Button
        else if (isEdited === false && isCompleted === true) return true;
    }



    getIsRemoveDisabled = () => {

        const { isEdited, isCompleted } = this.props.task;
        return isEdited || isCompleted
    }

    render() {
        const { id, discription, isCompleted, isEdited } = this.props.task;

        return (
            <div className="card" id={id} key={id}>
                {this.taskDescription(discription, isCompleted, id, isEdited)}
                <div className="icon" >
                    <button disabled={this.getIsCompletedDisabled()} className='completd' onClick={() => { this.props.handleCompletedItem(id); }} >
                        <img src={completeButtonImg} alt="complete" style={{ width: "20px", heigth: "20px" }} /></button>
                    <button disabled={this.getIsRemoveDisabled()} className="removed" onClick={() => { this.props.handleDeltedItem(id); }} >
                        <img src={removeButtonImg} alt="delete" style={{ width: "20px", height: "20px" }} /></button>
                    <button disabled={this.getIsEditedDisabled()} className="edited" onClick={() => { this.props.handleEditedTask(id); }}  >
                        <img src={editButtonImg} alt="edit" style={{ width: "20px", heigth: "20px" }} /></button>
                </div>
            </div>
        )
    }
}

export default Card;