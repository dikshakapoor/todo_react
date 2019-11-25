//type of actions to be performed 
const ACTION = () => {
    const Types = {
        CREATE_ITEM: "CREATE_ITEM",
        DELETE_ITEM: "DELETE_ITEM",
        EDIT_ITEM: "EDIT_ITEM"
    };
    // actions
    const createItem = task => ({ //create a tsak
        type: Types.CREATE_ITEM,
        payload1: task,
        payload2: null
    });

    const deleteItem = id => ({
        type: Types.DELETE_ITEM,
        payload1: id,
        payload2: null
    });
    const editItem = (id, newTask) => ({
        type: Types.EDIT_ITEM,
        payload1: id,
        payload2: newTask
    })

};
export default ACTION;