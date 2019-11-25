import React, { Component } from "react";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../../todo_redux_react/src/components/store";
import TodoManager from "./TodoManager";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

class App extends Component {
    render() {
        return (
            <ReduxProvider store={reduxStore}>
                <TodoManager />
            </ReduxProvider>
        );
    }
}

export default App;