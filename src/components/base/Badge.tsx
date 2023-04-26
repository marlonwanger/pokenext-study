import { PokemonTypes } from '@/interfaces/PokeDetail'
import React from 'react'

type BadgeProps = {
  children: React.ReactNode
  type: PokemonTypes
}

export default function Badge({children, type}: BadgeProps) {

  const style = {
    default: "text-sm font-medium mr-2 px-2.5 py-0.5 rounded",
    type: {
      normal: "capitalize text-white bg-gray-400",
      fighting: "capitalize text-white bg-orange-500",
      flying: "capitalize text-white bg-fly-color",
      poison: "capitalize text-white bg-purple-500",
      ground: "capitalize text-white bg-ground-color",
      rock: "capitalize text-white bg-yellow-600",
      bug: "capitalize text-white bg-green-700",
      ghost: "capitalize text-white bg-purple-700",
      steel: "capitalize text-white bg-gray-300",
      fire: "capitalize text-white bg-red-500",
      water: "capitalize text-white bg-blue-500",
      grass: "capitalize text-white bg-green-500",
      electric: "capitalize text-white bg-yellow-400",
      psychic: "capitalize text-white bg-pink-500",
      ice: "capitalize text-white bg-blue-300",
      dragon: "capitalize text-white bg-dragon-color",
      dark: "capitalize text-white bg-gray-700",
      fairy: "capitalize text-white bg-pink-400"
    }
  }

  return (
    <div className={`${style.default} ${style.type[type]}`}>
      {children}
    </div>
  )
}
