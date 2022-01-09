import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"

import User from "./User"

const reducers = history => 
    combineReducers({
        router: connectRouter(history),
        user: User
    })

export default reducers
    
