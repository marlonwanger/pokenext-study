import { GetStaticProps } from "next";
import Image from "next/image";
import Card from "../components/PokemonListCard";
import { pokeApi } from "@/interfaces/PokeApi";
import PokemonListCard from "../components/PokemonListCard";
import { useEffect, useState } from "react";


type HomeProps = {
  pokemons: [{
    id?: number
    name: string;
    url: string;
  }]
}

export default function Home({pokemons}: HomeProps) {

  const [pokemon, setFilterPokemon] = useState<any[]>([]);

  useEffect(() => {
    setFilterPokemon(pokemons)
  }, [pokemons])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFilterPokemon(pokemons.filter(pokemon => pokemon.name.includes(e.target.value.toLocaleLowerCase())))
  }

  return (
    
    <main className="page space-y-8">
      <div className="flex justify-center items-center space-x-4">
        <h1 className="text-red-500 font-bold text-5xl">Poke<span className="text-black">Next</span></h1>
        <Image 
          alt="pokeball"
          src="/images/pokeball.png"
          width={50}
          height={50}
        />
      </div>

      <div className="flex items-center justify-center">

        <input type="text" placeholder="Digite aqui para filtrar o pokemon" 
        className="border border-solid border-black px-6 py-2 w-[50%]"   name="search" id="search" onChange={handleChange} />
      </div>

      <div>
        <ul className="flex flex-wrap justify-between">
          {pokemon.map((pokemon: any) => (
            <PokemonListCard key={pokemon.id} pokemon={pokemon} />        
          ))}
        </ul>
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  
  const maxPokemon = 151;
  const api = 'https://pokeapi.co/api/v2/pokemon';
  const res = await fetch(`${api}?limit=${maxPokemon}`);
  const data = await res.json() as pokeApi;

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results, 
    }
  }
}
