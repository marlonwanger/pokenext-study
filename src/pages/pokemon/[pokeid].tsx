import Badge from '@/components/base/Badge';
import Card from '@/components/base/Card';
import { pokeApi } from '@/interfaces/PokeApi';
import { PokeDetail, PokemonTypes } from '@/interfaces/PokeDetail';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type PokemonProps = {
  pokemon: PokeDetail;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const maxPokemon = 151;
  const api = 'https://pokeapi.co/api/v2/pokemon';
  const res = await fetch(`${api}?limit=${maxPokemon}`);
  const data = (await res.json()) as pokeApi;

  const paths = data.results.map((item, index) => ({
    params: {
      pokeid: (index + 1).toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.pokeid;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await res.json();

  return {
    props: {
      pokemon: data,
    },
  };
};

export default function PokemonDetail({ pokemon }: PokemonProps) {
  return (
    <div className="flex justify-center items-center space-x-2 page">
      <Link
        href={
          pokemon.id != 1
            ? `/pokemon/${pokemon.id - 1}`
            : `/pokemon/${pokemon.id}`
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
      </Link>
      <Card withPercent={50}>
        <h1 className="text-3xl capitalize font-bold bg-slate-900 text-white py-3 px-20">
          {pokemon.name}
        </h1>
        <span>
          <Image
            src={`https://nexus.traction.one/images/pokemon/pokemon/${pokemon.id}.png`}
            alt={pokemon.name}
            height={200}
            width={200}
          />
        </span>
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-semibold text-xl">Numero:</h3>
          <p>#{pokemon.id}</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h3 className="font-semibold text-xl">Tipo</h3>
          <div className="flex space-x-3">
            {pokemon.types.map((type) => (
              <Badge key={type.type.name} type={type.type.name}>
                {type.type.name}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex space-x-8">
          <div>
            <h3 className="font-semibold text-lg">Altura:</h3>
            <p>{pokemon.height * 10} cm</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Peso:</h3>
            <p>{pokemon.weight / 10} kg</p>
          </div>
        </div>
      </Card>
      <Link href={`/pokemon/${pokemon.id + 1}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </Link>
    </div>
  );
}
