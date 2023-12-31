import React from 'react'

const SearchInput = () => {
    return (
        <div className="flex my-3 bg-gray-100 p-3 w-full space-x-4 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input className="bg-gray-100 outline-none" type="text" placeholder="поиск сейфа" />
        </div>
    )
}

export default SearchInput
