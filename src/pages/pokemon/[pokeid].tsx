import Badge from '@/components/base/Badge';
import { BigCard } from '@/components/base/Card';
import { pokeApi } from '@/interfaces/PokeApi';
import { PokeDetail, PokemonTypes } from '@/interfaces/PokeDetail';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
    fallback: true,
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
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div role="status" className="flex justify-center items-center">
        <svg
          aria-hidden="true"
          className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

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
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
      </Link>
      <BigCard>
        <h1 className="text-3xl capitalize font-bold bg-slate-900 text-white py-3 px-20">
          {pokemon.name}
        </h1>
        <span>
          <Image
            priority
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
      </BigCard>
      <Link href={`/pokemon/${pokemon.id + 1}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </Link>
    </div>
  );
}
