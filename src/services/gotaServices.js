export default class GotService {

    static _apiBase = 'https://www.anapioficeandfire.com/api';

    static async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        return await res.json();
    }

    static async getAllCharacters(page = 5) {
        const res = await this.getResource(`/characters/?page=${page}&pageSize=10`);
        return res.map(this._transformCharacter);
    }

    static async getCharacter(id) {
        const res = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(res);
    }

    static async getAllHouses(page = 5) {
        const res = await this.getResource(`/houses/?page=${page}`);
        return res.map(this._transformHouse); 
    }

    static async getHouse(id) {
        const res = await this.getResource(`/houses/${id}`);
        return this._transformHouse(res);
    }

    static async getAllBooks(page = 5) {
        const res = await this.getResource(`/books/?page=${page}`);
        return res.map(this._transformBook);                               
    }

    static async getBoook(id) {
        const res = await this.getResource(`/books/${id}`);
        return this._transformBook(res);
    }

    static _transformCharacter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }

    static _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            released: book.released,
            publiser: book.publiser
        }
    }

    static _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }
}