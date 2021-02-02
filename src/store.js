import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import { save } from 'redux-localstorage-simple'

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
/* eslint-enable */

        // Видео webdev курс сохрание на локалке в сторе
// const configureStore = preloadedState => (
//     createStore(
//         rootReducer,
//         preloadedState,
//         composeEnhancers(
//             applyMiddleware(save ({ namespace: 'task-list'}))
//         ),
//     )
// );

//const store = configureStore({});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

window.store = store;

export default store;
