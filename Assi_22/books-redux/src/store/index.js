import {createStore, combineReducers} from 'redux';
import {userReducer} from './user-reducer';
import {statusReducer} from './status-reducer';
import {authorReducer,authorsReducer} from './author-reducer';
import {booksReducer,bookReducer} from './books-reducer';


const config= ()=> combineReducers({
    status:statusReducer,
    user:userReducer,
    selectedAuthor:authorReducer,
    authors:authorsReducer,
    books:booksReducer,
    selectedBook:bookReducer
});


const createMyStore= () => createStore(
                    config(),
                    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                    );

export default createMyStore;
