import React from 'react'

export default function Card({children, withPercent}: {children: React.ReactNode, withPercent: number}) {
  return (
    <div className={`bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 
                     w-[${withPercent}%]  flex flex-col justify-center items-center px-4 py-8 mb-8 mr-1 ml-1  space-y-4`}>
      {children}
    </div>
  )
}
