import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Card } from './base/Card';

type cardProps = {
  pokemon: {
    id?: number;
    name: string;
    url: string;
  };
};

export default function PokemonListCard({ pokemon }: cardProps) {
  return (
    <Card>
      <span>
        <Image
          src={`https://nexus.traction.one/images/pokemon/pokemon/${pokemon.id}.png`}
          alt={pokemon.name}
          height={120}
          width={120}
        />
      </span>
      <p className="bg-slate-800 rounded text-white p-1">#{pokemon.id}</p>
      <h3 className="capitalize font-bold text-xl text-slate-800">
        {pokemon.name}
      </h3>
      <Link
        className=" bg-white hover:bg-slate-800 rounded py-2 px-4 hover:text-slate-800 border border-solid border-slate-800 hover:bg-transparent text-slate-800 "
        href={`/pokemon/${pokemon.id}`}
      >
        Detalhes
      </Link>
    </Card>
  );
}
