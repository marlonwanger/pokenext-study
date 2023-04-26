export interface pokeApi {
  count: number;
  next: string;
  previous: string;
  results: [{
    id?: number
    name: string;
    url: string;
  }]
}
