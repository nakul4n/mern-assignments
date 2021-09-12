
const url = 'http://localhost:80/api/authors/';

export class AuthorService {

    static instance = new AuthorService();

    constructor() {

    }

    getAll = async () => {
        try {
            let response = await fetch(url);
            console.log('response', response);
            if (response.status !== 200) {
                console.error('http error', response.status);
                return [];
            }
            let authors = await response.json();
            return authors;
        } catch (error) {
            console.log('error', error);
            return null;
        }
    }
}
