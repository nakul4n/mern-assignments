
import getHttp from './http';

export class BookService{

    static instance=new BookService();

    getAllBooks=async ()=>{

        const response= await getHttp().get('books');
        return response.data;
    }

    addBook=async (book)=>{
        const response= await getHttp().post('books',book);
        return response.data;
    }

    updateBook=async(book)=>{
        const response= await getHttp().put(`books/${book.isbn}`,book);
        console.log('update response',response);
        return response.data;
    }
}