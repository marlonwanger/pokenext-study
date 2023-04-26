import React from 'react'

export function Card({children}: {children: React.ReactNode}) {
  return (
    <div className={`bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[23%]  flex flex-col justify-center items-center px-4 py-8 mb-8 mr-1 ml-1  space-y-4`}>
      {children}
    </div>
  )
}


export function BigCard({children}: {children: React.ReactNode}) {
  return (
    <div className={`bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[50%]  flex flex-col justify-center items-center px-4 py-8 mb-8 mr-1 ml-1  space-y-4`}>
      {children}
    </div>
  )
}
