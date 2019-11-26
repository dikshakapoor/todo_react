import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            inputUpdated: false,
        }
    }

    handleKeyPressEvent = (event) => {
        if (event.which === 13) {
            const textValue = event.currentTarget.value.trim();
            // event.currentTarget.value = " "; // wrong
            if (!textValue) return;// reset the state in the component to get empty input 
            this.setState({
                text: "",
                inputUpdate: false
            });
            return this.props.inputTask(textValue); // wrong
        }
    }

    onInputSubmit = () => {
        //  const textValue = document.querySelector('[data-new-task = "newTask"]').value.trim();;

        if (!this.state.text) return;// reset the state in the component to get empty input 
        const textValue = this.state.text;
        this.setState({
            text: "",
            inputUpdate: false
        });
        return this.props.inputTask(textValue);
    }
    todoInputValue = (event) => {
        debugger;
        const inputTask = event.target.value;
        this.props.setCurrentInputValue(inputTask);
    }
    handleInputChange = (ev) => {
        this.setState({
            text: ev.target.value,
            inputUpdated: true

        });
    }
    render() {
        const { currentInputValue } = this.props;
        const { text, inputUpdated } = this.state;
        const inputValue = (inputUpdated) ? text : currentInputValue;

        return (


            <div>
                <div className="input-container">
                    <input autoFocus
                        className="inputfield" data-new-task="newTask"
                        value={inputValue}
                        placeholder="Type here.."
                        onChange={this.handleInputChange}
                        onKeyPress={this.handleKeyPressEvent}
                    />
                </div>
                <div className="wrapper">
                    <button onClick={this.onInputSubmit} className="addTaskButton">
                        <strong>ADD </strong>
                    </button>
                </div>
            </div>
        )
    }
}


export default Form;