import React from "react";
import completeButtonImg from "./_ionicons_svg_md-checkmark-circle.svg";
import removeButtonImg from "./_ionicons_svg_md-trash.svg";
import editButtonImg from "./_ionicons_svg_md-create.svg";

class Card extends React.Component {

    constructor(props) {
        super(props);
        debugger;
        // this.state = {
        //     editedTask: props.task.discription,

        // }
    }

    debugger;
    updateEditedTask = (event) => {
        const editedTask = event.target.value.trim();
        this.setState({ editedTask })
    }

    keyPress = (event, id) => {
        if (event.which === 13) {
            const { editedTask } = this.state;
            this.props.handleEditedTask(editedTask, id);
        }
    }

    taskDescription = (discription, isCompleted, id, isEdited) => {
        // const { editedTask } = this.state;

        if (isEdited) {
            return (
                <div className="updatedtask">
                    <input autoFocus value={this.props.task.discription} key={id} className="editedTaskInput"
                        onChange={this.updateEditedTask}
                        onKeyPress={(event) => { this.keyPress(event, id) }}
                        onBlur={() => { this.saveOnOutOfFocus(id) }}
                    />
                </div>
            )
        }
        return (
            <div className="task" ><b className={isCompleted ? "taskCompleted" : ""}> {discription}</b></div>)
    }

    saveOnOutOfFocus = (id) => {
        const { editedTask } = this.state;
        this.props.handleEditedTask(editedTask, id);

    }

    debugger;
    setDisableForCompletedButton = () => {
        const { isCompleted, isEdited } = this.props.task;
        if (isCompleted === "" && isEdited === "") return false;
        else if (isCompleted === true) return false;
        else if (isCompleted === "" && isEdited === true) return true;
        else if (isCompleted === false && isEdited === true) return true;

    }

    setDisableForEditButton = () => {
        const { isEdited, isCompleted } = this.props.task;
        if (isEdited === "" && isCompleted === "") return false;
        else if (isEdited === true) return false;
        else if (isEdited === "" && isCompleted === true) return true;
        else if (isEdited === false && isCompleted === true) return true;
    }
    debugger;
    setDisableForRemoveButton = () => {
        const { isEdited, isCompleted } = this.props.task;
        if (isEdited === true && isCompleted === true)
            return true;
        else if (isEdited === false && isCompleted === true)
            return true;
        else if (isEdited === true && isCompleted === false)
            return true;
        else if (isEdited === "" && isCompleted === true) return true;
        else if (isEdited === true && isCompleted === "") return true;
        else if (isEdited === "" && isCompleted === "") return false;
    }
    render() {
        debugger;
        const { id, discription, isCompleted, isEdited } = this.props.task;

        return (<div className="card" id={id} key={id}>
            {this.taskDescription(discription, isCompleted, id, isEdited)}
            <div className="icon" >
                <button disabled={this.setDisableForCompletedButton()} className='completd' onClick={() => { this.props.handleCompletedItem(id); }} >
                    <img src={completeButtonImg} alt="complete" style={{ width: "20px", heigth: "20px" }} /></button>
                <button disabled={this.setDisableForRemoveButton()} className="removed" onClick={() => { this.props.handleDeltedItem(id); }} >
                    <img src={removeButtonImg} alt="delete" style={{ width: "20px", height: "20px" }} /></button>
                <button disabled={this.setDisableForEditButton()} className="edited" onClick={() => { this.props.editedTask(id); }}  >
                    <img src={editButtonImg} alt="edit" style={{ width: "20px", heigth: "20px" }} /></button>
            </div>
        </div>
        )
    }
}

export default Card;