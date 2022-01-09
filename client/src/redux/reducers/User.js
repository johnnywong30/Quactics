import Actions from '../Actions'

const INIT_STATE = {
    user: ''
}

const User = (state = INIT_STATE, action) => {
    switch (action.type) {
        case Actions.REGISTER_USER: {
            return { ...state, user: action.payload }
        }
        default: 
            return state
    }
}

export default User