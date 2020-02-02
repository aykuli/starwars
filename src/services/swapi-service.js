export default class SwapiService {
    _apiBase = 'https://swapi.co/api/';

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
            console.log(`Could not fetch this url: ${this._apiBase}${url}, \n received ${res.status}`)
        }    
        return await res.json();
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        }
    }

    getAllPlanets = async () => {
        const res = await this.getResource(`planets/`)
        return res.results.map(this._transformPlanet);
    }

    getPlanet = async (id) => {
        const planet = await this.getResource(`planets/${id}/`)
        return this._transformPlanet(planet);
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
        }
    }

    getAllPeople = async () => {
        const res = await this.getResource(`people`);
        return res.results.map(this._transformPerson);
    }

    getPerson = async (id) => {
        const person = await this.getResource(`people/${id}/`);
        return this._transformPerson(person);
    }

    _transformStarship = (ship) => {
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

    getAllStarships = async () => {
        const res = await this.getResource(`starships/`)
        return res.results.map(this._transformStarship);
    }

    getStarship = async (id) => {
        const ship = await this.getResource(`starships/${id}/`);
        return this._transformStarship(ship)
    }
}
