export default class SwapiService {
    _apiBase = 'https://swapi.co/api/';

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
            console.log(`Could not fetch this url: ${this._apiBase}${url}, \n received ${res.status}`)
        }    
        return await res.json();
    }

    _transformPlanet(planet) {
        const id = this._extractId(planet)
        return {
            id,
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        }
    }

    async geAlltPlanets() {
        const res = await this.getResource(`planets/`)
        return res.results.map(this._transformPlanet);
    }

    async getPlanet(id) {
        const planet = await this.getResource(`planets/${id}/`)
        return this._transformPlanet(planet);
    }

    _transformPerson(person) {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor,
        }
    }

    async getAllPeople() {
        const res = await this.getResource(`people`)
        return res.results.map(this._transformPerson);
    }

    async getPerson(id) {
        const person = await this.getResource(`people/${id}/`);
        return this._transformPerson(person);
    }

    _transformStarship(ship) {
        return {
            id: this._extractId(ship),
            name: ship.name,
            model: ship.model,
            manufacturer: ship.manufacturer,
            costInCredits: ship.costInCredits,
            length: ship.length,
            crew: ship.crew,
            passengers: ship.passengers,
            cargoCapacity: ship.cargoCapacity,
        }
    }

    async getAllStarships() {
        const res = await this.getResource(`starships/`)
        return res.results.map(this._transformStarship);
    }

    async getStarship(id) {
        const ship = await this.getResource(`starships/${id}/`);
        return this._transformStarship(ship)
    }
}
