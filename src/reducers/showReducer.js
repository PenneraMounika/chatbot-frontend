const initialState = {isShown: false}

const showReducer = (state = initialState, action) => {
    switch (action.type) {
        case "show":
            return {
                isShown: action.payload
            }
        default:
            return state;
    }
}

export default showReducer;