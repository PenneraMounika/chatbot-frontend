const initialState = {
    id: 1,
    messages: [{sender: 'bot', text: 'Hello, Welcome to student info system!'}],
    responses: [{body: "<StartChatButton />"}],
    isShown: 0,
    details: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'show':
            return {
                ...state,
                isShown: action.payload
            }
        case 'message':
            if(state.id === 1) {
                return {
                    ...state,
                    id: 2,
                    messages: [
                        ...state.messages,
                        {sender: 'user', text: action.payload},
                        {sender: 'bot', text: 'Enter your Name'}
                    ],
                    responses: [{body: 'nameInput'}]
                }
            } else if(state.id === 2) {
                return {
                    ...state,
                    id: 3,
                    messages: [
                        ...state.messages,
                        {sender: 'user', text: action.payload},
                        {sender: 'bot', text: 'Enter your Age'}
                    ],
                    responses: [{body: 'ageInput'}],
                    details: action.details
                }
            } else if(state.id === 3) {
                return {
                    ...state,
                    id: 4,
                    messages: [
                        ...state.messages,
                        {sender: 'user', text: action.payload},
                        {sender: 'bot', text: 'Thank you. In 5 seconds, bot will exit'}
                    ],
                    responses: [{body: ''}],
                    details: [...state.details, action.details],
                    isShown: 2
                }
            } else {
                return state
            }
        default: 
            return state;
    }
    
}

export default reducer;