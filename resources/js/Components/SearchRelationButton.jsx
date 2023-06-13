import React from 'react'

export default function SearchRelationButton({children, active, onClick}) {
  return (
    <button 
        onClick={onClick}
        className={ 
            active 
            ? "text-white text-lg px-5 py-2 mb-2 bg-[#AC3FFF]/20 rounded-lg"
            : "text-white text-lg px-5 py-2 mb-2 hover:bg-[#AC3FFF]/10 rounded-lg"
    }>{children}</button>
  )
}
