import * as ActionNames from './action-names';

export const booksReducer=(books=[], action)=>{

    switch (action.type) {

        case ActionNames.BOOK_LIST:
            return action.payload;

        
        case ActionNames.BOOK_ADD:
            return [...books, action.payload];

        default:
            return books;
    }
}

export const bookReducer=( book=null, action)=>{
    
    switch(action.type){


        case ActionNames.BOOK_SELECT:
        case ActionNames.BOOK_ADD:
            return action.payload;

        
            

        default:
            return book;
    }
}