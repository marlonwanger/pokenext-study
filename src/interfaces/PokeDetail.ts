export interface PokeDetail {
  name: string;
  height: number;
  weight: number;
  id: number;
  types: [{
    slot: number;
    type: {
      name: PokemonTypes;
    }
  }]
}

export enum PokemonTypes {
  normal = "normal",
  fighting = "fighting",
  flying = "flying",
  poison = "poison",
  ground = "ground",
  rock = "rock",
  bug = "bug",
  ghost = "ghost",
  steel = "steel",
  fire = "fire",
  water = "water",
  grass = "grass",
  electric = "electric",
  psychic = "psychic",
  ice = "ice",
  dragon = "dragon",
  dark = "dark",
  fairy = "fairy"
}