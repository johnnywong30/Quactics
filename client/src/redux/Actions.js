// All actions for Custom Reducers go in this file

// Actions are broken down into sections for each reducer

// Use action.payload to describe the data being sent to the reducer
// For more complicated reducers some smaller inconsequential secondary data can be passed along with action.payload ie, loading, fetching, etc however these should be very temporary pieces
// To keep conformity, all actions should follow solid and multiple actions may be called to change different pieces of state at the same time

const Actions = {
    // auth
    LOGIN_USER: 'LOGIN_USER',
    LOGOUT_USER: 'LOGOUT_USER',
    REGISTER_USER: 'REGISTER_USER'
}

export default Actions