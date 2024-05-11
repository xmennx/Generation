
export default class Team {
    constructor() {
        this.characters = new Set();
    }

addMembers(...characters) {
    for (const character of characters) {
        this.characters.add(character);
    }
}

* [Symbol.iterator]() {
    const characterList = Array.from(this.characters);
    for (let i = 0; i < characterList.length; i += 1) {
            yield characterList[i];
        }
    }
}
