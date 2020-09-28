export default class GotService {
    constuctor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    static async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        return await res.json();
    }

    static getAllCharacters(page = 5) {
        return this.getResource(`/characters/?page=${page}&pageSize=10`);
    }

    static getCharacter(id) {
        return this.getResource(`/characters/${id}`);
    }

    static getAllHouses(page = 5) {
        return this.getResource(`/houses/?page=${page}`);
    }

    static getHouse(id) {
        return this.getResource(`/houses/${id}`);
    }

    static getAllBooks(page = 5) {
        return this.getResource(`/books/?page=${page}`);
    }

    static getBoook(id) {
        return this.getResource(`/books/${id}`);
    }
}