export class PokemonList {
    name: string;
    url: string;
    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
    }
}

export class PokemonDetailbyName {
    name: string;
    id: number;
    sprites: string;
    constructor(name: string, id: number, sprites: {front_default: string;}) {
        this.name = name;
        this.id = id;
        this.sprites =  sprites.front_default;
    }
}

export class PokemonDetailLocalStorage {
    name: string;
    id: number;
    sprites: string;
    constructor(name: string, id: number, sprites: string) {
        this.name = name;
        this.id = id;
        this.sprites =  sprites;
    }
}

export class PokemonDetailbyID {
    name: string;
    id: number;
    sprites: string;
    dream_world: string;
    types: string;
    moves: {};
    stats: {};
    height: number;
    weight: number;
    order: number;
    base_experience: number;
    constructor(name: string, id: number, sprites: {front_default: string, other: {dream_world :{front_default: string}}}, 
        dream_world: {other: {dream_world :{front_default: string}}},
        types: [{type: {name: string}}], moves: {}, stats: {}, 
        height: number, weight: number, order: number, base_experience: number) {
        this.name = name;
        this.id = id;
        this.sprites =  sprites.front_default;
        this.dream_world = sprites.other.dream_world.front_default;
        this.types = types[0].type.name;
        this.moves = moves;
        this.stats = stats;
        this.height = height;
        this.weight = weight;
        this.order = order;
        this.base_experience = base_experience;
    }
}

export class PokemonMoves {
    name: string;
    type: string;
    accuracy: number;
    constructor(name: string, type: {name: string}, accuracy: number) {
        this.name = name;
        this.type = type.name;
        this.accuracy = accuracy;
    }
}

export class PokemonStats {
    name: string;
    id: number;
    game_index: number;
    constructor(name: string, id: number, game_index: number) {
        this.name = name;
        this.id = id;
        this.game_index = game_index;
    }
}

export class DemoModule {
    name: string;
    url: number;
    constructor(name: string, url: number) {
        this.name = name;
        this.url = url;
    }
}

export interface Person {
    name: string;
}