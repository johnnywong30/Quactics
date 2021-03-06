import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import { Switch } from 'react-router-dom'
import configureStore, { history } from './redux/store'
import Routes from './routes'

import './App.css';

export const store = configureStore()

const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Routes />
                </Switch>
            </ConnectedRouter>
        </Provider>
    )
    
}


export default App;
