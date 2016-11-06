import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'
import thunk from 'redux-thunk'
import { increment, decrement } from './actions'
import { logger } from './middlewares/logger'
import { crashReporter } from './middlewares/crashReporter'
import { timeoutScheduler } from './middlewares/timeoutScheduler'

let middleware = [thunk];
if (process.env.NODE_ENV !== 'production') { 
    middleware = [...middleware,timeoutScheduler, logger, crashReporter];
} 

const store = createStore(counter, applyMiddleware(...middleware))

const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() =>
      {
        store.dispatch(increment)
      } 
    }
    onDecrement={() =>
      {
        store.dispatch(decrement) 
      }
    }
  />,
  rootEl
)






render()
store.subscribe(render)
/*
store.subscribe(() =>
  console.log(store.getState())
)
*/

